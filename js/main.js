import { portfolioData } from "./data.js";

// Global Application State (Defaulting to dark editorial style as per reference)
let currentLang = localStorage.getItem("preferred_lang") || "id";
let currentTheme = localStorage.getItem("preferred_theme") || "dark";

// Translation Dictionary for Static UI Elements
const uiTranslations = {
  navWorks: { id: "Karya & Kasus", en: "Selected Works" },
  navExperience: { id: "Pengalaman", en: "Experience" },
  navEducation: { id: "Pendidikan", en: "Education" },
  navSkills: { id: "Keahlian", en: "Skills" },
  navContact: { id: "Kontak", en: "Contact" },
  btnBookCall: { id: "Hubungi", en: "Get In Touch" },
  statusText: { id: "TERSEDIA UNTUK KERJA", en: "AVAILABLE FOR HIRE" },
  btnChatWa: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp" },
  btnAllChannels: { id: "Semua Jalur Kontak", en: "All Contact Channels" },
  trustLabel: {
    id: "EKOSISTEM & PLATFORM PENGALAMAN KERJA:",
    en: "ECOSYSTEM & WORK EXPERIENCE PLATFORMS:"
  },
  casesHeading: {
    id: "STUDI KASUS OPERASIONAL NYATA",
    en: "CURATED WORKS & OPERATIONAL DEEP DIVES"
  },
  casesSubheading: {
    id: "Penanganan kendala bisnis harian dengan ketelitian data, kecepatan SLA, dan empati pelanggan.",
    en: "Resolving practical day-to-day business bottlenecks through data accuracy, SLA speed, and customer empathy."
  },
  expHeading: {
    id: "PENGALAMAN KERJA & TANGGUNG JAWAB",
    en: "CAREER TIMELINE & RESPONSIBILITIES"
  },
  expSubheading: {
    id: "Rekam jejak profesional dari operasional toko daring multi-kanal, logistik bencana alam, hingga hospitality.",
    en: "Professional track record across multi-channel e-commerce operations, disaster relief administration, and hospitality."
  },
  eduHeading: {
    id: "LATAR BELAKANG PENDIDIKAN",
    en: "ACADEMIC FOUNDATION & FIELDWORK"
  },
  eduSubheading: {
    id: "Pemberdayaan sosial, metodologi riset lapangan, dan ketertiban akademik.",
    en: "Community empowerment, field research methodology, and academic rigor."
  },
  skillsHeading: {
    id: "KEAHLIAN & DOMAIN KERJA",
    en: "CAPABILITIES & OPERATIONAL DOMAINS"
  },
  skillsSubheading: {
    id: "Kombinasi perangkat lunak kerja, ketertiban rekonsiliasi data, serta etos kerja lapangan.",
    en: "Blend of digital software, data reconciliation rigor, and grassroots work ethic."
  },
  footerHugeCta: {
    id: "MARI CIPTAKAN OPERASIONAL YANG RAPI & SOLID.",
    en: "LET'S BUILD RIGOROUS, RELIABLE OPERATIONS."
  },
  footerDesc: {
    id: "Tersedia untuk kesempatan kerja penuh waktu (Full-Time) maupun kontrak profesional di bidang Marketplace Operations, Administrasi, Layanan Pelanggan, dan Logistik Data.",
    en: "Available for full-time employment or professional contracts across Marketplace Operations, Administration, Customer Support, and Crisis Data Logistics."
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
   1. Theme Management (Editorial Studio Dark vs Warm Gallery Light)
   -------------------------------------------------------------------------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeIcon = document.getElementById("theme-icon");
  if (themeIcon) {
    themeIcon.textContent = theme === "warm" ? "🌙" : "☀️";
  }
  const themeColorMeta = document.getElementById("theme-color-meta");
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", theme === "warm" ? "#F7F5F0" : "#0A0A0A");
  }
  localStorage.setItem("preferred_theme", theme);
  currentTheme = theme;
}

function toggleTheme() {
  const nextTheme = currentTheme === "dark" ? "warm" : "dark";
  applyTheme(nextTheme);
}

/* --------------------------------------------------------------------------
   2. Live Clock Display (Elizabeth Olsen style ticker)
   -------------------------------------------------------------------------- */
function startLiveClock() {
  const display = document.getElementById("live-time-display");
  if (!display) return;

  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Jakarta",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    display.textContent = `OUR TIME ${timeStr} WIB`;
  }

  update();
  setInterval(update, 1000);
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
  renderExperience(lang);
  renderEducation(lang);
  renderSkills(lang);
}

/* --------------------------------------------------------------------------
   4. Render Dynamic Content
   -------------------------------------------------------------------------- */
