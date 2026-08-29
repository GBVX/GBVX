
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

// en --> de für GBVX - sonst werden die deutschen Texte nicht automatisch geladen 
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem("lang") || "de";
  setLanguage(savedLang);
  updateActiveFlag(savedLang);

  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeOverlay();
      }
    });
  }
});

document.getElementById("language").addEventListener("change", function () {
  setLanguage(this.value);
});

// setLanguage('en');    Initial: Englisch als Standard






// ============================ Overlay ================================ 


function openOverlay(src) {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  if (!overlay || !overlayImg) return;
  overlayImg.src = src;
  overlay.style.display = "flex";
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

