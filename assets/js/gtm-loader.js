/* KAJAANITECH.FI 2024 */
function loadGTM(gtagId) {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gtagId;
  document.head.appendChild(script);
}

function initGTM(gtagId) {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', gtagId);
}

if (window.addEventListener) {
  window.addEventListener('load', function () {
    var gtagId = document.querySelector('meta[name="gtag-id"]').getAttribute('content');
    loadGTM(gtagId);
  }, false);
  window.addEventListener('DOMContentLoaded', function () {
    var gtagId = document.querySelector('meta[name="gtag-id"]').getAttribute('content');
    initGTM(gtagId);
  }, false);
} else {
  window.attachEvent('onload', function () {
    var gtagId = document.querySelector('meta[name="gtag-id"]').getAttribute('content');
    loadGTM(gtagId);
  });
  window.attachEvent('onDOMContentLoaded', function () {
    var gtagId = document.querySelector('meta[name="gtag-id"]').getAttribute('content');
    initGTM(gtagId);
  });
}
