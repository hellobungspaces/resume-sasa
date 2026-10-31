import { portfolioData } from "./data.js";

// Global Application State (Defaulting to dark editorial style as per reference)
let currentLang = localStorage.getItem("preferred_lang") || "id";
let storedTheme = localStorage.getItem("preferred_theme");
if (storedTheme === "warm") storedTheme = "light";
let currentTheme = storedTheme || "dark";

// Dedicated Crisp Monochrome Vector SVG Icons Library
const svgIcons = {
  // Tools & Marketplace
  shopee: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
  tiktok: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>`,
  whatsapp: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  excel: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>`,
  pos: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="6" y1="8" x2="6" y2="8.01"></line><line x1="10" y1="8" x2="10" y2="8.01"></line><line x1="14" y1="8" x2="14" y2="8.01"></line><line x1="18" y1="8" x2="18" y2="8.01"></line><line x1="6" y1="12" x2="18" y2="12"></line><line x1="6" y1="16" x2="12" y2="16"></line></svg>`,
  docs: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
  drive: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  forms: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
  canva: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>`,

  // Soft Skills / Character
  adaptability: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  precision: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`,
  communication: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  timeManagement: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  teamwork: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  problemSolving: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path></svg>`,

  // Operational Domains
  salesReport: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  stockOpname: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  correspondence: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  customerCare: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
  dataAuditing: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,

  // SOP Pipeline
  orderIntake: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1"></rect><path d="M9 14l2 2 4-4"></path></svg>`,
  chatSpeed: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  fulfillment: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  ratingCare: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
};

