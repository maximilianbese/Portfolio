"use strict";

/** @type {{ en: Record<string,string>, de: Record<string,string> }} */
const TRANSLATIONS = {
  en: {
    nav_about: "About me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    hero_role: "Frontend Developer",
    hero_btn_work: "Check my work",
    hero_btn_contact: "Contact me",
    ticker_1: "Open to entry-level positions",
    ticker_2: "Frontend Developer",
    ticker_3: "Based in Lübbecke",
    ticker_4: "Eager to learn & grow",
    about_subtitle: "Who I Am",
    about_word_1: "About",
    about_word_2: "me",
    about_text:
      "Hey, I'm Maximilian — a passionate software developer with a strong focus on frontend technologies. Every project I take on is a chance to apply what I've learned and push my skills further.",
    about_detail_1: "Based in Lübbecke. Open to remote work.",
    about_detail_2:
      "I embrace every new technology as an opportunity to grow. I pick up new concepts quickly and enjoy diving deep — whether it's a new framework, a design pattern, or a development workflow.",
    about_detail_3:
      "When I face a problem, I break it down step by step: understand, experiment, refine. Good code isn't just functional — it's easy to understand for the next developer.",
    skills_subtitle: "Technologies",
    skills_heading: "Skill Set",
    skills_text:
      "During my training I've built hands-on experience with modern frontend technologies. I'm always expanding my toolkit and excited to tackle challenges beyond what I already know.",
    skills_cta_title: "Need a different skill?",
    skills_cta_text:
      "Don't hesitate to reach out. I'm motivated to learn whatever a project requires.",
    skills_cta_btn: "Let's Talk",
    skill_growth: "Growth mindset",
    projects_title: "My Projects",
    projects_intro:
      "Projects I built during my training — each one taught me something new. Click to learn more.",
    badge_progress: "In Progress",
    overlay_question: "What is this project about?",
    overlay_next: "Next project",
    desc_join:
      "Task manager inspired by the Kanban System. Create and organize tasks with drag & drop, assign users and categories.",
    desc_loco:
      "A jump-and-run game in object-oriented JavaScript. Help Pepe collect coins and bottles to defeat the final boss.",
    desc_bubble:
      "A real-time messaging app inspired by Slack. Built with Angular and Firebase, supporting channels and direct messages.",
    testimonials_title: "What my colleagues say about me",
    testimonial_1:
      "Maximilian, your willingness to help was worth its weight in gold for the entire team. No matter what challenge we faced, you always had an open ear and actively helped find solutions. You complemented the team perfectly, both personally and professionally. Through your level-headed nature and your commitment, you played a key role in ensuring that our collaboration ran so smoothly.",
    testimonial_2:
      "Working with him on complex tasks was a pleasure. He thinks logically and always finds a clear path forward.",
    testimonial_3: "He solves problems with remarkable efficiency and focus.",
    contact_subtitle: "Contact me",
    contact_title: "Let's work together",
    contact_h3: "Looking for a junior developer?",
    contact_text:
      "I'm actively looking for my first position as a software developer — internship, working student role, or junior position. I bring motivation, fresh ideas, and eagerness to grow.",
    contact_need: "Hiring junior developers?",
    contact_link: "Let's talk!",
    form_name_label: "What's your name?",
    form_name_placeholder: "Your name goes here",
    form_email_label: "What's your email?",
    form_email_placeholder: "youremail@email.com",
    form_msg_label: "How can I help you?",
    form_msg_placeholder: "Hello Maximilian, I am interested in...",
    form_privacy:
      "I've read the privacy policy and agree to the processing of my data as outlined.",
    form_error: "Please accept the privacy policy.",
    form_btn: "Say Hello ;)",
    footer_role: "Web Developer",
    footer_loc: "Lübbecke, Germany",
    footer_link_legal: "Legal Notice",
    legal_page_title: "Legal Notice",
    legal_nav_about: "About me",
    legal_nav_skills: "Skills",
    legal_nav_projects: "Projects",
    legal_h1: "Legal Notice",
    legal_imprint_h2: "Imprint",
    legal_contact_h2: "Contact",
    legal_contact_p: "Email:",
    legal_terms_h2: "Acceptance of terms",
    legal_terms_p:
      "By accessing and using Portfolio, you acknowledge and agree to the following terms and conditions, and any policies or amendments presented from time to time.",
    legal_scope_h2: "Scope and ownership",
    legal_scope_p:
      "Portfolio was developed as part of a student project at Developer Akademie GmbH. It serves an educational purpose and is not intended for commercial use. The design is owned by Developer Akademie GmbH. Unauthorized reproduction or modification is prohibited.",
    legal_prop_h2: "Proprietary rights",
    legal_prop_p:
      "All proprietary rights in Portfolio — including copyrighted material, trademarks, and other intellectual property — are retained by the listed students, except where otherwise noted.",
    legal_permitted_h2: "Permitted use",
    legal_permitted_p:
      "Portfolio is intended for lawful purposes only. Any use for illegal activities or to harm, harass, or intimidate others is strictly prohibited.",
    legal_disclaimer_h2: "Disclaimer",
    legal_disclaimer_p:
      'Portfolio is provided "as is" without warranty of any kind. Neither the listed students nor Developer Akademie GmbH shall be liable for any direct, indirect, incidental, or consequential damages arising from its use.',
    legal_indemnity_h2: "Indemnity",
    legal_indemnity_p:
      "You agree to indemnify and hold harmless the listed students, Developer Akademie GmbH, and their affiliates from any claim or liability arising from your use of Portfolio or breach of this Legal Notice.",
    legal_questions: "Questions? Contact us at",
    legal_date: "Date: April 16, 2026",
    legal_footer_role: "Aspiring Software Developer",
    legal_footer_loc: "Lübbecke, Germany",
    legal_footer_legal: "Legal Notice",
  },
  de: {
    nav_about: "Über mich",
    nav_skills: "Skills",
    nav_projects: "Projekte",
    hero_role: "Frontend-Entwickler",
    hero_btn_work: "Projekte ansehen",
    hero_btn_contact: "Kontakt aufnehmen",
    ticker_1: "Offen für Einstiegspositionen",
    ticker_2: "Frontend-Entwickler",
    ticker_3: "Wohnhaft in Lübbecke",
    ticker_4: "Lernbereit & motiviert",
    about_subtitle: "Wer ich bin",
    about_word_1: "Über",
    about_word_2: "mich",
    about_text:
      "Hey, ich bin Maximilian — ein leidenschaftlicher Software-Entwickler mit Schwerpunkt auf Frontend-Technologien. Jedes Projekt ist für mich eine Chance, mein Wissen anzuwenden und meine Fähigkeiten weiterzuentwickeln.",
    about_detail_1: "Wohnhaft in Lübbecke. Offen für Remote-Arbeit.",
    about_detail_2:
      "Ich sehe jede neue Technologie als Wachstumschance. Neue Konzepte eigne ich mir schnell an — ob Framework, Design-Pattern oder Workflow.",
    about_detail_3:
      "Bei Problemen gehe ich systematisch vor: verstehen, testen, verfeinern. Guter Code funktioniert nicht nur — er ist auch für andere lesbar.",
    skills_subtitle: "Technologien",
    skills_heading: "Skill Set",
    skills_text:
      "In meiner Ausbildung habe ich praktische Erfahrung mit modernen Frontend-Technologien gesammelt. Ich erweitere mein Know-how kontinuierlich.",
    skills_cta_title: "Fehlt ein bestimmter Skill?",
    skills_cta_text:
      "Melde dich gerne. Ich bin motiviert, alles zu lernen, was ein Projekt erfordert.",
    skills_cta_btn: "Lass uns reden",
    skill_growth: "Wachstums-Mindset",
    projects_title: "Meine Projekte",
    projects_intro:
      "Projekte aus meiner Ausbildung — jedes hat mir etwas Neues beigebracht. Klicke zum Erkunden.",
    badge_progress: "In Arbeit",
    overlay_question: "Worum geht es in diesem Projekt?",
    overlay_next: "Nächstes Projekt",
    desc_join:
      "Aufgaben-Manager nach dem Kanban-Prinzip. Per Drag & Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.",
    desc_loco:
      "Ein Jump-and-Run-Spiel in objektorientiertem JavaScript. Hilf Pepe, Münzen und Flaschen zu sammeln.",
    desc_bubble:
      "Eine Echtzeit-Messaging-App inspiriert von Slack. Mit Angular und Firebase, Kanal- und Direktnachrichten-Funktion.",
    testimonials_title: "Was meine Kollegen über mich sagen",
    testimonial_1:
      "Maximilian deine Hilfsbereitschaft war für das gesamte Team Gold wert. Egal, vor welcher Herausforderung wir standen, du hattest immer ein offenes Ohr und hast aktiv mitgeholfen, Lösungen zu finden. Du hast das Team menschlich und fachlich perfekt ergänzt. Durch deine besonnene Art und dein Engagement hast du maßgeblich dazu beigetragen, dass die Zusammenarbeit so reibungslos verlaufen ist.",
    testimonial_2:
      "Die Zusammenarbeit war eine Freude. Er denkt logisch und findet immer einen klaren Weg.",
    testimonial_3: "Er löst Probleme mit bemerkenswerter Effizienz.",
    contact_subtitle: "Kontakt",
    contact_title: "Lass uns zusammenarbeiten",
    contact_h3: "Auf der Suche nach einem Junior-Entwickler?",
    contact_text:
      "Ich suche aktiv meine erste Stelle — Praktikum, Werkstudentenstelle oder Junior-Position. Ich bringe Motivation, frische Ideen und Lernbereitschaft. ",
    contact_need: "Junior-Entwickler gesucht?",
    contact_link: "Lass uns reden!",
    form_name_label: "Wie heißt du?",
    form_name_placeholder: "Dein Name hier",
    form_email_label: "Wie lautet deine E-Mail?",
    form_email_placeholder: "deinemail@email.de",
    form_msg_label: "Wie kann ich dir helfen?",
    form_msg_placeholder: "Hallo Maximilian, ich interessiere mich für...",
    form_privacy:
      "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.",
    form_error: "Bitte akzeptiere die Datenschutzerklärung.",
    form_btn: "Sag Hallo ;)",
    footer_role: "Web-Entwickler",
    footer_loc: "Lübbecke, Deutschland",
    footer_link_legal: "Impressum",
    legal_page_title: "Impressum",
    legal_nav_about: "Über mich",
    legal_nav_skills: "Skills",
    legal_nav_projects: "Projekte",
    legal_h1: "Impressum",
    legal_imprint_h2: "Angaben gemäß § 5 TMG",
    legal_contact_h2: "Kontakt",
    legal_contact_p: "E-Mail:",
    legal_terms_h2: "Nutzungsbedingungen",
    legal_terms_p:
      "Durch den Zugriff auf und die Nutzung von Portfolio erkennen Sie die folgenden Nutzungsbedingungen sowie etwaige Änderungen an.",
    legal_scope_h2: "Umfang und Eigentum",
    legal_scope_p:
      "Portfolio wurde im Rahmen eines studentischen Projekts bei der Developer Akademie GmbH entwickelt. Es dient ausschließlich Bildungszwecken und ist nicht für den kommerziellen Einsatz bestimmt. Das Design ist Eigentum der Developer Akademie GmbH. Unerlaubte Vervielfältigung oder Bearbeitung ist untersagt.",
    legal_prop_h2: "Eigentumsrechte",
    legal_prop_p:
      "Alle Eigentumsrechte an Portfolio — einschließlich urheberrechtlich geschützter Materialien, Marken und sonstiger geistiger Eigentumsrechte — verbleiben bei den aufgeführten Studierenden, sofern nicht anders angegeben.",
    legal_permitted_h2: "Erlaubte Nutzung",
    legal_permitted_p:
      "Portfolio ist ausschließlich für rechtmäßige Zwecke bestimmt. Jede Nutzung für illegale Aktivitäten oder zur Schädigung, Belästigung oder Einschüchterung anderer ist strengstens untersagt.",
    legal_disclaimer_h2: "Haftungsausschluss",
    legal_disclaimer_p:
      'Portfolio wird „wie besehen" ohne jegliche Gewährleistung bereitgestellt. Weder die aufgeführten Studierenden noch die Developer Akademie GmbH haften für direkte, indirekte, zufällige oder Folgeschäden, die sich aus der Nutzung ergeben.',
    legal_indemnity_h2: "Freistellung",
    legal_indemnity_p:
      "Sie verpflichten sich, die aufgeführten Studierenden, die Developer Akademie GmbH und deren verbundene Unternehmen von Ansprüchen oder Verbindlichkeiten freizustellen, die aus Ihrer Nutzung von Portfolio oder einem Verstoß gegen dieses Impressum entstehen.",
    legal_questions: "Fragen? Schreiben Sie uns an",
    legal_date: "Stand: 16. April 2026",
    legal_footer_role: "Angehender Software-Entwickler",
    legal_footer_loc: "Lübbecke, Deutschland",
    legal_footer_legal: "Impressum",
  },
};

