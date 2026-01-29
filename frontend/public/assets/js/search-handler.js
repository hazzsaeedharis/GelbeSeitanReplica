// Search form handler for homepage
// Intercepts form submission and routes to dynamic search pages

(function() {
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
    
    // Intercept form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const keyword = document.getElementById('what_search')?.value || '';
      const location = document.getElementById('where_search')?.value || '';
      
      if (!keyword && !location) {
        alert('Bitte geben Sie einen Suchbegriff oder Ort ein');
        return;
      }
      
      // Convert to URL-friendly slugs
      const keywordSlug = keyword.toLowerCase().trim().replace(/\s+/g, '_') || 'alle';
      const locationSlug = location.toLowerCase().trim().replace(/\s+/g, '_').replace(/[()]/g, '') || 'deutschland';
      
      // Navigate to search results
      window.location.href = `/branchen/${keywordSlug}/${locationSlug}`;
    });
    
    // Handle geolocation trigger
    const geoTrigger = document.querySelector('.geolocation-trigger');
    
    if (geoTrigger) {
      geoTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!navigator.geolocation) {
          alert('Geolocation ist in Ihrem Browser nicht verfügbar');
          return;
        }
        
        const whereInput = document.getElementById('where_search');
        if (!whereInput) return;
        
        // Show loading state
        const originalText = this.querySelector('span')?.textContent || '';
        const span = this.querySelector('span');
        if (span) span.textContent = 'Lädt...';
        
        navigator.geolocation.getCurrentPosition(
          async function(position) {
            try {
              const { latitude, longitude } = position.coords;
              
              // Reverse geocode using OSM Nominatim
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
              );
              const data = await response.json();
              
              const city = data.address?.city || data.address?.town || data.address?.village || '';
              
              if (city) {
                whereInput.value = city;
                whereInput.focus();
              }
              
              if (span) span.textContent = originalText;
            } catch (error) {
              console.error('Geocoding error:', error);
              alert('Fehler beim Abrufen des Standorts');
              if (span) span.textContent = originalText;
            }
          },
          function(error) {
            console.error('Geolocation error:', error);
            alert('Standort konnte nicht abgerufen werden. Bitte Standortzugriff erlauben.');
            if (span) span.textContent = originalText;
          }
        );
      });
    }
  }
})();
