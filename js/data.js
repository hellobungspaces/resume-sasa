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
    photo: "assets/saida-profile.jpg?v=2",
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
        value: "4.9★",
        label: { id: "Rating Toko Terjaga", en: "Store Rating Maintained" },
        sub: { id: "Ulasan Bintang 5 Batavia Uniform", en: "5-Star Store Reviews" }
      },
      {
        value: "< 15 Mnt",
        label: { id: "Kecepatan Respon Chat", en: "Fast Chat Response" },
        sub: { id: "Konsultasi Ukuran & Retur Cepat", en: "Fast Sizing & Return Support" }
      },
      {
        value: "0%",
        label: { id: "Selisih Stok Toko", en: "Stock Discrepancy" },
        sub: { id: "Audit Fisik & Pencatatan Akurat", en: "Accurate Physical Audit & FIFO" }
      },
      {
        value: "3.64",
        label: { id: "IPK / 4.00 (Cum Laude)", en: "GPA / 4.00 (Cum Laude)" },
        sub: { id: "UIN Syarif Hidayatullah", en: "UIN Syarif Hidayatullah" }
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
          "Handled customer sizing inquiries and return requests via WhatsApp with fast, friendly service.",
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
          "Prepared 50+ beverages daily while maintaining consistent quality and fast service.",
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
        en: "Audited disaster casualty records and processed official correspondence at Ditjen PSKBA."
      },
      bullets: {
        id: [
          "Memvalidasi dan mengelompokkan data korban bencana alam daerah untuk verifikasi bantuan logistik.",
          "Mencatat registrasi dan mendisposisikan surat dinas masuk kepada jajaran Direktur terkait.",
          "Menjaga kerahasiaan dan akurasi data situasi kebencanaan nasional dalam ritme kerja cepat tanggap."
        ],
        en: [
          "Audited and classified regional casualty/displacement records to verify relief allocations.",
          "Registered, categorized, and forwarded incoming official correspondence to related Directors.",
          "Maintained data accuracy and strict confidentiality during emergency response workflows."
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
          { name: "Shopee Seller Centre", level: "Mahir", badge: "Marketplace", iconKey: "shopee" },
          { name: "TikTok Shop Seller Center", level: "Mahir", badge: "Marketplace", iconKey: "tiktok" },
          { name: "WhatsApp Business CRM", level: "Mahir", badge: "Customer Care", iconKey: "whatsapp" },
          { name: "Microsoft Excel & Google Sheets", level: "Mahir", badge: "Spreadsheet", iconKey: "excel" },
          { name: "Sistem Kasir POS & Barcode", level: "Mahir", badge: "POS Retail", iconKey: "pos" },
          { name: "Microsoft Word & Dokumen", level: "Lanjut", badge: "Dokumentasi", iconKey: "docs" },
          { name: "Google Drive & Workspace", level: "Lanjut", badge: "Kolaborasi", iconKey: "drive" },
          { name: "Google Forms", level: "Mahir", badge: "Data Survey", iconKey: "forms" },
          { name: "Canva Design", level: "Menengah", badge: "Visual Media", iconKey: "canva" }
        ]
      },
      {
        id: "soft-skills",
        title: { id: "Karakter Kerja", en: "Core Strengths" },
        items: [
          { name: { id: "Adaptabilitas Cepat", en: "Fast Adaptability" }, badge: { id: "Lintas Industri", en: "Cross-Industry" }, iconKey: "adaptability" },
          { name: { id: "Ketelitian Tinggi", en: "Meticulous Detail" }, badge: { id: "Audit & Stok", en: "Audit & Stock" }, iconKey: "precision" },
          { name: { id: "Komunikasi & Empati", en: "Empathetic Dialogue" }, badge: { id: "Customer Care", en: "Customer Care" }, iconKey: "communication" },
          { name: { id: "Manajemen Waktu", en: "Time Management" }, badge: { id: "Disiplin Shift", en: "Shift Discipline" }, iconKey: "timeManagement" },
          { name: { id: "Kerja Sama Tim", en: "Team Collaboration" }, badge: { id: "Kolaboratif", en: "Collaborative" }, iconKey: "teamwork" },
          { name: { id: "Problem Solving", en: "Problem Solving" }, badge: { id: "Cepat Tanggap", en: "Responsive" }, iconKey: "problemSolving" }
        ]
      },
      {
        id: "operational-domains",
        title: { id: "Domain Operasional", en: "Operational Domains" },
        items: [
          { name: { id: "Laporan Penjualan Harian", en: "Daily Sales Reporting" }, iconKey: "salesReport" },
          { name: { id: "Stock Opname & Kontrol Wastage", en: "Stock Opname & Waste Control" }, iconKey: "stockOpname" },
          { name: { id: "Administrasi Persuratan Resmi", en: "Official Correspondence" }, iconKey: "correspondence" },
          { name: { id: "Layanan Pelanggan Multi-Kanal", en: "Multi-Channel Customer Care" }, iconKey: "customerCare" },
          { name: { id: "Validasi Data & Logistik Bantuan", en: "Data Auditing & Relief Logistics" }, iconKey: "dataAuditing" }
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
        id: "Mengoptimalkan operasional toko seragam di Shopee, TikTok Shop, dan WhatsApp dengan volume chat harian tinggi.",
        en: "Optimizing uniform storefront operations on Shopee, TikTok Shop, and WhatsApp under high inquiry volumes."
      },
      actions: {
        id: [
          "Menyusun template quick-reply informatif seputar panduan ukuran, spesifikasi bahan kain, dan estimasi waktu kirim.",
          "Menerapkan alur checklist harian: verifikasi pesanan baru, cetak resi, QC fisik seragam, hingga serah terima kurir ekspedisi.",
          "Melakukan follow-up ramah dan berkala kepada calon pembeli yang telah berkonsultasi namun belum menyelesaikan pembayaran.",
          "Mencatat komplain penukaran ukuran secara detail untuk mempercepat proses retur dan mencegah ulasan negatif bintang 1-2."
        ],
        en: [
          "Developed clear quick replies covering sizing charts, fabric specifications, and shipping estimates.",
          "Implemented a daily checklist: incoming order verification, waybill printing, garment QC, and courier handovers.",
          "Conducted friendly follow-ups with shoppers who consulted regarding sizing but had not completed payment.",
          "Logged sizing exchange complaints methodically to expedite returns and prevent negative 1-2 star reviews."
        ]
      },
      outcome: {
        id: "Respon chat terjaga cepat, komplain retur teratasi dengan ramah, dan rating toko stabil bintang 5.",
        en: "Chat response remained swift, return complaints were resolved smoothly, and store rating held at 5 stars."
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
          "Melakukan cross-check data korban bencana alam daerah untuk eliminasi duplikasi dan estimasi kebutuhan logistik.",
          "Mencatat registrasi agenda dan mendisposisikan surat permohonan bantuan darurat dari pemda ke meja Direktur terkait.",
          "Menjaga kerahasiaan dan integritas data masyarakat terdampak bencana selama proses verifikasi berlangsung."
        ],
        en: [
          "Cross-checked regional disaster casualty datasets to eliminate duplicates and estimate relief supplies.",
          "Registered, categorized, and forwarded emergency aid requests from regional governments to relevant Directors.",
          "Upheld strict confidentiality and integrity of affected population data throughout verification."
        ]
      },
      outcome: {
        id: "Data situasi bencana tercatat rapi dan siap diakses pimpinan untuk dasar penyaluran bantuan darurat.",
        en: "Situational data was cleanly indexed and readily accessible for leadership relief deployments."
      }
    },
    {
      id: "cafe-inventory",
      title: {
        id: "Stock Opname & Disiplin Bar (Loopline Coffee)",
        en: "Inventory Audit (Stock Opname) & Shift Discipline (Loopline Coffee)"
      },
      context: {
        id: "Menjaga stabilitas margin dan kebersihan kedai kopi dengan perputaran bahan baku harian yang cepat.",
        en: "Safeguarding inventory margins and sanitation compliance in a high-turnover coffee shop."
      },
      actions: {
        id: [
          "Menghitung fisik biji kopi (beans), susu fresh milk, dan sirup per shift serta mencocokkannya dengan laporan kasir POS.",
          "Menerapkan prinsip rotasi FIFO (First In, First Out) pada penyimpanan bahan baku dan susu untuk mencegah kedaluwarsa.",
          "Menjalankan prosedur deep cleaning mesin espresso dan grinder secara berkala untuk menjaga konsistensi rasa seduhan."
        ],
        en: [
          "Audited physical inventory of coffee beans, fresh milk, and syrups per shift against POS sales logs.",
          "Enforced FIFO (First In, First Out) storage rotation to prevent dairy and perishable spoilage.",
          "Conducted scheduled deep cleaning of espresso machines and grinder burrs to maintain flavor consistency."
        ]
      },
      outcome: {
        id: "Tingkat selisih inventaris berhasil ditekan mendekati nol dan standar kebersihan bar selalu lolos audit.",
        en: "Stock discrepancies were kept at zero and bar hygiene reliably passed audit inspections."
      }
    }
  ],

  sopPipeline: [
    {
      step: "01",
      iconKey: "orderIntake",
      title: {
        id: "Verifikasi & Alur Masuk Pesanan",
        en: "Order Ingestion & Verification"
      },
      tag: {
        id: "Shopee & TikTok Seller Center",
        en: "Shopee & TikTok Seller Center"
      },
      metric: {
        id: "0 Kesalahan Varian",
        en: "Zero Variant Errors"
      },
      desc: {
        id: "Memantau dashboard seller real-time, memvalidasi detail ukuran/warna, dan mencocokkan stok fisik sebelum resi dicetak.",
        en: "Monitoring real-time seller dashboards, verifying sizing/color details, and confirming physical stock before printing waybills."
      }
    },
    {
      step: "02",
      iconKey: "chatSpeed",
      title: {
        id: "Respon Chat & Panduan Ukuran",
        en: "Fast Chat Response & Sizing"
      },
      tag: {
        id: "WhatsApp Business CRM",
        en: "WhatsApp Business CRM"
      },
      metric: {
        id: "< 15 Menit Respon",
        en: "< 15 Min Response"
      },
      desc: {
        id: "Merespon calon pembeli dengan template quick-reply informatif, konsultasi ukuran akurat, dan follow-up ramah transaksi tertunda.",
        en: "Answering buyer inquiries with informative quick replies, accurate size consultation, and polite follow-ups for pending carts."
      }
    },
    {
      step: "03",
      iconKey: "fulfillment",
      title: {
        id: "QC Fisik & Serah Terima Kurir",
        en: "Garment QC & Courier Dispatch"
      },
      tag: {
        id: "Fulfillment & Packaging",
        en: "Fulfillment & Packaging"
      },
      metric: {
        id: "100% Lolos Inspeksi",
        en: "100% Inspection Pass"
      },
      desc: {
        id: "Pengecekan jahitan & kerapian seragam, packing aman berlapis, cetak resi thermal barcode, dan handover kurir tepat waktu.",
        en: "Inspecting seams and fabric quality, secure polymailer packaging, thermal barcode printing, and punctual courier handovers."
      }
    },
    {
      step: "04",
      iconKey: "ratingCare",
      title: {
        id: "After-Sales & Proteksi Rating",
        en: "After-Sales & Rating Care"
      },
      tag: {
        id: "Customer Satisfaction",
        en: "Customer Satisfaction"
      },
      metric: {
        id: "Rating 4.9★ Terjaga",
        en: "4.9★ Rating Held"
      },
      desc: {
        id: "Monitoring tracking kiriman ekspedisi, penanganan retur ramah tanpa debat, dan pencegahan ulasan negatif bintang 1-2.",
        en: "Monitoring in-transit packages, managing exchange requests calmly without dispute, and safeguarding against 1-2 star reviews."
      }
    }
  ],

  recruiterFaq: [
    {
      q: {
        id: "Kapan Saida siap mulai bekerja (Notice Period)?",
        en: "When is Saida available to start (Notice Period)?"
      },
      a: {
        id: "Memiliki notice period 1 bulan (One Month Notice) dari pekerjaan saat ini di Batavia Uniform. Seluruh berkas administrasi seperti Ijazah S1 UIN Jakarta, Transkrip Nilai (IPK 3.64), KTP, dan portofolio kerja sudah lengkap sehingga proses administrasi kontrak dan onboarding bisa dipersiapkan dengan lancar.",
        en: "Currently on a 1-month notice period (One Month Notice) at Batavia Uniform. All onboarding documents including Bachelor's Degree certificate from UIN Jakarta, academic transcript (GPA 3.64), ID card, and verified portfolio are ready so contract preparation and transition planning can proceed smoothly."
      }
    },
    {
      q: {
        id: "Bagaimana dengan sistem kerja dan fleksibilitas lokasi?",
        en: "What is your work arrangement and location mobility?"
      },
      a: {
        id: "Berdomisili di Jakarta Timur dan sangat terbuka untuk kerja WFO (Onsite) maupun Hybrid di seluruh area Jabodetabek (Jakarta Pusat, Selatan, Timur, Barat, Utara, serta Tangerang dan Bekasi) dengan akses transportasi yang lancar.",
        en: "Based in East Jakarta and fully open to Onsite (WFO) or Hybrid roles across the Greater Jakarta area (Jabodetabek) with reliable commuting mobility."
      }
    },
    {
      q: {
        id: "Apakah siap bekerja dalam sistem shift atau campaign lembur marketplace?",
        en: "Are you comfortable with shift schedules and marketplace campaign surges?"
      },
      a: {
        id: "Sangat siap. Memiliki pengalaman ritme kerja dinamis dan disiplin shift di Batavia Uniform maupun hospitality retail (Loopline Coffee), termasuk kesiapan menjaga kecepatan proses pesanan saat event promo tanggal kembar (Double-Date & Payday Sale).",
        en: "Fully prepared. Experienced in high-volume, dynamic environments from e-commerce (Batavia Uniform) to retail hospitality (Loopline Coffee), including handling surges during monthly double-date and payday promotional campaigns."
      }
    },
    {
      q: {
        id: "Platform dan software apa saja yang dikuasai secara aktif?",
        en: "Which software platforms and operational tools do you master?"
      },
      a: {
        id: "Shopee Seller Centre, TikTok Shop Seller Center, WhatsApp Business CRM, Microsoft Excel & Google Sheets (VLOOKUP, Pivot, formula logika, pencatatan rapi), Sistem Kasir POS, serta audit inventaris fisik dengan sistem FIFO.",
        en: "Shopee Seller Centre, TikTok Shop Seller Center, WhatsApp Business CRM, Microsoft Excel & Google Sheets (VLOOKUP, Pivot tables, data entry), POS cashier systems, and physical stock inventory audits using FIFO."
      }
    }
  ]
};
