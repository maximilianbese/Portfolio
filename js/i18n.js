"use strict";

/* ═══════════════════════════════════════════════
   i18n — LANGUAGE SWITCH
════════════════════════════════════════════════ */
(function () {
  var currentLang = "en";

  /* Apply a translation key to a single element */
  function applyKey(el, t) {
    var key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    if (t[key].indexOf("<") !== -1) {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  }

  /* Update all input placeholders */
  function updatePlaceholders(lang) {
    var ph = {
      contactName: { en: "Your name goes here", de: "Dein Name" },
      contactEmail: { en: "youremail@email.com", de: "deine@email.de" },
      contactMessage: {
        en: "Hello, I am interested in\u2026",
        de: "Hallo, ich interessiere mich f\u00fcr\u2026",
      },
    };
    Object.keys(ph).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.placeholder = ph[id][lang];
    });
  }

  /* Update elements that contain links (can't use data-i18n directly) */
  function updateRichElements(lang) {
    var privacySpan = document.querySelector(".form-check-row > span");
    if (privacySpan) {
      privacySpan.innerHTML =
        lang === "de"
          ? 'Ich habe die <a href="#" class="accent mono">Datenschutzerkl\u00e4rung</a> gelesen und stimme der Verarbeitung meiner Daten zu.'
          : 'I\'ve read the <a href="#" class="accent mono">privacy policy</a> and agree to the processing of my data as outlined.';
    }

    var ctaP = document.querySelector(".contact-cta");
    if (ctaP) {
      ctaP.innerHTML =
        lang === "de"
          ? 'Brauchst du einen Frontend-Entwickler? <a href="mailto:maximilian-bese@gmx.de" class="accent">Lass uns reden!</a>'
          : 'Need a Frontend developer? <a href="mailto:maximilian-bese@gmx.de" class="accent">Let\'s talk!</a>';
    }
  }

  /* Update lang button pressed state */
  function updateButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.textContent.trim().toLowerCase() === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  /* Main apply function */
  function applyLang(lang) {
    currentLang = lang;
    var t = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      applyKey(el, t);
    });
    updatePlaceholders(lang);
    updateRichElements(lang);
    updateButtons(lang);
    if (typeof window.onLangChange === "function") window.onLangChange(lang);
  }

  /* Bind click handlers */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = this.textContent.trim().toLowerCase();
      if (lang !== currentLang) applyLang(lang);
    });
  });

  /* Public API */
  window.getCurrentLang = function () {
    return currentLang;
  };
})();
