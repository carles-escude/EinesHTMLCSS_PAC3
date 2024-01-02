//import { onCLS, onFID, onLCP } from 'web-vitals';

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#000"
        },
        "button": {
          "background": "#1DB954"
        }
      },
      "content": {
        "message": "Aquest lloc web utilitza galetes per assegurar que obtingui la millor experiència al nostre lloc web.",
        "dismiss": "Accepta",
        "link": "Més informació",
        "href": "#"
      }
    });
  });

/*
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
*/