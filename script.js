// analytics.js

(function() {
  // Load the gtag.js script dynamically
  const gtagScript = document.createElement('script');
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-SQ302JW8XN";
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  // Initialise the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-SQ302JW8XN');
})();
