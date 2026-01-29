// Minimal search form handler for branchen search results page
// Handles form submission to route to new search

(function() {
  'use strict';
  
  function init() {
    const form = document.querySelector('form[name="startpageForm"]');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const keyword = document.getElementById('what_search')?.value || '';
      const location = document.getElementById('where_search')?.value || '';
      
      if (!keyword && !location) return;
      
      const keywordSlug = keyword.toLowerCase().trim().replace(/\s+/g, '_') || 'alle';
      const locationSlug = location.toLowerCase().trim().replace(/\s+/g, '_').replace(/[()]/g, '') || 'deutschland';
      
      window.location.href = `/branchen/${keywordSlug}/${locationSlug}`;
    });
    
    // Geolocation handler
    const geoTrigger = document.querySelector('.geolocation-trigger');
    if (geoTrigger) {
      geoTrigger.addEventListener('click', async function(e) {
        e.preventDefault();
        
        if (!navigator.geolocation) {
          alert('Geolocation nicht verfügbar');
          return;
        }
        
        const whereInput = document.getElementById('where_search');
        if (!whereInput) return;
        
        const span = this.querySelector('span');
        const originalText = span?.textContent || '';
        if (span) span.textContent = 'Lädt...';
        
        navigator.geolocation.getCurrentPosition(
          async function(position) {
            try {
              const { latitude, longitude } = position.coords;
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
              if (span) span.textContent = originalText;
            }
          },
          function(error) {
            console.error('Geolocation error:', error);
            if (span) span.textContent = originalText;
          }
        );
      });
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
