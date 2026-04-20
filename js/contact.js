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
  nameLen: {
    en: "Name must be between 3 and 25 characters.",
    de: "Name muss zwischen 3 und 25 Zeichen lang sein.",
  },
  nameChar: {
    en: "Numbers and symbols are not allowed.",
    de: "Zahlen und Sonderzeichen sind nicht erlaubt.",
  },
  nameLimit: {
    en: "Maximum 25 characters reached.",
    de: "Maximum von 25 Zeichen erreicht.",
  },
  emailLen: {
    en: "Prefix must be 3-25 chars. Total max 254.",
    de: "Teil vor @: 3-25 Zeichen. Gesamt max. 254.",
  },
  emailLimit: {
    en: "Maximum 254 characters reached.",
    de: "Maximum von 254 Zeichen erreicht.",
  },
  msgLen: {
    en: "Message must be between 5 and 500 characters.",
    de: "Nachricht muss zwischen 5 und 500 Zeichen lang sein.",
  },
  msgLimit: {
    en: "Maximum 500 characters reached.",
    de: "Maximum von 500 Zeichen erreicht.",
  },
};

function msg(key) {
  const lang = localStorage.getItem("preferredLang") || "en";
  return CONTACT_MESSAGES[key][lang] || CONTACT_MESSAGES[key].en;
}

/** Steuert die Sichtbarkeit und Farbe der Fehlermeldungen */
function setFieldError(fieldId, message, isLimit = false) {
  const errorSpan = document.getElementById(`error-${fieldId}`);
  const inputEl = document.getElementById(`contact-${fieldId}`);

  if (errorSpan) {
    errorSpan.textContent = message;
    message
      ? errorSpan.classList.add("visible")
      : errorSpan.classList.remove("visible");
    errorSpan.style.color = isLimit ? "#ffa500" : "#ff4d4d";
  }
  if (inputEl) {
    message && !isLimit
      ? inputEl.classList.add("invalid")
      : inputEl.classList.remove("invalid");
  }
}

/** Prüft das gesamte Formular und aktiviert/deaktiviert den Button */
function updateButtonState() {
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();
  const privacy = document.getElementById("privacy");
  const btn = document.querySelector(".btn-submit");

  // Validierungs-Checks
  const isNameValid =
    name.length >= 3 && name.length <= 25 && /^[a-zA-ZäöüÄÖÜß\s]*$/.test(name);

  const emailParts = email.split("@");
  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    emailParts[0].length >= 3 &&
    emailParts[0].length <= 25 &&
    email.length <= 254;

  const isMessageValid = message.length >= 5 && message.length <= 500;
  const isPrivacyChecked = privacy && privacy.checked;

  // Button aktivieren nur wenn alles okay ist
  btn.disabled = !(
    isNameValid &&
    isEmailValid &&
    isMessageValid &&
    isPrivacyChecked
  );
}

/** Validiert die Felder in Echtzeit */
function validateField(id, value) {
  let errorMessage = "";
  let isLimit = false;
  const inputEl = document.getElementById(`contact-${id}`);

  if (id === "name") {
    let cleanValue = value.replace(/[^a-zA-ZäöüÄÖÜß\s]/g, "");
    if (cleanValue.length > 25) cleanValue = cleanValue.substring(0, 25);

    if (value !== cleanValue) {
      inputEl.value = cleanValue;
      errorMessage = msg("nameChar");
    } else if (cleanValue.length === 0) {
      errorMessage = msg("fill");
    } else if (cleanValue.length < 3) {
      errorMessage = msg("nameLen");
    } else if (cleanValue.length >= 25) {
      errorMessage = msg("nameLimit");
      isLimit = true;
    }
  } else if (id === "email") {
    const parts = value.split("@");
    const localPart = parts[0];

    if (value.length >= 254) {
      errorMessage = msg("emailLimit");
      isLimit = true;
    } else if (value.length === 0) {
      errorMessage = msg("fill");
    } else if (localPart.length < 3 || localPart.length > 25) {
      errorMessage = msg("emailLen");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) errorMessage = msg("email");
    }
  } else if (id === "message") {
    if (value.length === 0) {
      errorMessage = msg("fill");
    } else if (value.length < 5) {
      errorMessage = msg("msgLen");
    } else if (value.length >= 500) {
      errorMessage = msg("msgLimit");
      isLimit = true;
    }
  }

  setFieldError(id, errorMessage, isLimit);
  updateButtonState();
  return errorMessage === "" || isLimit;
}

/** Formular absenden */
async function submitForm(data, btn) {
  const lang = localStorage.getItem("preferredLang") || "en";
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = lang === "de" ? "Wird gesendet..." : "Sending...";

  try {
    const res = await fetch("send-mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!json.success) throw new Error();

    const privacyErr = document.getElementById("privacy-error");
    privacyErr.textContent = msg("success");
    privacyErr.style.color = "#3dcfb6";
    privacyErr.classList.add("visible");
    document.getElementById("contact-form").reset();
    updateButtonState(); // Button nach Reset wieder sperren
  } catch {
    const privacyErr = document.getElementById("privacy-error");
    privacyErr.textContent = msg("error");
    privacyErr.style.color = "#ff4d4d";
    privacyErr.classList.add("visible");
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = ["name", "email", "message"];
  const privacy = document.getElementById("privacy");

  // Initialer Check
  updateButtonState();

  fields.forEach((fieldId) => {
    const input = document.getElementById(`contact-${fieldId}`);
    if (input) {
      input.addEventListener("input", (e) =>
        validateField(fieldId, e.target.value),
      );
    }
  });

  if (privacy) {
    privacy.addEventListener("change", updateButtonState);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("[type='submit']");
    if (btn.disabled) return;

    const data = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      message: document.getElementById("contact-message").value,
    };
    await submitForm(data, btn);
  });
});
