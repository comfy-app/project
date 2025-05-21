// Cookie Banner functionality
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.querySelector('.cookie-banner');
  const customizeContent = document.querySelector('.cookie-customize-content');
  const customizeBtn = document.querySelector('.btn-cookie-customize');
  const acceptBtn = document.querySelector('.btn-cookie-accept');
  const rejectBtn = document.querySelector('.btn-cookie-reject');
  const savePreferencesBtn = document.querySelector('.btn-cookie-save');
  
  // Show banner if no cookie preference is set
  if (!localStorage.getItem('cookiePreferences')) {
    cookieBanner.classList.add('visible');
  }
  
  // Toggle customize section
  customizeBtn.addEventListener('click', () => {
    customizeContent.classList.toggle('visible');
  });
  
  // Accept all cookies
  acceptBtn.addEventListener('click', () => {
    const preferences = {
      essential: true,
      performance: true,
      functional: true,
      targeting: true,
      timestamp: new Date().toISOString()
    };
    saveCookiePreferences(preferences);
  });
  
  // Reject non-essential cookies
  rejectBtn.addEventListener('click', () => {
    const preferences = {
      essential: true,
      performance: false,
      functional: false,
      targeting: false,
      timestamp: new Date().toISOString()
    };
    saveCookiePreferences(preferences);
  });
  
  // Save custom preferences
  savePreferencesBtn.addEventListener('click', () => {
    const preferences = {
      essential: true, // Always enabled
      performance: document.getElementById('performance-cookies').checked,
      functional: document.getElementById('functional-cookies').checked,
      targeting: document.getElementById('targeting-cookies').checked,
      timestamp: new Date().toISOString()
    };
    saveCookiePreferences(preferences);
  });
  
  function saveCookiePreferences(preferences) {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    cookieBanner.classList.remove('visible');
  }
});