function renderHero(lang) {
  const { profile } = portfolioData;
  const titleEl = document.getElementById("hero-title");
  const bioEl = document.getElementById("hero-bio");
  const statusEl = document.getElementById("hero-status-text");
  const footerAddr = document.getElementById("footer-address-text");

  if (titleEl) titleEl.textContent = profile.title[lang];
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
      <div class="metric-number">${s.value}</div>
      <div class="metric-label">${s.label[lang]}</div>
      <div class="metric-sub">${s.sub[lang]}</div>
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

function renderCaseStudies(lang) {
  const container = document.getElementById("case-studies-container");
  if (!container) return;

  const html = portfolioData.caseStudies
    .map((cs, idx) => {
      const num = String(idx + 1).padStart(2, "0");
      return `
      <article class="work-card">
        <div class="work-header">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--primary); font-weight: 700; margin-bottom: 0.35rem;">
              PROJECT ${num} &bull; CASE STUDY
            </div>
            <h3 class="work-card-title">${cs.title[lang]}</h3>
          </div>
          <div class="work-tags">
            <span class="tag-badge">CASE STUDY</span>
            <span class="tag-badge">OPERATIONS</span>
          </div>
        </div>

        <div class="work-body-grid">
          <div class="work-block">
            <div class="work-block-label">${lang === "id" ? "1. Konteks & Tantangan Operasional" : "1. Operational Context & Challenge"}</div>
            <p>${cs.context[lang]}</p>
          </div>

          <div class="work-block">
            <div class="work-block-label">${lang === "id" ? "2. Tindakan Eksekusi Nyata" : "2. Actionable Implementation"}</div>
            <ul>
              ${cs.actions[lang].map((act) => `<li>${act}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="work-outcome-block">
          <span class="outcome-icon">✓</span>
          <div class="outcome-text">
            <strong>${lang === "id" ? "Hasil Terukur:" : "Measurable Outcome:"}</strong> ${cs.outcome[lang]}
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  container.innerHTML = html;
}

function renderExperience(lang) {
  const container = document.getElementById("experience-container");
  if (!container) return;

  const html = portfolioData.experiences
    .map((exp, idx) => {
      const num = String(idx + 1).padStart(2, "0");
      return `
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); font-weight: 700; margin-bottom: 0.25rem;">
              ROLE ${num}
            </div>
            <h3 class="exp-role-title">${exp.role[lang]}</h3>
            <div class="exp-company">${exp.company} &bull; ${exp.location}</div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <span class="tag-badge">${exp.type[lang]}</span>
            <span class="exp-period-badge">${exp.period[lang]}</span>
          </div>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.75rem; line-height: 1.65;">
          ${exp.summary[lang]}
        </p>

        <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1rem;">
          ${exp.tags.map((t) => `<span class="tag-badge">${t}</span>`).join("")}
        </div>

        <ul class="exp-bullets">
          ${exp.bullets[lang].map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;
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
          <span>IPK: ${education.gpa} / 4.00</span>
          <span>&bull; ${education.honors[lang]}</span>
        </div>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem;">
        <strong>${lang === "id" ? "Fokus Keilmuan & Riset:" : "Academic & Research Focus:"}</strong> ${education.focus[lang]}
      </p>

      <div style="background-color: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); letter-spacing: 0.08em; margin-bottom: 0.65rem;">
          ${lang === "id" ? "Pengalaman Lapangan & Keunggulan Akademis" : "Fieldwork Experience & Academic Highlights"}
        </div>
        <ul class="exp-bullets">
          ${education.highlights[lang].map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>
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
            <span class="skill-name">${item.name}</span>
            <span class="tag-badge">${item.badge}</span>
          </div>
        `
          )
          .join("");
      } else if (cat.id === "soft-skills") {
        itemsHtml = cat.items
          .map(
            (item) => `
          <div style="padding: 0.75rem; border-radius: var(--radius-sm); background-color: var(--bg-subtle); border: 1px solid var(--border); margin-bottom: 0.5rem;">
            <div class="skill-name" style="color: var(--primary); font-weight: 700;">${item.name[lang]}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">${item.desc[lang]}</div>
          </div>
        `
          )
          .join("");
      } else if (cat.id === "operational-domains") {
        itemsHtml = cat.items
          .map(
            (item) => `
          <div class="skill-item-row">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <span style="font-size: 1.15rem;">${item.icon}</span>
              <span class="skill-name">${item.name[lang]}</span>
            </div>
            <span class="tag-badge">Verified</span>
          </div>
        `
          )
          .join("");
      }

      return `
      <div class="skill-category-card">
        <h3 class="skill-cat-title">${cat.title[lang]}</h3>
        <div>${itemsHtml}</div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;
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
  startLiveClock();

  // 4. Initial Render
  setLanguage(currentLang);
});