/** @param {HTMLElement} el @param {string} value */
function applyTranslation(el, value) {
  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
    el.placeholder = value;
  } else {
    el.innerText = value;
  }
}

/** @param {"en"|"de"} lang */
function updateTextNodes(lang) {
  const t = TRANSLATIONS[lang];
  document.querySelectorAll("[data-key]").forEach((el) => {
    const value = t[el.getAttribute("data-key")];
    if (value) applyTranslation(el, value);
  });
}

/** @param {"en"|"de"} lang */
function updateLangButtons(lang) {
  document.querySelectorAll(".lang").forEach((el) => {
    const elLang = (
      el.getAttribute("data-lang") || el.textContent.trim()
    ).toLowerCase();
    el.classList.toggle("active", elLang === lang);
  });
}

/** @param {"en"|"de"} lang */
function updateOverlay(lang) {
  const overlay = document.getElementById("project-overlay");
  if (!overlay || overlay.classList.contains("d-none")) return;
  const id = window.currentProjectId;
  if (id && typeof PROJECT_DATA !== "undefined") {
    const el = document.getElementById("overlay-description");
    if (el) el.innerText = TRANSLATIONS[lang][PROJECT_DATA[id].descKey] || "";
  }
}

/** @param {"en"|"de"} lang */
function changeLanguage(lang) {
  updateTextNodes(lang);
  updateOverlay(lang);
  updateLangButtons(lang);
  localStorage.setItem("preferredLang", lang);
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(localStorage.getItem("preferredLang") || "en");
});
