
// ========================== Language selector & switch ================================

function setLanguage(lang) {                      // Sichtbarkeit Header/Footer toggeln 

  document.querySelectorAll('.lang').forEach(el => {
    el.style.display = 'none';
  });

  document.querySelectorAll(`.lang-${lang}`).forEach(el => {
    el.style.display = '';
  });

  if (texts[lang]) {                              // Dynamische Inhalte einsetzen (WICHTIG)
    for (const id in texts[lang]) {
      const el = document.getElementById(id);
      if (el) el.innerHTML = texts[lang][id]; 
    }
  }

  document.getElementById("language").value = lang;   // Dropdown synchron halten
  localStorage.setItem("lang", lang);                 // Sprache speichern

}


// ----------------------- Flaggen und Buttons ------------------------------------------

document.querySelectorAll('.lang-btn').forEach(btn => {    // buttons wegen der Flaggen
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
    updateActiveFlag(lang);
  });
});

document.getElementById("language").addEventListener("change", (event) => {
  const lang = event.target.value;
  setLanguage(lang);
  updateActiveFlag(lang);                                  // Flaggen synchronisieren ✅
});

function updateActiveFlag(lang) {                          // wegen der Flaggen
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}


const savedLang = localStorage.getItem("lang") || "en";   // Initialisierung beim Laden ergänzen -- Beim Laden aktivieren
setLanguage(savedLang);
updateActiveFlag(savedLang);                              // wegen der Flaggen - Damit beim Start die Flagge gleich korrekt markiert ist

document.getElementById("language").addEventListener("change", function () {
  setLanguage(this.value);
});

// setLanguage('en');    Initial: Englisch als Standard






// ============================ Overlay ================================ 


function openOverlay(src) {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  overlayImg.src = src;
  overlay.style.display = "flex";
  
  document.getElementById("overlay-img").src = src;
  document.getElementById("overlay").style.display = "flex";
 // toggle zoom on double-click/tap

overlayImg.addEventListener('dblclick', function (e) {
  this.classList.toggle('zoomed');
});

// close overlay on click outside image (optional)
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) { // clicked the backdrop
    closeOverlay();
    overlayImg.classList.remove('zoomed'); // reset zoom state
  }
});
}


function closeOverlay() {
 // document.getElementById("overlay").style.display = "none";
}

// make sure closeOverlay also resets zoom
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
  const oi = document.getElementById("overlay-img");
  if (oi) oi.classList.remove('zoomed');
}



// ------------------------- Footer aktualisieren ---------------------------------------

function updateFooter(lang) {               
  document.querySelector('.footer-de').style.display = (lang === 'de') ? 'block' : 'none';
  document.querySelector('.footer-en').style.display = (lang === 'en') ? 'block' : 'none';
}



// ============================ wegen Cookie settings ================================ 

console.log("Cookie-Script wurde geladen!");


document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("cookie-banner");
  const accept = document.getElementById("accept-cookies");
  const decline = document.getElementById("decline-cookies");
  const openSettingsDE = document.getElementById("open-cookie-settings-de");
  const openSettingsEN = document.getElementById("open-cookie-settings-en");

  // 👉 Statt localStorage jetzt sessionStorage
  const consent = sessionStorage.getItem("cookieConsent");

  // Wenn keine Zustimmung gespeichert wurde → Banner anzeigen
  if (!consent) {
    banner.style.display = "flex";
  } else if (consent === "accepted") {
    enableMatomo();
  }

  // Klick auf "Akzeptieren"
  accept.addEventListener("click", function() {
    sessionStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    enableMatomo();
  });

  // Klick auf "Ablehnen"
  decline.addEventListener("click", function() {
    sessionStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
  });

  // Klick auf "Cookie-Einstellungen ändern"
  [openSettingsDE, openSettingsEN].forEach(btn => {
    if (btn) {
      btn.addEventListener("click", function() {
        banner.style.display = "flex";
        banner.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});


// ================= MATOMO EINBINDUNG =================

function enableMatomo() {

  const MATOMO_URL = "https://vccore.de/matomo/";      // <== Deine Matomo-URL
  const MATOMO_SITE_ID = "1";                          // <== Deine Site-ID

  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  _paq.push(['disableCookies']);                       // kein Cookie-Tracking

  _paq.push(['trackPageView']);                        // Seitenaufruf und Linktracking
  _paq.push(['enableLinkTracking']);

  (function() {                                        // Matomo-Server einbinden
     var u = MATOMO_URL;                               // !! benutzt eine feste, saubere URL (z. B. https://...)
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', MATOMO_SITE_ID]);          // !!
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
  })();
}
