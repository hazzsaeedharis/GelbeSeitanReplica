// Search form handler for homepage
// Intercepts form submission and routes to dynamic search pages

(function () {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchHandler);
  } else {
    initSearchHandler();
  }

  function initSearchHandler() {
    const form = document.querySelector('form[name="startpageForm"]');

    if (!form) {
      console.warn('Search form not found');
      return;
    }

    const whereInput = document.getElementById('where_search');
    const geoTrigger = document.querySelector('.geolocation-trigger');
    const locationDropdown = document.getElementById('location-dropdown');
    let locationRequested = false;
    let userCoordinates = null; // Store user's coordinates for search

    // Function to show error modal
    function showErrorModal(message) {
      const overlay = document.createElement('div');
      overlay.id = 'location-modal-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      const modal = document.createElement('div');
      modal.style.cssText = `
        background: #fff;
        border-radius: 8px;
        padding: 0;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        position: relative;
      `;

      const header = document.createElement('div');
      header.style.cssText = `
        background: #ffdc00;
        padding: 16px 20px;
        border-radius: 8px 8px 0 0;
        font-weight: bold;
        font-size: 16px;
        color: #000;
      `;
      header.textContent = 'Fehler';

      const body = document.createElement('div');
      body.style.cssText = `
        padding: 24px 20px;
        color: #333;
        font-size: 15px;
        line-height: 1.5;
      `;
      body.textContent = message;

      const buttons = document.createElement('div');
      buttons.style.cssText = `
        padding: 16px 20px;
        border-top: 1px solid #e0e0e0;
        display: flex;
        justify-content: flex-end;
        gap: 12px;
      `;

      const okBtn = document.createElement('button');
      okBtn.textContent = 'OK';
      okBtn.style.cssText = `
        padding: 10px 24px;
        background: #ffdc00;
        border: 1px solid #ffdc00;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        color: #000;
        font-weight: bold;
      `;
      okBtn.onmouseover = () => okBtn.style.background = '#ffd700';
      okBtn.onmouseout = () => okBtn.style.background = '#ffdc00';
      okBtn.onclick = () => {
        document.body.removeChild(overlay);
      };

      buttons.appendChild(okBtn);
      modal.appendChild(header);
      modal.appendChild(body);
      modal.appendChild(buttons);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      okBtn.focus();
    }

    // Style the dropdown and its parent container
    if (locationDropdown) {
      // Make parent container position relative
      const inputContainer = whereInput?.closest('.mod-Input');
      if (inputContainer) {
        inputContainer.style.position = 'relative';
      }

      locationDropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 0;
        margin-top: 0;
        z-index: 1000;
        list-style: none;
        padding: 0;
        margin: 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      `;

      const dropdownItem = locationDropdown.querySelector('.geolocation-trigger');
      if (dropdownItem) {
        dropdownItem.style.cssText = `
          display: flex;
          align-items: center;
          padding: 12px 15px;
          cursor: pointer;
          color: #000;
          font-size: 14px;
        `;
        dropdownItem.onmouseover = () => {
          dropdownItem.style.backgroundColor = '#f5f5f5';
        };
        dropdownItem.onmouseout = () => {
          dropdownItem.style.backgroundColor = 'transparent';
        };

        // Ensure the icon is styled correctly
        const icon = dropdownItem.querySelector('img');
        if (icon) {
          icon.style.cssText = `
            margin-left: auto;
            display: block;
            width: 16px;
            height: 16px;
          `;
        }
      }
    }

    // Function to request and set user location
    async function requestUserLocation() {
      if (locationRequested || !navigator.geolocation) {
        if (!navigator.geolocation) {
          showErrorModal('Geolocation ist in Ihrem Browser nicht verfügbar.');
        }
        return;
      }

      locationRequested = true;

      // Hide dropdown
      if (locationDropdown) {
        locationDropdown.style.display = 'none';
      }

      if (!whereInput) return;

      // Show loading state
      const originalPlaceholder = whereInput.placeholder;
      whereInput.placeholder = 'Standort wird ermittelt...';
      whereInput.disabled = true;

      navigator.geolocation.getCurrentPosition(
        async function (position) {
          try {
            const { latitude, longitude } = position.coords;

            // Reverse geocode using OSM Nominatim to get more specific location
            // Try to get district/suburb/neighborhood within 50km radius context
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1&zoom=14`,
              {
                headers: {
                  'User-Agent': 'GelbeSeitenApp/1.0'
                }
              }
            );
            const data = await response.json();

            // Store coordinates for use in search (50km radius)
            userCoordinates = { lat: latitude, lon: longitude };

            // Set the input to show "Meinen Standort verwenden" instead of location name
            whereInput.value = 'Meinen Standort verwenden';
            whereInput.placeholder = originalPlaceholder;

            whereInput.disabled = false;
            whereInput.focus();
            locationRequested = false;
          } catch (error) {
            console.error('Geocoding error:', error);
            whereInput.placeholder = 'Fehler beim Abrufen des Standorts';
            whereInput.disabled = false;
            locationRequested = false;
          }
        },
        function (error) {
          console.error('Geolocation error:', error);
          let errorMsg = 'Standort konnte nicht abgerufen werden.';
          if (error.code === error.PERMISSION_DENIED) {
            errorMsg = 'Standortzugriff wurde verweigert. Bitte erlauben Sie den Zugriff in Ihren Browsereinstellungen.';
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            errorMsg = 'Standortinformationen sind nicht verfügbar.';
          } else if (error.code === error.TIMEOUT) {
            errorMsg = 'Zeitüberschreitung beim Abrufen des Standorts.';
          }
          // Show error modal (no promise needed for errors)
          showErrorModal(errorMsg);
          whereInput.placeholder = originalPlaceholder;
          whereInput.disabled = false;
          locationRequested = false;
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    }

    // Show dropdown when user focuses on "Wo" field (if empty)
    if (whereInput && locationDropdown) {
      whereInput.addEventListener('focus', function () {
        if (!this.value && navigator.geolocation) {
          locationDropdown.style.display = 'block';
        }
      });

      whereInput.addEventListener('blur', function () {
        // Delay hiding to allow click on dropdown item
        setTimeout(() => {
          if (locationDropdown && document.activeElement !== geoTrigger) {
            locationDropdown.style.display = 'none';
          }
        }, 200);
      });
    }

    // Intercept form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const keyword = document.getElementById('what_search')?.value || '';
      const location = document.getElementById('where_search')?.value || '';

      // Check if user is using geolocation (indicated by "Meinen Standort verwenden" text or stored coordinates)
      const isUsingGeolocation = (location && location.toLowerCase().includes('meinen standort verwenden')) || userCoordinates !== null;

      if (!keyword && !isUsingGeolocation) {
        showErrorModal('Bitte geben Sie einen Suchbegriff oder Ort ein');
        return;
      }

      // Convert to URL-friendly slugs
      const keywordSlug = keyword.toLowerCase().trim().replace(/\s+/g, '_') || 'alle';

      // If using geolocation, use a generic location slug and pass coordinates
      let locationSlug = 'standort';
      let searchUrl = `/branchen/${keywordSlug}/${locationSlug}`;

      if (isUsingGeolocation && userCoordinates) {
        // Pass coordinates as query params for backend to use with 50km radius
        searchUrl += `?lat=${userCoordinates.lat}&lon=${userCoordinates.lon}&radius=50`;
      } else if (location && !isUsingGeolocation) {
        // Normal location-based search
        locationSlug = location.toLowerCase().trim().replace(/\s+/g, '_').replace(/[()]/g, '') || 'deutschland';
        searchUrl = `/branchen/${keywordSlug}/${locationSlug}`;
      }

      // Navigate to search results
      window.location.href = searchUrl;
    });

    // Handle geolocation trigger button
    if (geoTrigger) {
      geoTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        requestUserLocation();
      });
    }
  }
})();
