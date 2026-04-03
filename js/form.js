"use strict";

/* ═══════════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════════════ */
(function () {
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var els = {
    name: document.getElementById("contactName"),
    email: document.getElementById("contactEmail"),
    message: document.getElementById("contactMessage"),
    checkbox: document.getElementById("privacyCheck"),
    submit: document.getElementById("submitBtn"),
    feedback: document.getElementById("formFeedback"),
  };

  /* ── Per-language UI strings ── */
  var MSGS = {
    fill: {
      en: "Please fill in all fields.",
      de: "Bitte alle Felder ausf\u00fcllen.",
    },
    email: {
      en: "Please enter a valid email.",
      de: "Bitte g\u00fcltige E-Mail eingeben.",
    },
    privacy: {
      en: "Please accept the privacy policy.",
      de: "Bitte Datenschutz akzeptieren.",
    },
    success: {
      en: "Message sent! I'll get back to you.",
      de: "Nachricht gesendet! Ich melde mich bald.",
    },
    error: {
      en: "Something went wrong. Try again.",
      de: "Fehler aufgetreten. Bitte erneut versuchen.",
    },
    network: {
      en: "Network error. Try again later.",
      de: "Netzwerkfehler. Sp\u00e4ter erneut versuchen.",
    },
    sending: { en: "Sending\u2026", de: "Wird gesendet\u2026" },
  };

  /* ── Checkbox ── */
  function toggleCheckbox() {
    els.checkbox.classList.toggle("checked");
    els.checkbox.setAttribute(
      "aria-checked",
      String(els.checkbox.classList.contains("checked")),
    );
  }
  els.checkbox.addEventListener("click", toggleCheckbox);
  els.checkbox.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleCheckbox();
    }
  });

  /* ── Feedback helpers ── */
  function showFeedback(msg, type) {
    els.feedback.textContent = msg;
    els.feedback.className = "form-feedback " + type;
  }
  function clearFeedback() {
    els.feedback.textContent = "";
    els.feedback.className = "form-feedback";
  }
  function setSubmitLabel(txt) {
    els.submit.querySelectorAll(".btn-inner span").forEach(function (s) {
      s.textContent = txt;
    });
  }

  /* ── Validation ── */
  function validate(name, email, message, privacy, lang) {
    if (!name || !email || !message) return MSGS.fill[lang];
    if (!EMAIL_RE.test(email)) return MSGS.email[lang];
    if (!privacy) return MSGS.privacy[lang];
    return null;
  }

  /* ── Reset form ── */
  function resetForm() {
    els.name.value = els.email.value = els.message.value = "";
    els.checkbox.classList.remove("checked");
    els.checkbox.setAttribute("aria-checked", "false");
  }

  /* ── Submit handler ── */
  els.submit.addEventListener("click", function () {
    var lang = (window.getCurrentLang && window.getCurrentLang()) || "en";
    var name = els.name.value.trim();
    var email = els.email.value.trim();
    var message = els.message.value.trim();
    var privacy = els.checkbox.classList.contains("checked");

    var validationError = validate(name, email, message, privacy, lang);
    if (validationError) {
      showFeedback(validationError, "error");
      return;
    }

    setSubmitLabel(MSGS.sending[lang]);
    els.submit.disabled = true;
    clearFeedback();

    fetch("sendMail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.success) {
          showFeedback(MSGS.success[lang], "success");
          resetForm();
        } else {
          showFeedback(MSGS.error[lang], "error");
        }
      })
      .catch(function () {
        showFeedback(MSGS.network[lang], "error");
      })
      .finally(function () {
        setSubmitLabel(lang === "de" ? "Nachricht senden" : "Say Hello ;)");
        els.submit.disabled = false;
      });
  });
})();