// Translation Dictionary for Static UI Elements
const uiTranslations = {
  navWorks: { id: "Karya & Kasus", en: "Selected Works" },
  navExperience: { id: "Pengalaman", en: "Experience" },
  navEducation: { id: "Pendidikan", en: "Education" },
  navSkills: { id: "Keahlian", en: "Skills" },
  navFaq: { id: "FAQ", en: "FAQ" },
  navContact: { id: "Kontak", en: "Contact" },
  btnBookCall: { id: "Hubungi", en: "Get In Touch" },
  statusText: { id: "TERSEDIA UNTUK KERJA", en: "AVAILABLE FOR HIRE" },
  workPref: {
    id: "JAKARTA (WFO / HYBRID) · NOTICE 1 BULAN",
    en: "JAKARTA (WFO / HYBRID) · 1 MONTH NOTICE"
  },
  heroHook: {
    id: "Operasional toko online yang rapi, respon chat cepat, dan kontrol stok tanpa selisih.",
    en: "Clean storefront operations, fast chat response, and zero stock discrepancy."
  },
  btnChatWa: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp" },
  btnAllChannels: { id: "Semua Jalur Kontak", en: "All Contact Channels" },
  trustLabel: {
    id: "EKOSISTEM & PLATFORM PENGALAMAN:",
    en: "EXPERIENCE ECOSYSTEM & PLATFORMS:"
  },
  casesHeading: {
    id: "STUDI KASUS OPERASIONAL",
    en: "FEATURED CASE STUDIES"
  },
  casesSubheading: {
    id: "Penyelesaian kendala operasional toko, validasi data, dan audit stok.",
    en: "Practical solutions for storefront operations, data auditing, and inventory control."
  },
  sopBadge: {
    id: "STANDAR OPERASIONAL PROSEDUR (SOP) HARIAN",
    en: "DAILY OPERATIONAL WORKFLOW (SOP)"
  },
  sopTitle: {
    id: "Arsitektur Alur Kerja Operasional Marketplace",
    en: "Marketplace Operations Workflow Architecture"
  },
  sopDesc: {
    id: "Disiplin alur kerja 4 tahap dari verifikasi pesanan masuk hingga after-sales untuk menjaga respon cepat dan rating toko bintang 5.",
    en: "A 4-stage operational pipeline from incoming order verification to after-sales care, ensuring fast response times and 5-star ratings."
  },
  expHeading: {
    id: "PENGALAMAN KERJA",
    en: "WORK EXPERIENCE"
  },
  expSubheading: {
    id: "Rekam jejak di e-commerce marketplace, kementerian, dan hospitality.",
    en: "Track record across marketplace operations, government, and hospitality."
  },
  eduHeading: {
    id: "PENDIDIKAN",
    en: "EDUCATION"
  },
  eduSubheading: {
    id: "Lulusan S1 Pengembangan Masyarakat Islam UIN Jakarta (IPK 3.64 / Cum Laude).",
    en: "Bachelor of Social Sciences from UIN Jakarta (GPA 3.64 / Cum Laude)."
  },
  skillsHeading: {
    id: "KEAHLIAN & DOMAIN",
    en: "SKILLS & DOMAINS"
  },
  skillsSubheading: {
    id: "Alat operasional marketplace, administrasi data, dan kompetensi kerja.",
    en: "Operational tooling, data administration, and core competencies."
  },
  faqHeading: {
    id: "FAQ REKRUTER (QUICK SCREENING)",
    en: "RECRUITER FAQ (QUICK SCREENING)"
  },
  faqSubheading: {
    id: "Jawaban langsung untuk ketersediaan kerja, mobilitas lokasi, dan kapabilitas teknis.",
    en: "Immediate answers to hiring availability, location mobility, and operational capabilities."
  },
  footerHugeCta: {
    id: "MARI BEKERJA SAMA.",
    en: "LET'S WORK TOGETHER."
  },
  footerDesc: {
    id: "Terbuka untuk posisi Full-Time maupun kontrak di bidang operasional marketplace, administrasi, dan layanan pelanggan.",
    en: "Open for Full-Time or Contract roles in marketplace operations, administration, and customer service."
  },
  btnCopyEmail: { id: "Salin Email ⧉", en: "Copy Email ⧉" },
  btnContact: { id: "Kontak", en: "Contact" },
  btnCopy: { id: "Salin", en: "Copy" },
  btnChat: { id: "Chat WA", en: "Chat WA" },
  btnOpen: { id: "Buka", en: "Open" },
  modalTitle: { id: "Hubungi Saida Zakiyah", en: "Contact Saida Zakiyah" },
  modalDesc: {
    id: "Silakan hubungi saya melalui jalur resmi berikut untuk wawancara kerja atau tawaran kolaborasi.",
    en: "Reach out via any of these channels for employment opportunities or collaborative inquiries."
  }
};

/* --------------------------------------------------------------------------
   1. Theme Management (Editorial Dark vs Crisp Pure White Light)
   -------------------------------------------------------------------------- */
function applyTheme(theme) {
  const isLight = theme === "light" || theme === "warm";
  const activeTheme = isLight ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", activeTheme);

  const themeIcon = document.getElementById("theme-icon");
  if (themeIcon) {
    themeIcon.textContent = isLight ? "🌙" : "☀️";
  }

  const themeColorMeta = document.getElementById("theme-color-meta");
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", isLight ? "#FFFFFF" : "#0D0D0D");
  }

  localStorage.setItem("preferred_theme", activeTheme);
  currentTheme = activeTheme;
}

function toggleTheme() {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
}


/* --------------------------------------------------------------------------
   3. Language Switcher
   -------------------------------------------------------------------------- */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  // Update button states
  const idBtn = document.getElementById("lang-id-btn");
  const enBtn = document.getElementById("lang-en-btn");
  if (idBtn && enBtn) {
    idBtn.classList.toggle("active", lang === "id");
    idBtn.setAttribute("aria-pressed", lang === "id");
    enBtn.classList.toggle("active", lang === "en");
    enBtn.setAttribute("aria-pressed", lang === "en");
  }

  // Update static translated elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (uiTranslations[key] && uiTranslations[key][lang]) {
      el.textContent = uiTranslations[key][lang];
    }
  });

  // Re-render dynamic sections with new language
  renderHero(lang);
  renderStats(lang);
  renderCaseStudies(lang);
  renderPipeline(lang);
  renderExperience(lang);
  renderEducation(lang);
  renderSkills(lang);
  renderFaq(lang);
}

