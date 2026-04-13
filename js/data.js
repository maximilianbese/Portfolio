"use strict";

/* ═══════════════════════════════════════════════
   PROJECTS
════════════════════════════════════════════════ */
var PROJECTS = [
  {
    number: "01",
    title: "Join",
    desc: {
      en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop, assign users and categories.",
      de: "Aufgabenmanager inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen, Nutzer und Kategorien zuweisen.",
    },
    tech: ["CSS", "HTML", "Firebase", "Angular", "TypeScript"],
    preview: "img/join-preview.png",
    screenshot: "img/join-preview.png",
    github: "https://github.com/maximilianbese",
    live: "https://join.maximilian-bese.de/",
  },
  {
    number: "02",
    title: "El Pollo Loco",
    desc: {
      en: "A jump-and-run browser game built with object-oriented JavaScript. Fight chickens, collect bottles and coins, defeat the end boss.",
      de: "Jump-and-Run-Browserspiel mit OOP-JavaScript. Hühner bekämpfen, Flaschen und Münzen sammeln, Endboss besiegen.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    preview: "img/elpollo-preview.png",
    screenshot: "img/elpollo-preview.png",
    github: "https://github.com/maximilianbese/El-Pollo-Loco",
    live: "https://el-pollo-loco.maximilian-bese.de/",
  },
  {
    number: "03",
    title: "DA Bubble",
    desc: {
      en: "A Slack-inspired real-time messaging app built with Angular and Firebase. Features channels, direct messages, and user management.",
      de: "Slack-inspirierte Echtzeit-Messaging-App mit Angular und Firebase. Mit Kanälen, Direktnachrichten und Nutzerverwaltung.",
    },
    tech: ["Angular", "Firebase", "TypeScript"],
    preview: "img/dabubble-preview.png",
    screenshot: "img/dabubble-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
];

/* ═══════════════════════════════════════════════
   TECH ICONS
════════════════════════════════════════════════ */
var TECH_ICONS = {
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

/* ═══════════════════════════════════════════════
   SKILLS GRID DATA
════════════════════════════════════════════════ */
var SKILLS = [
  { name: "HTML", icon: "img" },
  { name: "CSS", icon: "img" },
  { name: "JavaScript", icon: "img" },
  { name: "Material Design", icon: "svg-md" },
  { name: "TypeScript", icon: "img" },
  { name: "Angular", icon: "img" },
  { name: "Supabase", icon: "svg-sb" },
  { name: "Git", icon: "img" },
  { name: "REST-API", icon: "svg-api" },
  { name: "Scrum", icon: "svg-scrum" },
  { name: "Growth mindset", icon: "svg-gm" },
];

/* ═══════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════════ */
var TRANSLATIONS = {
  en: {
    nav_about: "About me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    hero_subtitle: "Frontend Developer",
    btn_check: "Check my work",
    btn_contact: "Contact me",
    btn_talk: "Let's Talk",
    btn_send: "Say Hello ;)",
    ticker_remote: "Available for remote work",
    ticker_role: "Frontend Developer",
    ticker_city: "Based in Lübbecke",
    ticker_open: "Open to Opportunities",
    about_label: "Who I Am",
    about_title: "About\u00a0\u00a0me",
    about_bio:
      "Hey, I'm Maximilian. As a frontend developer with an Architect mindset, I combine visionary design with strategic precision. My focus is on continuous optimization and technical excellence to create highly efficient and logically structured web solutions. I am driven by curiosity to transform complex challenges into future-proof, intuitive experiences using modern technologies.",
    about_li1: "Based in Lübbecke. Open to remote work.",
    about_li2:
      "Driven by a passion for technology and elegant problem-solving, I see every new tool as a way to evolve. I’m a fast learner who thrives on deep dives into new tech, constantly expanding my knowledge to build software that lasts.",
    about_li3:
      "My problem-solving strategy is simple: analyze, iterate, and optimize. I strive for solutions that are not just functional, but elegant and maintainable. Each challenge is an opportunity to sharpen my logic and expand my technical horizon, ensuring that the next solution is even more efficient than the last.",
    skills_label: "Technologies",
    skills_title: "Skill Set",
    skills_bio:
      "Beyond just writing code, I focus on building scalable and maintainable frontends. I have a proven track record of working with various modern technologies, yet I remain a lifelong student of the craft. Whether it’s adopting a new framework or optimizing a workflow, I embrace change as an opportunity to sharpen my expertise and deliver excellence.",
    skills_cta: 'You need <span class="accent">another skill?</span>',
    skills_sub:
      "Feel free to contact me. I look forward to expanding on my previous knowledge.",
    proj_label: "Portfolio",
    proj_title: "Featured Projects",
    proj_sub:
      "Explore a selection of my work here \u2014 Interact with projects to see my skills in action.",
    proj_overlay_sub: "What is this project about?",
    proj_next: "Next project",
    testimonials_title: "What my colleagues say about me",
    contact_label: "Contact me",
    contact_title: "Let's work<br/>together",
    contact_sub: "Got a problem to solve?",
    contact_body:
      "I am currently looking for new opportunities as a Frontend Developer. If you have an exciting project or are looking for a dedicated team member who brings value through clean code and strategic thinking, I'd love to hear from you.",
    form_name: "What's your name?",
    form_email: "What's your email?",
    form_msg: "How can I help you?",
    footer_role: "Web Developer",
    footer_city: "Munich, Germany",
    footer_legal: "Legal Notice",
    legal_title: "Legal Notice",
    legal_back: "Back",
    legal_h_imprint: "Imprint",
    legal_h_exploring: "Exploring the Portfolio",
    legal_h_acceptance: "Acceptance of terms",
    legal_p_acceptance:
      "By accessing and using <strong>Portfolio</strong> (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.",
    legal_h_scope: "Scope and ownership of the product",
    legal_p_scope1:
      "<strong>Portfolio</strong> has been developed as part of a student group project in a web development bootcamp at the <strong>Developer Akademie GmbH</strong>. It has an educational purpose and is not intended for extensive personal &amp; business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.",
    legal_p_scope2:
      "The design of <strong>Portfolio</strong> is owned by the <strong>Developer Akademie GmbH</strong>. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.",
    legal_h_proprietary: "Proprietary rights",
    legal_p_proprietary:
      "Aside from the design owned by <strong>Developer Akademie GmbH</strong>, we, the listed students, retain all proprietary rights in <strong>Portfolio</strong>, including any associated copyrighted material, trademarks, and other proprietary information.",
    legal_h_use: "Use of the product",
    legal_p_use:
      "<strong>Portfolio</strong> is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of <strong>Portfolio</strong> for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of <strong>Portfolio</strong>.",
    legal_h_disclaimer: "Disclaimer of warranties and limitation of liability",
    legal_p_disclaimer:
      '<strong>Portfolio</strong> is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the <strong>Developer Akademie</strong>, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of <strong>Portfolio</strong>.',
    legal_h_indemnity: "Indemnity",
    legal_p_indemnity:
      "You agree to indemnify, defend and hold harmless us, the listed students, the <strong>Developer Akademie</strong>, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of <strong>Portfolio</strong> and/or your breach of this Legal Notice.",
    legal_p_contact:
      'For any questions or notices, please contact us at <a href="mailto:maximilian-bese@gmx.de">maximilian-bese@gmx.de</a>.',
    legal_date: "Date: July 26, 2025",
  },
  de: {
    nav_about: "\u00dcber mich",
    nav_skills: "F\u00e4higkeiten",
    nav_projects: "Projekte",
    hero_subtitle: "Frontend Entwickler",
    btn_check: "Meine Arbeit",
    btn_contact: "Kontakt",
    btn_talk: "Gespr\u00e4ch starten",
    btn_send: "Nachricht senden",
    ticker_remote: "F\u00fcr Remote-Arbeit verf\u00fcgbar",
    ticker_role: "Frontend Entwickler",
    ticker_city: "Wohnhaft in L\u00fcbbecke",
    ticker_open: "Offen f\u00fcr M\u00f6glichkeiten",
    about_label: "Wer ich bin",
    about_title: "\u00dcber\u00a0\u00a0mich",
    about_bio:
      "Hallo, ich bin Maximilian. Als Frontend-Entwickler mit der Denkweise eines Architekten verbinde ich visionäres Design mit strategischer Präzision. Mein Fokus liegt auf kontinuierlicher Optimierung und technischer Exzellenz, um hocheffiziente und logisch strukturierte Web-Lösungen zu schaffen. Angetrieben von Neugier verwandle ich komplexe Herausforderungen mithilfe moderner Technologien in zukunftssichere, intuitive Erlebnisse.",
    about_li1: "Wohnhaft in L\u00fcbbecke. Offen für Remote-Arbeit.",
    about_li2:
      "Angetrieben von der Leidenschaft für Technologie und elegante Problemlösungen, betrachte ich jedes neue Werkzeug als Chance zur Weiterentwicklung. Ich lerne schnell, arbeite mich tief in neue Technologien ein und erweitere ständig mein Wissen, um langlebige Software zu entwickeln.",
    about_li3:
      "Meine Strategie zur Problemlösung ist einfach: analysieren, iterieren und optimieren. Ich strebe nach Lösungen, die nicht nur funktional, sondern auch elegant und wartbar sind. Jede Herausforderung ist eine Gelegenheit, meine Logik zu schärfen und meinen technischen Horizont zu erweitern, um sicherzustellen, dass die nächste Lösung noch effizienter ist als die vorherige.",
    skills_label: "Technologien",
    skills_title: "Skill Set",
    skills_bio:
      "Über das reine Schreiben von Code hinaus konzentriere ich mich auf die Entwicklung skalierbarer und wartbarer Frontends. Ich habe nachweisliche Erfahrung in der Arbeit mit verschiedenen modernen Technologien, bleibe aber ein lebenslanger Schüler dieses Handwerks. Ob es darum geht, sich in ein neues Framework einzuarbeiten oder einen Workflow zu optimieren – ich begreife Veränderungen als Chance, mein Fachwissen zu schärfen und exzellente Ergebnisse zu liefern.",
    skills_cta:
      'Du brauchst eine <span class="accent">weitere F\u00e4higkeit?</span>',
    skills_sub:
      "Kontaktiere mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.",
    proj_label: "Portfolio",
    proj_title: "Ausgew\u00e4hlte Projekte",
    proj_sub:
      "Entdecke hier eine Auswahl meiner Arbeiten \u2013 Interagiere mit den Projekten, um meine F\u00e4higkeiten in Aktion zu sehen.",
    proj_overlay_sub: "Worum geht es bei diesem Projekt?",
    proj_next: "N\u00e4chstes Projekt",
    testimonials_title: "Was meine Kollegen \u00fcber mich sagen",
    contact_label: "Kontakt",
    contact_title: "Lass uns zusammen<br/>arbeiten",
    contact_sub: "Hast du ein Problem zu l\u00f6sen?",
    contact_body:
      "Ich bin derzeit auf der Suche nach neuen beruflichen Herausforderungen als Frontend-Entwickler. Wenn du ein spannendes Projekt hast oder ein engagiertes Teammitglied suchst, das durch sauberen Code und strategisches Denken Mehrwert schafft, freue ich mich auf deine Nachricht.",
    form_name: "Wie hei\u00dft du?",
    form_email: "Wie lautet deine E-Mail?",
    form_msg: "Wie kann ich dir helfen?",
    footer_role: "Web Entwickler",
    footer_city: "M\u00fcnchen, Deutschland",
    footer_legal: "Impressum",
    legal_title: "Impressum",
    legal_back: "Zur\u00fcck",
    legal_h_imprint: "Impressum",
    legal_h_exploring: "Portfolio erkunden",
    legal_h_acceptance: "Nutzungsbedingungen",
    legal_p_acceptance:
      "Durch den Zugriff auf und die Nutzung von <strong>Portfolio</strong> (Produkt) erkennst du die folgenden Nutzungsbedingungen sowie alle Richtlinien und \u00c4nderungen an, die dir von Zeit zu Zeit mitgeteilt werden k\u00f6nnen. Wir, die aufgef\u00fchrten Studierenden, k\u00f6nnen die Bedingungen jederzeit ohne Vorank\u00fcndigung \u00e4ndern.",
    legal_h_scope: "Umfang und Eigent\u00fcmerschaft",
    legal_p_scope1:
      "<strong>Portfolio</strong> wurde im Rahmen eines Gruppenarbeitsprojekts in einem Webentwicklungs-Bootcamp bei der <strong>Developer Akademie GmbH</strong> entwickelt. Es hat einen Bildungszweck und ist nicht f\u00fcr eine umfangreiche private oder gesch\u00e4ftliche Nutzung gedacht. Daher k\u00f6nnen wir keine konsistente Verf\u00fcgbarkeit, Zuverl\u00e4ssigkeit oder Qualit\u00e4t garantieren.",
    legal_p_scope2:
      "Das Design von <strong>Portfolio</strong> geh\u00f6rt der <strong>Developer Akademie GmbH</strong>. Unerlaubte Nutzung, Vervielf\u00e4ltigung, \u00c4nderung, Verbreitung oder Replikation des Designs ist strengstens untersagt.",
    legal_h_proprietary: "Eigentumsrechte",
    legal_p_proprietary:
      "Abgesehen vom Design der <strong>Developer Akademie GmbH</strong> behalten wir, die aufgef\u00fchrten Studierenden, alle Eigentumsrechte an <strong>Portfolio</strong>, einschlie\u00dflich aller damit verbundenen urheberrechtlich gesch\u00fctzten Materialien, Marken und sonstigen Informationen.",
    legal_h_use: "Nutzung des Produkts",
    legal_p_use:
      "<strong>Portfolio</strong> darf ausschlie\u00dflich f\u00fcr legale Zwecke in \u00dcbereinstimmung mit allen geltenden Gesetzen genutzt werden. Jede Nutzung f\u00fcr illegale Aktivit\u00e4ten oder zur Bel\u00e4stigung, Bedrohung oder Einsch\u00fcchterung anderer Personen ist strengstens verboten. Du tr\u00e4gst die alleinige Verantwortung f\u00fcr deine Interaktionen.",
    legal_h_disclaimer: "Haftungsausschluss",
    legal_p_disclaimer:
      '<strong>Portfolio</strong> wird "wie besehen" ohne jegliche ausdr\u00fcckliche oder stillschweigende Garantie bereitgestellt. In keinem Fall haften wir, die Studierenden oder die <strong>Developer Akademie</strong>, f\u00fcr direkte, indirekte, besondere oder Folgesch\u00e4den, die aus der Nutzung oder Nichtverf\u00fcgbarkeit von <strong>Portfolio</strong> entstehen.',
    legal_h_indemnity: "Freistellung",
    legal_p_indemnity:
      "Du erkl\u00e4rst dich bereit, uns, die aufgef\u00fchrten Studierenden, die <strong>Developer Akademie</strong> sowie unsere Partner und Mitarbeiter von jeglichen Anspr\u00fcchen, Sch\u00e4den, Kosten oder Verbindlichkeiten freizustellen, die aus deiner Nutzung von <strong>Portfolio</strong> oder einem Versto\u00df gegen dieses Impressum entstehen.",
    legal_p_contact:
      'F\u00fcr Fragen oder Hinweise kontaktiere uns bitte unter <a href="mailto:maximilian-bese@gmx.de">maximilian-bese@gmx.de</a>.',
    legal_date: "Datum: 26. Juli 2025",
  },
};

/* ═══════════════════════════════════════════════
   RENDER SKILLS GRID
════════════════════════════════════════════════ */
(function renderSkills() {
  var grid = document.getElementById("skillsGrid");
  if (!grid) return;

  var S = ' width="52" height="52"';
  var svgs = {
    "svg-html":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l3.6 40L24 48l14.4-4L42 4H6z" fill="#E44D26"/><path d="M24 44.5l11.6-3.2 3.1-34.7H24v37.9z" fill="#F16529"/><path d="M24 20.5h-6.2l-.4-4.9H24v-4.8H12.8l1.2 13.5H24v-3.8zm0 10.7l-.1.1-5.2-1.4-.3-3.8H13.6l.7 7.5 9.7 2.7h.1v-5.1z" fill="#EBEBEB"/><path d="M24 20.5v3.8h5.8l-.5 6.1-5.3 1.4v5.1l9.7-2.7.1-.6 1.1-12.7.1-1.4H24zm0-9.7v4.8h11.3l.1-.9.2-2.4.1-1.5H24z" fill="#fff"/></svg>',
    "svg-css":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l3.6 40L24 48l14.4-4L42 4H6z" fill="#1572B6"/><path d="M24 44.5l11.6-3.2 3.1-34.7H24v37.9z" fill="#33A9DC"/><path d="M24 20.3h6.3l-.4 5-5.9 1.6v5.1l10.8-3 .1-1.4 1.2-14.2.1-1.4H24v5.3zm0-10.5v5.2h12.5l.1-1 .3-2.7.1-1.5H24z" fill="#fff"/><path d="M24 20.3H13.1l.4 5 5.6 1.6v-.1H24v-5H19l-.3-3.3H24v-5.2H12.3l.1 1.5.3 2.7.1 1H24v3.8zm0 11.8l-.1.1-5.2-1.4-.3-3.8H13.6l.7 7.5 9.7 2.7h.1v-5.1z" fill="#EBEBEB"/></svg>',
    "svg-js":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="3" fill="#F7DF1E"/><path d="M13.5 37.4l3.3-2c.6 1.1 1.2 2 2.5 2 1.3 0 2.1-.5 2.1-2.5V22.7h4.1v12.3c0 4.1-2.4 6-5.9 6-3.2 0-5-1.7-5.9-3.6M26.4 37l3.3-2c.9 1.4 2 2.4 4 2.4 1.7 0 2.8-.8 2.8-2 0-1.4-1.1-1.9-2.9-2.7l-1-.4c-2.9-1.2-4.8-2.8-4.8-6 0-3 2.3-5.3 5.8-5.3 2.5 0 4.3.9 5.6 3.2l-3.1 2c-.7-1.2-1.4-1.7-2.5-1.7s-1.8.7-1.8 1.7c0 1.2.7 1.7 2.4 2.4l1 .4c3.4 1.4 5.3 2.9 5.3 6.2 0 3.6-2.8 5.6-6.6 5.6-3.7 0-6.1-1.8-7.3-4.8" fill="#222"/></svg>',
    "svg-ts":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="3" fill="#3178C6"/><path d="M22.6 37.7v3.8c.6.3 1.4.6 2.3.7.9.2 1.8.2 2.8.2 1 0 1.9-.1 2.7-.3.9-.2 1.6-.5 2.2-1 .6-.5 1.1-1 1.5-1.8.4-.7.5-1.6.5-2.7 0-.8-.1-1.4-.3-2-.2-.6-.5-1.1-.9-1.5-.4-.4-.9-.8-1.4-1.1-.6-.3-1.2-.6-1.9-.9-.5-.2-1-.4-1.4-.6-.4-.2-.7-.4-1-.6-.3-.2-.5-.4-.6-.6-.1-.2-.2-.5-.2-.8 0-.3.1-.5.2-.7.1-.2.3-.4.5-.5.2-.1.5-.2.8-.3.3-.1.6-.1 1-.1.3 0 .6 0 .9.1.3 0 .7.1 1 .2.3.1.7.3 1 .4.3.2.6.4.9.6v-3.5c-.5-.2-1.1-.4-1.8-.5-.7-.1-1.4-.2-2.2-.2-1 0-1.9.1-2.7.3-.8.2-1.5.6-2.1 1-.6.4-1.1 1-1.4 1.7-.3.7-.5 1.5-.5 2.4 0 1.2.3 2.2 1 3 .7.8 1.7 1.4 3.1 2l1.5.6c.5.2.9.4 1.2.6.3.2.6.4.7.7.2.2.3.5.3.9 0 .3-.1.6-.2.8-.1.2-.3.4-.6.6-.2.1-.5.3-.9.3-.3.1-.7.1-1.1.1-.8 0-1.5-.1-2.2-.4-.9-.3-1.6-.7-2.2-1.2zM15.4 27.6h5.3V24H6v3.6h5.3V42h4.1V27.6z" fill="#fff"/></svg>',
    "svg-angular":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L5 11l2.9 25.2L24 44l16.1-7.8L43 11z" fill="#DD0031"/><path d="M24 4v4.6l.1 30.9 13.1-6.3L39.7 11z" fill="#C3002F"/><path d="M24 8.6L13.2 35h4l2.2-5.5h9.2L30.8 35h3.9L24 8.6zm0 7.8l3.4 8.8h-6.8L24 16.4z" fill="#fff"/></svg>',
    "svg-git":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M44.5 21.8L26.2 3.5a3.3 3.3 0 00-4.7 0l-4.6 4.7 5.9 5.9c1.4-.5 3 .2 3.6 1.7.6 1.5 0 3.2-1.4 3.9l5.7 5.7c1.6-.6 3.4.2 4 1.8.8 2-.3 4.2-2.4 4.2-1.8 0-3.3-1.5-3.3-3.3 0-.4.1-.8.2-1.2l-5.3-5.3v13.9c.4.2.7.4 1 .7 1.2 1.2 1.2 3.2 0 4.4-1.2 1.2-3.2 1.2-4.4 0-1.2-1.2-1.2-3.2 0-4.4.3-.3.7-.6 1.1-.8V21.8c-.4-.2-.8-.5-1.1-.8-1.2-1.2-1.2-3.2 0-4.4.1-.1.2-.2.3-.3l-5.8-5.8-15.5 15.5c-1.3 1.3-1.3 3.4 0 4.7l18.3 18.3c1.3 1.3 3.4 1.3 4.7 0L44.5 26.5c1.3-1.3 1.3-3.4 0-4.7z" fill="#F05032"/></svg>',
    "svg-api":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="12" width="40" height="24" rx="5" fill="white"/><text x="24" y="29" text-anchor="middle" font-size="12" font-weight="800" fill="#111" font-family="monospace,sans-serif">API</text></svg>',
    "svg-scrum":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" stroke="white" stroke-width="2.5"/><path d="M24 8C14 8 8 16 8 24c0 8 6 16 16 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M30 33 L38 37 L34 28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "svg-md":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="21" fill="none" stroke="white" stroke-width="2"/><polygon points="24,7 41,41 7,41" fill="none" stroke="white" stroke-width="2.5"/></svg>',
    "svg-sb":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 5L27 31L41 14H27" fill="white"/><path d="M21 43L21 17L7 34H21" fill="white" opacity="0.55"/></svg>',
    "svg-gm":
      "<svg" +
      S +
      ' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" stroke="#4ed9c2" stroke-width="2.5"/><path d="M13 29 L19 22 L25 27 L34 17" stroke="#4ed9c2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="37" cy="14" r="5" stroke="#4ed9c2" stroke-width="2"/><path d="M34 14h6M37 11v6" stroke="#4ed9c2" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };

  /* Map skill names to their inline SVG key */
  var iconMap = {
    HTML: "svg-html",
    CSS: "svg-css",
    JavaScript: "svg-js",
    TypeScript: "svg-ts",
    Angular: "svg-angular",
    Git: "svg-git",
    "REST-API": "svg-api",
    Scrum: "svg-scrum",
    "Material Design": "svg-md",
    Supabase: "svg-sb",
    "Growth mindset": "svg-gm",
  };

  grid.innerHTML = SKILLS.map(function (s) {
    var key = iconMap[s.name] || s.icon;
    var iconHtml = svgs[key] || "";
    return (
      '<div class="skill-item"><div class="skill-icon">' +
      iconHtml +
      "</div><span>" +
      s.name +
      "</span></div>"
    );
  }).join("");
})();
