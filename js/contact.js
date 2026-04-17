"use strict";

const CONTACT_MESSAGES = {
  fill: {
    en: "Please fill in all fields.",
    de: "Bitte alle Felder ausfüllen.",
  },
  email: {
    en: "Please enter a valid email address.",
    de: "Bitte eine gültige E-Mail eingeben.",
  },
  privacy: {
    en: "Please accept the privacy policy.",
    de: "Bitte Datenschutzerklärung akzeptieren.",
  },
  success: {
    en: "Message sent! I'll get back to you soon.",
    de: "Nachricht gesendet! Ich melde mich bald.",
  },
  error: {
    en: "Something went wrong. Please try again.",
    de: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
  },
  network: {
    en: "Network error. Please try again later.",
    de: "Netzwerkfehler. Bitte später versuchen.",
  },
};

/** @param {string} key @returns {string} */
function msg(key) {
  const lang = localStorage.getItem("preferredLang") || "en";
  return CONTACT_MESSAGES[key][lang] || CONTACT_MESSAGES[key].en;
}

/** @param {string} text @param {"success"|"error"} type */
function showFeedback(text, type) {
  const el = document.getElementById("privacy-error");
  if (!el) return;
  el.textContent = text;
  el.className = `error-text ${type}`;
}

/** @param {string} name @param {string} email @param {string} message @returns {string|null} */
function validate(name, email, message) {
  if (!name || !email || !message) return msg("fill");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return msg("email");
  const privacy = document.getElementById("privacy");
  if (!privacy?.checked) return msg("privacy");
  return null;
}

/** @param {HTMLButtonElement} btn @param {boolean} loading */
function setSubmitState(btn, loading) {
  const lang = localStorage.getItem("preferredLang") || "en";
  btn.disabled = loading;
  btn.textContent = loading
    ? lang === "de"
      ? "Wird gesendet…"
      : "Sending…"
    : lang === "de"
      ? "Sag Hallo ;)"
      : "Say Hello ;)";
}

/** @param {{ name:string, email:string, message:string }} data @param {HTMLButtonElement} btn */
async function submitForm(data, btn) {
  setSubmitState(btn, true);
  try {
    const res = await fetch("send-mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!json.success) throw new Error();
    showFeedback(msg("success"), "success");
    document.getElementById("contact-form").reset();
  } catch {
    showFeedback(msg("error"), "error");
  } finally {
    setSubmitState(btn, false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();
    const error = validate(name, email, message);
    if (error) {
      showFeedback(error, "error");
      return;
    }
    const btn = form.querySelector("[type='submit']");
    submitForm({ name, email, message }, btn);
  });
});
