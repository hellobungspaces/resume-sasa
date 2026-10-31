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
  navFaq: { id: "FAQ", en: "FAQ" },
  navContact: { id: "Kontak", en: "Contact" },
  btnBookCall: { id: "Hubungi", en: "Get In Touch" },
  statusText: { id: "TERSEDIA UNTUK KERJA", en: "AVAILABLE FOR HIRE" },
  workPref: {
    id: "JAKARTA (WFO / HYBRID) · SIAP SEGERA",
    en: "JAKARTA (WFO / HYBRID) · AVAILABLE IMMEDIATELY"
  },
  heroHook: {
    id: "Operasional toko online yang rapi, SLA respon cepat, dan kontrol stok zero-shrinkage.",
    en: "Clean storefront operations, fast chat SLA, and zero-shrinkage inventory control."
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
    id: "Disiplin alur kerja 4 tahap dari verifikasi pesanan masuk hingga after-sales untuk menjaga SLA cepat dan rating toko bintang 5.",
    en: "A 4-stage operational pipeline from incoming order verification to after-sales care, ensuring fast SLA and 5-star ratings."
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

  const highlights = [
    { id: "4.9★ Toko Terjaga", en: "4.9★ Store Rating" },
    { id: "Data Tanggap Bencana", en: "Crisis Data Audit" },
    { id: "0% Selisih Stok FIFO", en: "Zero Shrinkage FIFO" }
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
          <div class="sop-icon">${item.icon}</div>
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
          <div class="skill-item-row">
            <span class="skill-name">${item.name[lang]}</span>
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
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <span style="font-size: 1.15rem;">${item.icon}</span>
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
        } else {
          card.style.display = "none";
        }
      });
    });
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
});
