/**
 * @fileoverview Privacy Policy page — runtime module.
 *
 * Responsibilities:
 *  - Injects bilingual translation keys specific to the privacy-policy page
 *    into the shared TRANSLATIONS object (defined in language.js).
 *  - Marks the active footer link for the current page.
 *  - Exposes no globals beyond what is strictly needed.
 *
 * This file must be loaded **after** language.js so that the TRANSLATIONS
 * object already exists when the merge runs.
 *
 * @module privacy
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 1.0.0
 */

"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// 1.  TRANSLATIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Bilingual translation strings specific to the privacy-policy page.
 * Keys follow the same naming convention used in language.js so they can be
 * picked up automatically by {@link updateTextNodes}.
 *
 * @type {{ en: Record<string, string>, de: Record<string, string> }}
 */
const PRIVACY_TRANSLATIONS = {
  en: {
    privacy_page_title: "Privacy Policy | Maximilian Bese",
    privacy_nav_about: "About me",
    privacy_nav_skills: "Skills",
    privacy_nav_projects: "Projects",
    privacy_h1: "Privacy Policy",

    // § 1 Controller
    privacy_controller_h2: "1. Controller (Art. 4 No. 7 GDPR)",
    privacy_controller_p:
      "Maximilian Bese, Friedrichstraße 14, 32312 Lübbecke, Germany · E-Mail: maximilian-bese@gmx.de",

    // § 2 General
    privacy_general_h2: "2. General Information",
    privacy_general_p:
      "The protection of your personal data is important to us. This Privacy Policy explains what data is collected when you visit this website, how it is processed, and what rights you have under the GDPR and the German BDSG.",

    // § 3 Hosting
    privacy_hosting_h2: "3. Hosting & Server Log Files",
    privacy_hosting_p1:
      "This website is hosted on servers operated by Netcup GmbH, Daimlerstraße 25, 76185 Karlsruhe, Germany. When you access any page, your browser automatically transmits the following data to the web server:",
    privacy_hosting_li1: "Browser type and version",
    privacy_hosting_li2: "Operating system",
    privacy_hosting_li3: "Referrer URL",
    privacy_hosting_li4: "IP address of the requesting device",
    privacy_hosting_li5: "Date and time of the request",
    privacy_hosting_li6: "Name of the requested file / page",
    privacy_hosting_p2:
      "Legal basis: Art. 6(1)(f) GDPR — legitimate interest in the secure and technically correct provision of the website. Log files are stored for a maximum of 7 days.",

    // § 4 Contact form
    privacy_contact_h2: "4. Contact Form",
    privacy_contact_p1:
      "When you submit the contact form, the following data is collected and transmitted to maximilian-bese@gmx.de via a PHP mail script hosted on the same server:",
    privacy_contact_li1: "Your name",
    privacy_contact_li2: "Your e-mail address",
    privacy_contact_li3: "Your message",
    privacy_contact_p2:
      "Legal basis: Art. 6(1)(a) GDPR — your explicit consent given by ticking the privacy-policy checkbox before submitting the form.",
    privacy_contact_p3:
      "The data is used solely to respond to your enquiry and is not passed on to third parties.",

    // § 5 localStorage
    privacy_storage_h2: "5. Language Preference (localStorage)",
    privacy_storage_p:
      "This website stores your selected display language (EN / DE) in your browser's localStorage under the key preferredLang. This information never leaves your device.",

    // § 6 External links
    privacy_links_h2: "6. External Links (GitHub & LinkedIn)",
    privacy_links_p:
      "This website contains links to GitHub and LinkedIn. No data is transferred to those services unless you actively click the link.",

    // § 7 Cookies
    privacy_cookies_h2: "7. Cookies & Analytics",
    privacy_cookies_p:
      "This website does not set any cookies and does not use any analytics, tracking, or advertising services.",

    // § 8 Rights
    privacy_rights_h2: "8. Your Rights as a Data Subject",
    privacy_rights_intro: "Under the GDPR you have the following rights:",
    privacy_rights_li1: "Right of access – Art. 15 GDPR",
    privacy_rights_li2: "Right to rectification – Art. 16 GDPR",
    privacy_rights_li3: "Right to erasure – Art. 17 GDPR",
    privacy_rights_li4: "Right to restriction of processing – Art. 18 GDPR",
    privacy_rights_li5: "Right to data portability – Art. 20 GDPR",
    privacy_rights_li6: "Right to object – Art. 21 GDPR",
    privacy_rights_li7: "Right to withdraw consent – Art. 7(3) GDPR",
    privacy_rights_complaint:
      "You also have the right to lodge a complaint with the LDI NRW, Kavalleriestr. 2–4, 40213 Düsseldorf.",

    // § 9 Security
    privacy_security_h2: "9. Data Security",
    privacy_security_p:
      "This website is served over an encrypted HTTPS connection (TLS).",

    // § 10 Updates
    privacy_updates_h2: "10. Changes to this Privacy Policy",
    privacy_updates_p:
      "We reserve the right to update this Privacy Policy to reflect changes in legal requirements or in the functionality of this website.",
    privacy_date: "Last updated: April 22, 2026",

    // Footer
    privacy_footer_role: "Web Developer",
    privacy_footer_loc: "Lübbecke, Germany",
    privacy_footer_legal: "Legal Notice",
    privacy_footer_privacy: "Privacy Policy",
  },

  de: {
    privacy_page_title: "Datenschutzerklärung | Maximilian Bese",
    privacy_nav_about: "Über mich",
    privacy_nav_skills: "Skills",
    privacy_nav_projects: "Projekte",
    privacy_h1: "Datenschutzerklärung",

    // § 1 Verantwortlicher
    privacy_controller_h2: "1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)",
    privacy_controller_p:
      "Maximilian Bese, Friedrichstraße 14, 32312 Lübbecke · E-Mail: maximilian-bese@gmx.de",

    // § 2 Allgemeines
    privacy_general_h2: "2. Allgemeine Hinweise",
    privacy_general_p:
      "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung erläutert, welche Daten bei Besuch dieser Website erhoben, wie sie verarbeitet werden und welche Rechte Ihnen nach der DSGVO und dem BDSG zustehen.",

    // § 3 Hosting
    privacy_hosting_h2: "3. Hosting & Server-Logdateien",
    privacy_hosting_p1:
      "Diese Website wird auf Servern der Netcup GmbH, Daimlerstraße 25, 76185 Karlsruhe, gehostet. Beim Abruf einer Seite übermittelt Ihr Browser automatisch folgende Daten an den Webserver:",
    privacy_hosting_li1: "Browsertyp und -version",
    privacy_hosting_li2: "Betriebssystem",
    privacy_hosting_li3: "Referrer-URL",
    privacy_hosting_li4: "IP-Adresse des anfragenden Geräts",
    privacy_hosting_li5: "Datum und Uhrzeit der Anfrage",
    privacy_hosting_li6: "Name der abgerufenen Datei / Seite",
    privacy_hosting_p2:
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse an der sicheren und technisch einwandfreien Bereitstellung der Website. Logdateien werden maximal 7 Tage gespeichert.",

    // § 4 Kontaktformular
    privacy_contact_h2: "4. Kontaktformular",
    privacy_contact_p1:
      "Bei Nutzung des Kontaktformulars werden folgende Daten erhoben und per PHP-Mailskript an maximilian-bese@gmx.de übermittelt:",
    privacy_contact_li1: "Ihr Name",
    privacy_contact_li2: "Ihre E-Mail-Adresse",
    privacy_contact_li3: "Ihre Nachricht",
    privacy_contact_p2:
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO – Ihre ausdrückliche Einwilligung durch Setzen des Hakens vor der Datenschutzerklärung.",
    privacy_contact_p3:
      "Die Daten dienen ausschließlich der Beantwortung Ihrer Anfrage und werden nicht an Dritte weitergegeben.",

    // § 5 localStorage
    privacy_storage_h2: "5. Spracheinstellung (localStorage)",
    privacy_storage_p:
      "Diese Website speichert Ihre gewählte Anzeigesprache (EN / DE) im localStorage Ihres Browsers unter dem Schlüssel preferredLang. Die Information verlässt Ihr Gerät nicht.",

    // § 6 Externe Links
    privacy_links_h2: "6. Externe Links (GitHub & LinkedIn)",
    privacy_links_p:
      "Diese Website enthält Links zu GitHub und LinkedIn. Daten werden erst übertragen, wenn Sie den Link aktiv anklicken.",

    // § 7 Cookies
    privacy_cookies_h2: "7. Cookies & Analyse-Dienste",
    privacy_cookies_p:
      "Diese Website setzt keine Cookies und nutzt keine Analyse-, Tracking- oder Werbedienste.",

    // § 8 Betroffenenrechte
    privacy_rights_h2: "8. Ihre Rechte als betroffene Person",
    privacy_rights_intro: "Nach der DSGVO stehen Ihnen folgende Rechte zu:",
    privacy_rights_li1: "Auskunftsrecht – Art. 15 DSGVO",
    privacy_rights_li2: "Recht auf Berichtigung – Art. 16 DSGVO",
    privacy_rights_li3: "Recht auf Löschung – Art. 17 DSGVO",
    privacy_rights_li4:
      "Recht auf Einschränkung der Verarbeitung – Art. 18 DSGVO",
    privacy_rights_li5: "Recht auf Datenübertragbarkeit – Art. 20 DSGVO",
    privacy_rights_li6: "Widerspruchsrecht – Art. 21 DSGVO",
    privacy_rights_li7:
      "Recht auf Widerruf der Einwilligung – Art. 7 Abs. 3 DSGVO",
    privacy_rights_complaint:
      "Sie haben zudem das Recht, sich bei der Landesbeauftragten für Datenschutz und Informationsfreiheit NRW, Kavalleriestr. 2–4, 40213 Düsseldorf, zu beschweren.",

    // § 9 Datensicherheit
    privacy_security_h2: "9. Datensicherheit",
    privacy_security_p:
      "Diese Website wird über eine verschlüsselte HTTPS-Verbindung (TLS) ausgeliefert.",

    // § 10 Änderungen
    privacy_updates_h2: "10. Änderungen dieser Datenschutzerklärung",
    privacy_updates_p:
      "Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der Rechtslage oder der Website-Funktionen anzupassen.",
    privacy_date: "Stand: 22. April 2026",

    // Footer
    privacy_footer_role: "Web-Entwickler",
    privacy_footer_loc: "Lübbecke, Deutschland",
    privacy_footer_legal: "Impressum",
    privacy_footer_privacy: "Datenschutzerklärung",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2.  MERGE INTO SHARED TRANSLATIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Merges the privacy-page translation entries into the global TRANSLATIONS
 * object that was created by language.js.
 *
 * Must be called before the first {@link updateTextNodes} invocation.
 *
 * @returns {void}
 * @throws {ReferenceError} If `TRANSLATIONS` is not defined (language.js not loaded).
 */
function mergePrivacyTranslations() {
  if (typeof TRANSLATIONS === "undefined") {
    throw new ReferenceError(
      "[privacy.js] TRANSLATIONS is not defined. " +
        "Ensure language.js is loaded before privacy.js.",
    );
  }
  Object.assign(TRANSLATIONS.en, PRIVACY_TRANSLATIONS.en);
  Object.assign(TRANSLATIONS.de, PRIVACY_TRANSLATIONS.de);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.  ACTIVE FOOTER LINK
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Marks the "Privacy Policy" footer link as active and removes the active
 * class from all other footer links. This provides a visual indicator of the
 * current page without duplicating CSS rules.
 *
 * @returns {void}
 */
function markActiveFooterLink() {
  const footerLinks = document.querySelectorAll(".footer-links a");
  footerLinks.forEach((link) => {
    const href = link.getAttribute("href") ?? "";
    if (href.includes("privacy-policy")) {
      link.classList.add("footer-link-active");
    } else {
      link.classList.remove("footer-link-active");
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 4.  INIT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Initialises the privacy-policy page.
 *
 * Execution order:
 *  1. Merge privacy-specific translations into the shared object.
 *  2. Re-run the language switch so newly added keys are rendered immediately.
 *  3. Mark the active footer link.
 *
 * Registered as a {@link DOMContentLoaded} listener so that all DOM nodes
 * are available before manipulation.
 *
 * @listens DOMContentLoaded
 * @returns {void}
 */
function initPrivacyPage() {
  mergePrivacyTranslations();
  const currentLang = /** @type {"en"|"de"} */ (
    localStorage.getItem("preferredLang") ?? "en"
  );
  changeLanguage(currentLang);
  markActiveFooterLink();
}

document.addEventListener("DOMContentLoaded", initPrivacyPage);
