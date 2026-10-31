// Bilingual Data Model (Indonesian & English) for Saida Zakiyah Portfolio
// Clean, concise, punchy editorial copy - zero corporate fluff or AI slop.

export const portfolioData = {
  profile: {
    name: "Saida Zakiyah",
    title: {
      id: "Spesialis Operasional Marketplace & Administrasi",
      en: "Marketplace Operations & Administration Specialist"
    },
    subtitle: {
      id: "Lulusan UIN Jakarta (IPK 3.64/4.00) dengan pengalaman operasional toko e-commerce, administrasi data Kemensos RI, dan manajemen inventaris.",
      en: "UIN Jakarta graduate (GPA 3.64/4.00) with experience in e-commerce storefronts, ministry data administration, and inventory control."
    },
    bio: {
      id: "Spesialis operasional marketplace dan administrasi lulusan UIN Jakarta (IPK 3.64). Berpengalaman mengelola toko multi-kanal di Batavia Uniform, verifikasi data Kemensos RI, dan audit inventaris.",
      en: "Marketplace operations and administration specialist, UIN Jakarta graduate (GPA 3.64). Experienced in multi-channel e-commerce at Batavia Uniform, disaster data at Kemensos RI, and inventory audit."
    },
    photo: "assets/saida-profile.jpg",
    statusBadge: {
      id: "Tersedia untuk Kerja · Full-Time / Kontrak",
      en: "Available for Hire · Full-Time / Contract"
    },
    contact: {
      phone: "089601255561",
      phoneFormatted: "+62 896-0125-5561",
      whatsappUrl: "https://wa.me/6289601255561?text=Halo%20Saida%20Zakiyah,%20saya%20melihat%20portfolio%20Anda",
      email: "saidazkyh24@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/saida-zakiyah",
      linkedinDisplay: "linkedin.com/in/saida-zakiyah",
      address: {
        id: "Jakarta Timur, DKI Jakarta",
        en: "East Jakarta, Indonesia"
      },
      city: {
        id: "Jakarta Timur, Indonesia",
        en: "East Jakarta, Indonesia"
      }
    },
    stats: [
      {
        value: "3.64",
        label: { id: "IPK / 4.00 (Cum Laude)", en: "GPA / 4.00 (Distinction)" },
        sub: { id: "UIN Syarif Hidayatullah", en: "UIN Syarif Hidayatullah" }
      },
      {
        value: "3+",
        label: { id: "Kanal Marketplace", en: "Active Channels" },
        sub: { id: "Shopee, TikTok Shop, WhatsApp", en: "Shopee, TikTok Shop, WhatsApp" }
      },
      {
        value: "100%",
        label: { id: "Ketertiban Stock Opname", en: "Inventory Compliance" },
        sub: { id: "Loopline & Batavia Uniform", en: "Loopline & Batavia Uniform" }
      },
      {
        value: "4+",
        label: { id: "Bulan di Kemensos RI", en: "Months at Kemensos RI" },
        sub: { id: "Ditjen PSKBA", en: "Disaster Protection Dept." }
      }
    ]
  },

  experiences: [
    {
      id: "batavia-uniform",
      role: {
        id: "Admin Marketplace & Customer Service",
        en: "Marketplace & Customer Service Admin"
      },
      company: "Batavia Uniform",
      location: "Jakarta, Indonesia",
      period: {
        id: "Apr 2026 – Sekarang",
        en: "Apr 2026 – Present"
      },
      type: {
        id: "Penuh Waktu",
        en: "Full-Time"
      },
      tags: ["Shopee", "TikTok Shop", "WhatsApp CRM", "Stock Control"],
      summary: {
        id: "Mengelola toko online multi-kanal, pesanan harian, update stok, dan penanganan retur seragam.",
        en: "Managed multi-channel storefronts, daily order workflows, stock synchronization, and exchanges."
      },
      bullets: {
        id: [
          "Memproses alur pemesanan harian, update stok, dan sinkronisasi katalog di Shopee & TikTok Shop.",
          "Merespon konsultasi ukuran dan komplain retur pelanggan via WhatsApp secara cepat dan ramah.",
          "Menyusun laporan penjualan harian untuk evaluasi produk terlaris dan perencanaan stok seragam."
        ],
        en: [
          "Processed daily incoming orders, updated inventory, and synced catalogs on Shopee & TikTok Shop.",
          "Handled sizing consultations and return logistics via WhatsApp with high SLA and friendly service.",
          "Reconciled daily sales logs to track top-selling uniforms and plan stock reorders."
        ]
      }
    },
    {
      id: "loopline-coffee",
      role: {
        id: "Barista & Kasir",
        en: "Barista & Cashier"
      },
      company: "Loopline Coffee",
      location: "Jakarta, Indonesia",
      period: {
        id: "Jul 2024 – Feb 2025",
        en: "Jul 2024 – Feb 2025"
      },
      type: {
        id: "Penuh Waktu",
        en: "Full-Time"
      },
      tags: ["Stock Opname", "POS Cashier", "Hospitality", "Quality Control"],
      summary: {
        id: "Mengelola transaksi kasir, audit fisik stok bahan baku per shift, dan penyajian minuman.",
        en: "Handled register transactions, shift stock audits for beans and dairy, and drink preparation."
      },
      bullets: {
        id: [
          "Menjalankan transaksi kasir POS dan audit fisik stock opname harian (beans, fresh milk, sirup).",
          "Menyajikan 50+ pesanan espresso-based per hari dengan konsistensi rasa dan kecepatan saji prima.",
          "Menerapkan prinsip FIFO pada penyimpanan bahan baku serta menjaga sanitasi bar sesuai SOP."
        ],
        en: [
          "Operated POS register and audited physical stock per shift (coffee beans, fresh milk, syrups).",
          "Prepared 50+ espresso beverages daily upholding consistent flavor profiles and fast service.",
          "Enforced FIFO rotation on perishables and maintained strict hygiene across the bar station."
        ]
      }
    },
    {
      id: "kemensos-ri",
      role: {
        id: "Magang Administrasi – Ditjen PSKBA",
        en: "Administrative Intern – Ditjen PSKBA"
      },
      company: "Kementerian Sosial Republik Indonesia",
      location: "Jakarta Pusat, Indonesia",
      period: {
        id: "Jul 2024 – Okt 2024",
        en: "Jul 2024 – Oct 2024"
      },
      type: {
        id: "Magang Resmi",
        en: "Official Internship"
      },
      tags: ["Data Verification", "Kemensos RI", "Surat Dinas", "Sistem Informasi"],
      summary: {
        id: "Verifikasi data korban bencana alam dan tata kelola persuratan dinas di Ditjen PSKBA.",
        en: "Audited national disaster victim logs and processed official correspondence at Ditjen PSKBA."
      },
      bullets: {
        id: [
          "Memvalidasi dan mengelompokkan data korban bencana alam daerah untuk verifikasi bantuan logistik.",
          "Mencatat registrasi dan mendisposisikan surat dinas masuk kepada jajaran Direktur terkait.",
          "Menjaga kerahasiaan dan akurasi data situasi kebencanaan nasional dalam ritme kerja cepat tanggap."
        ],
        en: [
          "Audited and classified regional casualty/displacement records to verify relief allocations.",
          "Registered, categorized, and dispatched incoming ministerial correspondence to Directors.",
          "Maintained data fidelity and confidentiality under emergency disaster response workflows."
        ]
      }
    },
    {
      id: "kopi-gudang",
      role: {
        id: "Barista & Kasir (Part-Time)",
        en: "Barista & Cashier (Part-Time)"
      },
      company: "Kopi Gudang",
      location: "Jakarta, Indonesia",
      period: {
        id: "Jan 2024 – Mar 2024",
        en: "Jan 2024 – Mar 2024"
      },
      type: {
        id: "Paruh Waktu",
        en: "Part-Time"
      },
      tags: ["Customer Service", "Teamwork", "Cash Handling"],
      summary: {
        id: "Pelayanan pelanggan ramah, peracikan minuman di jam ramai, dan koordinasi shift.",
        en: "Welcoming customer service, rapid drink preparation during rushes, and shift teamwork."
      },
      bullets: {
        id: [
          "Menyapa dan melayani pesanan pelanggan dengan ramah serta informatif di kasir.",
          "Meracik pesanan minuman secara tepat dan konsisten pada jam sibuk kedai.",
          "Bekerja sama solid dengan tim shift untuk menjaga kebersihan meja dan kepuasan pengunjung."
        ],
        en: [
          "Welcomed guests and processed orders accurately with friendly, attentive communication.",
          "Prepared drinks consistently and maintained fast turnaround during peak store hours.",
          "Coordinated closely with shift partners to keep dining tables clean and guests satisfied."
        ]
      }
    }
  ],

  education: {
    institution: "UIN Syarif Hidayatullah Jakarta",
    location: "Tangerang Selatan, Banten, Indonesia",
    period: "2021 – 2025",
    degree: {
      id: "S1 Pengembangan Masyarakat Islam (S.Sos)",
      en: "Bachelor of Social Sciences (S.Sos) – Community Development"
    },
    gpa: "3.64 / 4.00",
    honors: {
      id: "Predikat Cum Laude",
      en: "Distinction / Cum Laude"
    },
    focus: {
      id: "Pemberdayaan sosial, komunikasi partisipatif, riset lapangan, dan pemetaan kebutuhan masyarakat.",
      en: "Community empowerment, participatory communication, field research, and social needs assessment."
    },
    highlights: {
      id: [
        "Lulus tepat waktu dengan IPK 3.64 (Cum Laude).",
        "Aktif dalam riset dan program observasi lapangan bersama masyarakat.",
        "Menyeimbangkan studi akademis dengan magang kementerian dan kerja praktis."
      ],
      en: [
        "Graduated on schedule with a 3.64/4.00 GPA (Cum Laude).",
        "Participated in field research and grassroots community observation programs.",
        "Balanced rigorous academic studies alongside ministerial internship and practical jobs."
      ]
    }
  },

  skills: {
    categories: [
      {
        id: "hard-skills",
        title: { id: "Aplikasi & Alat Kerja", en: "Digital Tools & Systems" },
        items: [
          { name: "Shopee Seller Centre", level: "Mahir", badge: "Marketplace" },
          { name: "TikTok Shop Seller Center", level: "Mahir", badge: "Marketplace" },
          { name: "WhatsApp Business CRM", level: "Mahir", badge: "Customer Care" },
          { name: "Microsoft Word & PPT", level: "Lanjut", badge: "Dokumentasi" },
          { name: "Google Docs & Drive", level: "Lanjut", badge: "Kolaborasi" },
          { name: "Google Forms", level: "Mahir", badge: "Data" },
          { name: "Canva Design", level: "Menengah", badge: "Media" },
          { name: "Google Meet & Zoom", level: "Mahir", badge: "Koordinasi" }
        ]
      },
      {
        id: "soft-skills",
        title: { id: "Karakter Kerja", en: "Core Strengths" },
        items: [
          { name: { id: "Adaptabilitas Cepat", en: "Fast Adaptability" }, badge: { id: "Lintas Industri", en: "Cross-Industry" } },
          { name: { id: "Ketelitian Tinggi", en: "Meticulous Detail" }, badge: { id: "Audit & Stok", en: "Audit & Stock" } },
          { name: { id: "Komunikasi & Empati", en: "Empathetic Dialogue" }, badge: { id: "Customer Care", en: "Customer Care" } },
          { name: { id: "Manajemen Waktu", en: "Time Management" }, badge: { id: "Disiplin Shift", en: "Shift Discipline" } },
          { name: { id: "Kerja Sama Tim", en: "Team Collaboration" }, badge: { id: "Kolaboratif", en: "Collaborative" } },
          { name: { id: "Problem Solving", en: "Problem Solving" }, badge: { id: "Cepat Tanggap", en: "Responsive" } }
        ]
      },
      {
        id: "operational-domains",
        title: { id: "Domain Operasional", en: "Operational Domains" },
        items: [
          { name: { id: "Laporan Penjualan Harian", en: "Daily Sales Reporting" }, icon: "📊" },
          { name: { id: "Stock Opname & Kontrol Wastage", en: "Stock Opname & Waste Control" }, icon: "📦" },
          { name: { id: "Administrasi Persuratan Resmi", en: "Official Correspondence" }, icon: "📂" },
          { name: { id: "Layanan Pelanggan Multi-Kanal", en: "Multi-Channel Customer Care" }, icon: "💬" },
          { name: { id: "Validasi Data & Logistik Bantuan", en: "Data Auditing & Relief Logistics" }, icon: "🤝" }
        ]
      }
    ]
  },

  caseStudies: [
    {
      id: "marketplace-ops",
      title: {
        id: "SOP Pelayanan & Alur Pesanan Multi-Kanal (Batavia Uniform)",
        en: "Multi-Channel Order & Support Workflow (Batavia Uniform)"
      },
      context: {
        id: "Mengelola toko online seragam di Shopee, TikTok Shop, dan WhatsApp dengan volume chat harian tinggi.",
        en: "Managing uniform online store on Shopee, TikTok Shop, and WhatsApp with high daily inquiries."
      },
      actions: {
        id: [
          "Membuat panduan quick-reply informatif seputar ukuran, bahan kain, dan estimasi kirim.",
          "Menjalankan alur terstruktur: verifikasi pesanan, QC fisik seragam, cetak resi, hingga serah terima kurir."
        ],
        en: [
          "Developed clear quick replies for sizing, fabric specs, and shipping timelines.",
          "Implemented a structured checklist: order verification, physical QC, waybill printing, and courier handover."
        ]
      },
      outcome: {
        id: "SLA respon chat terjaga cepat, komplain retur minim, dan rating toko stabil bintang 5.",
        en: "Chat SLA remained fast, return disputes were minimized, and store ratings stayed 5-star."
      }
    },
    {
      id: "kemensos-data",
      title: {
        id: "Verifikasi Data Korban Bencana & Distribusi Surat (Kemensos RI)",
        en: "Disaster Victim Data Verification & Archiving (Kemensos RI)"
      },
      context: {
        id: "Mendukung percepatan arus data situasi bencana alam nasional di Ditjen PSKBA Kemensos RI.",
        en: "Supporting national disaster casualty data verification at Ditjen PSKBA Kemensos RI."
      },
      actions: {
        id: [
          "Cross-check data korban bencana dari dinas sosial daerah untuk eliminasi duplikasi data logistik.",
          "Mencatat registrasi dan mendisposisikan surat permohonan bantuan darurat ke meja Direktur terkait."
        ],
        en: [
          "Cross-checked regional disaster logs to eliminate duplicates and quantify emergency relief needs.",
          "Registered, indexed, and dispatched emergency assistance correspondence to relevant Directors."
        ]
      },
      outcome: {
        id: "Data situasi bencana tercatat rapi dan siap diakses pimpinan untuk penyaluran bantuan.",
        en: "Situational data was cleanly indexed and readily accessible for emergency aid distribution."
      }
    },
    {
      id: "cafe-inventory",
      title: {
        id: "Stock Opname & Disiplin Bar (Loopline Coffee)",
        en: "Stock Opname & Bar Hygiene Discipline (Loopline Coffee)"
      },
      context: {
        id: "Menjaga stabilitas margin dan kebersihan kedai kopi dengan perputaran bahan baku harian yang cepat.",
        en: "Safeguarding inventory margins and sanitation compliance in a high-turnover coffee shop."
      },
      actions: {
        id: [
          "Menghitung fisik biji kopi, susu, dan sirup per shift serta mencocokkannya dengan laporan kasir POS.",
          "Menerapkan prinsip rotasi FIFO pada bahan baku dan pembersihan mesin espresso secara berkala."
        ],
        en: [
          "Audited physical stock of coffee beans, milk, and syrups per shift against POS sales logs.",
          "Enforced FIFO stock rotation and conducted routine cleaning of espresso equipment."
        ]
      },
      outcome: {
        id: "Selisih inventaris ditekan mendekati nol dan standar kebersihan bar selalu lolos audit.",
        en: "Inventory shrinkage was reduced to near-zero and bar sanitation reliably passed audit checks."
      }
    }
  ]
};