/* --------------------------------------------------------------------------
   4. Render Dynamic Content
   -------------------------------------------------------------------------- */
function renderHero(lang) {
  const { profile } = portfolioData;
  const titleEl = document.getElementById("hero-title");
  const hookEl = document.getElementById("hero-hook");
  const bioEl = document.getElementById("hero-bio");
  const statusEl = document.getElementById("hero-status-text");
  const footerAddr = document.getElementById("footer-address-text");

  if (titleEl) titleEl.textContent = profile.title[lang];
  if (hookEl && uiTranslations.heroHook) hookEl.textContent = uiTranslations.heroHook[lang];
  if (bioEl) bioEl.textContent = profile.bio[lang];
  if (statusEl) statusEl.textContent = profile.statusBadge[lang];
  if (footerAddr) footerAddr.textContent = profile.contact.address[lang];
}

function renderStats(lang) {
  const container = document.getElementById("stats-container");
  if (!container) return;

  const html = portfolioData.profile.stats
    .map(
      (s) => `
    <div class="metric-item">
      <div class="metric-number" data-stat-val="${s.value}">${s.value}</div>
      <div class="metric-label">${s.label[lang]}</div>
      <div class="metric-sub">${s.sub[lang]}</div>
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

function animateCounters() {
  const numberEls = document.querySelectorAll(".metric-number");
  if (!numberEls.length) return;

  numberEls.forEach((el) => {
    const rawVal = el.getAttribute("data-stat-val") || el.textContent.trim();

    // 1. Rating e.g. "4.9★"
    if (rawVal.includes("★") || rawVal.includes("4.9")) {
      const target = 4.9;
      const duration = 850;
      const startTime = performance.now();
      function tickRating(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = (ease * target).toFixed(1);
        el.textContent = `${current}★`;
        if (progress < 1) requestAnimationFrame(tickRating);
      }
      requestAnimationFrame(tickRating);
    }
    // 2. Chat speed e.g. "< 15 Mnt"
    else if (rawVal.includes("15")) {
      const target = 15;
      const duration = 800;
      const startTime = performance.now();
      const hasMnt = rawVal.toLowerCase().includes("mnt");
      const suffix = hasMnt ? " Mnt" : " Min";
      function tickChat(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(ease * target);
        el.textContent = `< ${current}${suffix}`;
        if (progress < 1) requestAnimationFrame(tickChat);
      }
      requestAnimationFrame(tickChat);
    }
    // 3. Stock discrepancy e.g. "0%"
    else if (rawVal.includes("%")) {
      el.textContent = "0%";
      el.style.transform = "scale(1.2)";
      el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      setTimeout(() => {
        el.style.transform = "scale(1)";
      }, 350);
    }
    // 4. GPA e.g. "3.64"
    else if (rawVal.includes("3.64") || !isNaN(parseFloat(rawVal))) {
      const target = 3.64;
      const duration = 900;
      const startTime = performance.now();
      function tickGpa(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = (ease * target).toFixed(2);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(tickGpa);
      }
      requestAnimationFrame(tickGpa);
    }
  });
}

function setupIntroAnimation() {
  const curtain = document.getElementById("intro-curtain");
  const bar = document.getElementById("intro-bar");

  // Reduced motion check
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (curtain) curtain.style.display = "none";
    document.body.classList.add("site-loaded");
    return;
  }

  if (!curtain) {
    document.body.classList.add("site-loaded");
    return;
  }

  // Interactive instant dismiss on click or touch
  let dismissed = false;
  const dismissCurtain = () => {
    if (dismissed) return;
    dismissed = true;
    curtain.classList.add("lift");
    document.body.classList.add("site-loaded");
    setTimeout(() => {
      curtain.style.display = "none";
      animateCounters();
    }, 650);
  };

  curtain.addEventListener("click", dismissCurtain);

  // Fill the progress bar line
  requestAnimationFrame(() => {
    if (bar) bar.classList.add("filled");
  });

  // Fast & snappy automatic lift (480ms)
  setTimeout(dismissCurtain, 480);
}

function renderCaseStudies(lang) {
  const container = document.getElementById("case-studies-container");
  if (!container) return;

  const highlights = [
    { id: "4.9★ Toko Terjaga", en: "4.9★ Store Rating" },
    { id: "Data Tanggap Bencana", en: "Crisis Data Audit" },
    { id: "0% Selisih Stok", en: "0% Stock Discrepancy" }
  ];

  const html = portfolioData.caseStudies
    .map((cs, idx) => {
      const num = String(idx + 1).padStart(2, "0");
      const badgeText = highlights[idx] ? highlights[idx][lang] : "VERIFIED CASE";
      return `
      <article class="work-card">
        <div class="work-header">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--primary); font-weight: 700; margin-bottom: 0.25rem;">
              CASE ${num} &bull; OPERATIONAL DEEP-DIVE
            </div>
            <h3 class="work-card-title">${cs.title[lang]}</h3>
          </div>
          <div class="work-tags">
            <span class="case-metric-badge">${badgeText}</span>
          </div>
        </div>

        <div class="work-body-grid">
          <div class="work-block">
            <div class="work-block-label">${lang === "id" ? "Tantangan Operasional" : "Operational Challenge"}</div>
            <p>${cs.context[lang]}</p>
          </div>

          <div class="work-block">
            <div class="work-block-label">${lang === "id" ? "Langkah Eksekusi Nyata" : "Key Actions Taken"}</div>
            <ul>
              ${cs.actions[lang].map((act) => `<li>${act}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="work-outcome-block">
          <span class="outcome-icon">✓</span>
          <div class="outcome-text">
            <strong>${lang === "id" ? "Hasil Terukur:" : "Measurable Result:"}</strong> ${cs.outcome[lang]}
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  container.innerHTML = html;
}

function renderPipeline(lang) {
  const container = document.getElementById("sop-pipeline-container");
  if (!container || !portfolioData.sopPipeline) return;

  const html = portfolioData.sopPipeline
    .map((item, idx) => {
      const isActive = idx === 0 ? "active" : "";
      return `
      <div class="sop-card ${isActive}" data-sop-card tabindex="0" role="button" aria-expanded="${idx === 0}">
        <div class="sop-card-top">
          <div class="sop-step-number">${item.step}</div>
          <div class="sop-icon-vector">${svgIcons[item.iconKey] || ""}</div>
        </div>
        <div class="sop-tag">${item.tag[lang]}</div>
        <h4 class="sop-title">${item.title[lang]}</h4>
        <p class="sop-desc">${item.desc[lang]}</p>
        <div class="sop-metric-pill">
          <span class="sop-metric-dot"></span>
          <span>${item.metric[lang]}</span>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;

  container.querySelectorAll("[data-sop-card]").forEach((card) => {
    card.addEventListener("click", () => {
      container.querySelectorAll("[data-sop-card]").forEach((c) => {
        c.classList.remove("active");
        c.setAttribute("aria-expanded", "false");
      });
      card.classList.add("active");
      card.setAttribute("aria-expanded", "true");
    });
  });
}

function renderExperience(lang) {
  const container = document.getElementById("experience-container");
  if (!container) return;

  const html = portfolioData.experiences
    .map((exp, idx) => {
      const num = String(idx + 1).padStart(2, "0");
      const isFirst = idx === 0 ? "open" : "";
      return `
      <div class="ledger-item ${isFirst}" data-ledger-item>
        <button type="button" class="ledger-header-btn" data-ledger-toggle aria-expanded="${idx === 0}">
          <div class="ledger-col-left">
            <span class="ledger-index">[ ${num} ]</span>
            <div class="ledger-title-wrap">
              <h3 class="ledger-role-title">${exp.role[lang]}</h3>
              <div class="ledger-company-info">
                <span>${exp.company}</span>
                <span>&bull;</span>
                <span>${exp.location}</span>
                <span class="tag-badge" style="margin-left: 0.35rem;">${exp.type[lang]}</span>
              </div>
            </div>
          </div>

          <div class="ledger-col-right">
            <span class="ledger-period">${exp.period[lang]}</span>
            <span class="ledger-expand-indicator" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </button>

        <div class="ledger-body-drawer">
          <div class="ledger-drawer-inner">
            <div class="ledger-tags-row">
              ${exp.tags.map((t) => `<span class="tag-badge">${t}</span>`).join("")}
            </div>
            <ul class="exp-bullets">
              ${exp.bullets[lang].map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;

  container.querySelectorAll("[data-ledger-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest("[data-ledger-item]");
      if (!parent) return;
      const isOpen = parent.classList.contains("open");
      parent.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", !isOpen);
    });
  });
}

function renderEducation(lang) {
  const container = document.getElementById("education-container");
  if (!container) return;

  const { education } = portfolioData;

  container.innerHTML = `
    <div class="edu-card">
      <div class="edu-top-row">
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); font-weight: 700; margin-bottom: 0.25rem;">
            HIGHER EDUCATION
          </div>
          <h3 class="edu-school-name">${education.institution}</h3>
          <div class="edu-degree-title">${education.degree[lang]}</div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem;">
            ${education.location} &bull; ${education.period}
          </div>
        </div>
        <div class="gpa-pill">
          <span>${lang === "id" ? "IPK" : "GPA"}: ${education.gpa}</span>
          <span>&bull; ${education.honors[lang]}</span>
        </div>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
        ${education.focus[lang]}
      </p>

      <ul class="exp-bullets">
        ${education.highlights[lang].map((h) => `<li>${h}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderSkills(lang) {
  const container = document.getElementById("skills-container");
  if (!container) return;

  const categories = portfolioData.skills.categories;

  const html = categories
    .map((cat) => {
      let itemsHtml = "";

      if (cat.id === "hard-skills") {
        itemsHtml = cat.items
          .map(
            (item) => `
          <div class="skill-item-row">
            <div class="skill-item-left">
              <span class="skill-icon-vector">${svgIcons[item.iconKey] || ""}</span>
              <span class="skill-name">${item.name}</span>
            </div>
            <span class="tag-badge">${item.badge}</span>
          </div>
        `
          )
          .join("");
      } else if (cat.id === "soft-skills") {
        itemsHtml = cat.items
          .map(
            (item) => `
          <div class="skill-item-row">
            <div class="skill-item-left">
              <span class="skill-icon-vector">${svgIcons[item.iconKey] || ""}</span>
              <span class="skill-name">${item.name[lang]}</span>
            </div>
            <span class="tag-badge">${item.badge[lang]}</span>
          </div>
        `
          )
          .join("");
      } else if (cat.id === "operational-domains") {
        itemsHtml = cat.items
          .map(
            (item) => `
          <div class="skill-item-row">
            <div class="skill-item-left">
              <span class="skill-icon-vector">${svgIcons[item.iconKey] || ""}</span>
              <span class="skill-name">${item.name[lang]}</span>
            </div>
            <span class="tag-badge">${lang === "id" ? "Aktif" : "Active"}</span>
          </div>
        `
          )
          .join("");
      }

      return `
      <div class="skill-category-card" data-category="${cat.id}">
        <h3 class="skill-cat-title">${cat.title[lang]}</h3>
        <div>${itemsHtml}</div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;
}

function setupSkillsFilter() {
  const filterNav = document.getElementById("skills-filter-nav");
  if (!filterNav) return;

  const buttons = filterNav.querySelectorAll(".skill-tab-pill");
  const container = document.getElementById("skills-container");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (!container) return;
      const cards = container.querySelectorAll(".skill-category-card");
      cards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "";
          card.style.opacity = "0";
          card.style.transform = "translateY(8px)";
          requestAnimationFrame(() => {
            card.style.transition = "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(
    ".work-card, .sop-card, .ledger-item, .edu-card, .skill-category-card, .faq-item, .footer-cta-box, .metric-item"
  );
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -25px 0px" }
  );

  elements.forEach((el) => {
    el.classList.add("reveal-init");
    observer.observe(el);
  });
}

function renderFaq(lang) {
  const container = document.getElementById("faq-container");
  if (!container || !portfolioData.recruiterFaq) return;

  const html = portfolioData.recruiterFaq
    .map((faq, idx) => {
      const isOpen = idx === 0 ? "open" : "";
      const num = String(idx + 1).padStart(2, "0");
      return `
      <div class="faq-item ${isOpen}" data-faq-item>
        <button type="button" class="faq-trigger" data-faq-trigger aria-expanded="${idx === 0}">
          <div class="faq-q-wrap">
            <span class="faq-q-num">[ ${num} ]</span>
            <span class="faq-q-text">${faq.q[lang]}</span>
          </div>
          <span class="faq-icon-indicator" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="faq-answer-panel">
          <div class="faq-answer-content">
            <p>${faq.a[lang]}</p>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;

  container.querySelectorAll("[data-faq-trigger]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest("[data-faq-item]");
      if (!parent) return;
      const isOpen = parent.classList.contains("open");
      parent.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", !isOpen);
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Modals, Toast & Copy Handlers
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function setupCopyButtons() {
  document.addEventListener("click", (e) => {
    const copyTarget = e.target.closest(".copyable");
    if (!copyTarget) return;

    const textToCopy = copyTarget.getAttribute("data-copy");
    if (!textToCopy) return;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const msg = currentLang === "id" ? `Tersalin: ${textToCopy}` : `Copied: ${textToCopy}`;
        showToast(msg);
      })
      .catch(() => {
        showToast(textToCopy);
      });
  });
}

function setupContactModal() {
  const modal = document.getElementById("contact-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const openTriggers = document.querySelectorAll(".open-contact-trigger, #open-contact-modal-btn");

  if (!modal || !closeBtn) return;

  const openModal = () => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  openTriggers.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function setupMobileDrawer() {
  const drawer = document.getElementById("mobile-menu-drawer");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const backdrop = document.getElementById("mobile-drawer-backdrop");
  const drawerLinks = document.querySelectorAll("[data-drawer-link]");

  if (!drawer || !toggleBtn || !closeBtn) return;

  const openDrawer = () => {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  const circle = document.getElementById("scroll-progress-circle");
  if (!btn) return;

  const circumference = 125.66; // 2 * Math.PI * 20
  let ticking = false;

  const updateScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;

    // Smooth visibility toggle
    if (scrollY > 280) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }

    // Update progress circle offset
    if (circle && scrollTotal > 0) {
      const scrollPercent = Math.min(Math.max(scrollY / scrollTotal, 0), 1);
      const offset = circumference - scrollPercent * circumference;
      circle.style.strokeDashoffset = offset.toFixed(2);
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* --------------------------------------------------------------------------
   6. Application Initialization
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme
  applyTheme(currentTheme);
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // 2. Initialize Language Switchers
  const idBtn = document.getElementById("lang-id-btn");
  const enBtn = document.getElementById("lang-en-btn");
  if (idBtn) idBtn.addEventListener("click", () => setLanguage("id"));
  if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));

  // 3. Setup Interactive Features
  setupCopyButtons();
  setupContactModal();
  setupMobileDrawer();
  setupBackToTop();
  setupSkillsFilter();

  // 4. Initial Render
  setLanguage(currentLang);

  // 5. Scroll Animations
  setupScrollReveal();

  // 6. Intro Curtain & Opening Motion
  setupIntroAnimation();
});
