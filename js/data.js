// Bilingual Data Model (Indonesian & English) for Saida Zakiyah Portfolio
// Adheres strictly to Anti-Slop principles: honest, precise, zero generic AI clichés.

export const portfolioData = {
  profile: {
    name: "Saida Zakiyah",
    title: {
      id: "Spesialis Operasional Marketplace, Administrasi Publik & Layanan Pelanggan",
      en: "Marketplace Operations, Public Administration & Customer Support Specialist"
    },
    subtitle: {
      id: "Lulusan Pengembangan Masyarakat Islam UIN Jakarta (IPK 3.64/4.00) dengan rekam jejak praktis di operasional e-commerce, administrasi data kebencanaan Kemensos RI, dan manajemen inventaris.",
      en: "Islamic Community Development graduate from UIN Jakarta (GPA 3.64/4.00) with proven experience in e-commerce operations, disaster data administration at Kemensos RI, and inventory management."
    },
    bio: {
      id: "Spesialis operasional marketplace dan administrasi publik lulusan UIN Jakarta (IPK 3.64). Berpengalaman mengelola toko multi-kanal di Batavia Uniform, verifikasi data kebencanaan Kemensos RI, dan disiplin audit inventaris.",
      en: "Marketplace operations and public administration specialist graduated from UIN Jakarta (GPA 3.64). Experienced in multi-channel e-commerce at Batavia Uniform, disaster data verification at Kemensos RI, and inventory audit discipline."
    },
    photo: "assets/saida-profile.jpg",
    statusBadge: {
      id: "Siap Bergabung Segera · Full-Time / Kontrak",
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
        id: "Jl. Bojong Indah 1 No. 56, Kel. Pondok Kelapa, Kec. Duren Sawit, Jakarta Timur, DKI Jakarta",
        en: "Jl. Bojong Indah 1 No. 56, Pondok Kelapa, Duren Sawit, East Jakarta, Indonesia"
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
        label: { id: "Kanal Marketplace Dikelola", en: "Active Channels Managed" },
        sub: { id: "Shopee, TikTok Shop, WhatsApp", en: "Shopee, TikTok Shop, WhatsApp" }
      },
      {
        value: "100%",
        label: { id: "Ketertiban Stock Opname", en: "Inventory Audit Compliance" },
        sub: { id: "Loopline & Batavia Uniform", en: "Loopline & Batavia Uniform" }
      },
      {
        value: "4+",
        label: { id: "Bulan di Kemensos RI", en: "Months at Ministry of Social Affairs" },
        sub: { id: "Ditjen PSKBA Bencana Alam", en: "Disaster Social Protection Dept." }
      }
    ]
  },

  experiences: [
    {
      id: "batavia-uniform",
      role: {
        id: "Admin Marketplace & Customer Service",
        en: "Marketplace Operations & Customer Service Admin"
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
      tags: ["Shopee", "TikTok Shop", "WhatsApp CRM", "Stock Control", "Daily Sales Reporting"],
      summary: {
        id: "Bertanggung jawab penuh atas kelancaran operasional toko online di berbagai channel marketplace, alur pemenuhan pesanan, retur barang, kepuasan pembeli, dan laporan keuangan harian.",
        en: "Fully responsible for multi-channel e-commerce storefront operations, end-to-end order fulfillment, return logistics, buyer satisfaction, and daily reconciliation reports."
      },
      bullets: {
        id: [
          "Merespon pesan pelanggan secara cepat dan komunikatif di Shopee, TikTok Shop, dan WhatsApp untuk meningkatkan rasio konversi konsultasi ke pesanan.",
          "Memproses alur pemesanan harian, update stok berkala, sinkronisasi katalog harga, serta memastikan varian produk seragam terdaftar dengan akurat.",
          "Menangani komplain pelanggan, penukaran ukuran seragam, dan alur retur dengan solusi yang mengutamakan kepuasan pelanggan tanpa merugikan toko.",
          "Memantau kesehatan toko marketplace: chat response rate, ulasan produk bintang 5, kecepatan pengemasan, dan pencegahan penalti toko.",
          "Menyusun rekapitulasi laporan penjualan harian untuk evaluasi tren produk terlaris dan perencanaan pengadaan bahan seragam berikutnya."
        ],
        en: [
          "Responded promptly and empathetically to buyer inquiries on Shopee, TikTok Shop, and WhatsApp, boosting consultation-to-purchase conversion rates.",
          "Managed end-to-end daily order processing, live stock updates, price catalog synchronization, and accurate sizing variant listings.",
          "Handled customer complaints, size exchange requests, and return workflows professionally, safeguarding store reputation and buyer goodwill.",
          "Actively monitored marketplace health KPIs: chat response rates, 5-star customer reviews, fulfillment speed, and penalty point prevention.",
          "Prepared daily sales summary reports to identify top-selling items and assist with procurement planning for uniform inventory."
        ]
      }
    },
    {
      id: "loopline-coffee",
      role: {
        id: "Barista - Full Time",
        en: "Barista & Bar Operations - Full Time"
      },
      company: "Loopline Coffee",
      location: "Bekasi, Jawa Barat",
      period: {
        id: "Sep 2025 – Okt 2025",
        en: "Sep 2025 – Oct 2025"
      },
      type: {
        id: "Penuh Waktu",
        en: "Full-Time"
      },
      tags: ["Specialty Coffee", "Stock Opname", "Inventory Control", "Food Safety & Hygiene"],
      summary: {
        id: "Mengelola stasiun bar espresso, menjaga konsistensi kalibrasi rasa kopi, serta melakukan audit stok harian untuk efisiensi inventaris bahan baku.",
        en: "Managed the espresso bar station, maintained drink recipe consistency, and conducted routine stock audits to eliminate ingredient wastage."
      },
      bullets: {
        id: [
          "Memproduksi aneka minuman kopi dan sajian pendukung sesuai SOP rasa, takaran bahan, dan standar estetika penyajian.",
          "Melaksanakan stock opname rutin untuk memastikan ketersediaan bahan baku kopi, susu, dan sirup serta mencegah selisih stok.",
          "Mengontrol penggunaan bahan agar meminimalisir pemborosan (wastage) dan menjaga margin operasional outlet.",
          "Menjaga kebersihan dan sanitasi mesin kopi espresso, grinder, dan perlengkapan bar demi kenyamanan pelanggan dan kepatuhan standar F&B."
        ],
        en: [
          "Handled specialty espresso brewing and drink preparation adhering to exact flavor parameters, measurements, and presentation aesthetics.",
          "Conducted periodic stock opnames to monitor dairy, bean, and syrup inventory, preventing stockouts and shrinkage.",
          "Enforced portion control to minimize ingredient wastage and preserve store gross margins.",
          "Upheld stringent hygiene and sanitation procedures across coffee machinery, prep tools, and bar areas."
        ]
      }
    },
    {
      id: "kemensos-ri",
      role: {
        id: "Magang Administrasi & Data Korban Bencana Alam",
        en: "Disaster Data & Administration Intern"
      },
      company: "Kementerian Sosial Republik Indonesia (Kemensos RI)",
      location: "Salemba, Jakarta Pusat",
      period: {
        id: "Mar 2024 – Jun 2024",
        en: "Mar 2024 – Jun 2024"
      },
      type: {
        id: "Magang Resmi",
        en: "Official Internship"
      },
      tags: ["Data Verification", "Bencana Alam (PSKBA)", "Surat Dinas", "Sistem Informasi Sosial"],
      summary: {
        id: "Bertugas di Direktorat Jenderal Perlindungan Sosial Korban Bencana Alam (Ditjen PSKBA) dalam verifikasi data korban bencana dan tata kelola persuratan pimpinan.",
        en: "Served under the Directorate General of Social Protection for Natural Disaster Victims (Ditjen PSKBA) auditing disaster victim logs and executive correspondence."
      },
      bullets: {
        id: [
          "Memeriksa, memvalidasi, dan mengelompokkan data korban bencana alam nasional berdasarkan wilayah, jenis bencana, kelompok rentan, dan kebutuhan logistik mendesak.",
          "Menghimpun laporan situasi terkini (sitrep) dari posko darurat daerah untuk bahan koordinasi penyaluran bantuan sosial tepat sasaran.",
          "Melakukan pencatatan, registrasi agenda, dan disposisi arsip untuk seluruh surat dinas masuk yang ditujukan kepada Dirjen, Sekretaris Ditjen, dan Direktur di Ditjen PSKBA.",
          "Bekerja dalam ritme cepat tanggap bencana dengan akurasi pencatatan data yang dapat dipertanggungjawabkan kepada pemangku kepentingan."
        ],
        en: [
          "Audited, cross-referenced, and classified national disaster victim datasets based on geography, disaster category, vulnerable demographics, and urgent relief needs.",
          "Synthesized real-time regional field situation reports (sitreps) to support prompt and targeted social aid allocation.",
          "Administered systematic logging, registration, and archiving for official incoming correspondence directed to the Director General, Ditjen Secretary, and Division Directors.",
          "Thrived in an emergency response cadence where high data fidelity was vital for ministerial decision-making."
        ]
      }
    },
    {
      id: "kopi-gudang",
      role: {
        id: "Barista - Part Time",
        en: "Barista & Service - Part Time"
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
      tags: ["Hospitality", "Customer Service", "Speed of Service", "Team Collaboration"],
      summary: {
        id: "Melayani pelanggan, meracik minuman dengan cepat di jam sibuk, serta bekerja solid bersama rekan tim untuk menjaga suasana kedai yang menyenangkan.",
        en: "Delivered friendly customer service, fulfilled orders during peak rushes, and collaborated closely with team members to ensure customer satisfaction."
      },
      bullets: {
        id: [
          "Menyapa dan melayani pelanggan dengan ramah, informatif, dan profesional saat merekomendasikan menu.",
          "Memproses pesanan minuman dengan cermat dan tepat waktu pada jam ramai pelanggan.",
          "Menjaga kerapian meja saji dan kebersihan lingkungan kerja secara konsisten.",
          "Bekerja sama erat dengan tim shift untuk menciptakan pengalaman bersantap yang positif bagi pengunjung."
        ],
        en: [
          "Welcomed guests with warmth and provided clear recommendations tailored to their taste preferences.",
          "Prepared and fulfilled beverage orders accurately under tight turnaround times during peak hours.",
          "Maintained seating area tidiness and beverage preparation cleanliness throughout shifts.",
          "Collaborated proactively with the shift team to ensure a delightful customer experience."
        ]
      }
    }
  ],

  education: {
    institution: "Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta",
    location: "Tangerang Selatan, Banten, Indonesia",
    period: "Sep 2021 – Jul 2025",
    degree: {
      id: "Sarjana Sosial (S.Sos) – Program Studi Pengembangan Masyarakat Islam",
      en: "Bachelor of Social Sciences (S.Sos) – Islamic Community Development"
    },
    gpa: "3.64 / 4.00",
    honors: {
      id: "Predikat Sangat Memuaskan (Cum Laude)",
      en: "Distinction / Cum Laude Standing"
    },
    focus: {
      id: "Berfokus pada metode pemberdayaan masyarakat, komunikasi sosial, pemetaan kebutuhan lapangan (need assessment), pembangunan partisipatif, serta analisis masalah sosial berbasis kemanusiaan dan keislaman.",
      en: "Focused on community empowerment methodologies, social communication, field-based needs assessments, participatory development, and ethical community intervention models."
    },
    highlights: {
      id: [
        "Aktif dalam berbagai program turun lapangan (fieldwork) untuk observasi dan pemberdayaan masyarakat.",
        "Mengembangkan kemampuan komunikasi interpersonal, wawancara mendalam, dan kerja kelompok lintas latar belakang.",
        "Menyelesaikan studi tepat waktu dengan mempertahankan IPK tinggi 3.64/4.00 sembari aktif berorganisasi dan magang."
      ],
      en: [
        "Active in extensive community field expeditions conducting grassroots social research and needs mapping.",
        "Honed empathetic interpersonal dialogue, field interviewing, and cross-functional team coordination.",
        "Graduated on schedule while maintaining a high 3.64/4.00 GPA alongside official internships and part-time work."
      ]
    }
  },

  skills: {
    categories: [
      {
        id: "hard-skills",
        title: { id: "Keahlian Teknis & Aplikasi", en: "Hard Skills & Digital Tools" },
        items: [
          { name: "Shopee Seller Centre", level: "Mahir", badge: "Marketplace" },
          { name: "TikTok Shop Seller Center", level: "Mahir", badge: "Marketplace" },
          { name: "WhatsApp Business CRM", level: "Mahir", badge: "Customer Care" },
          { name: "Microsoft Word", level: "Tingkat Lanjut", badge: "Dokumentasi" },
          { name: "Microsoft PowerPoint", level: "Tingkat Lanjut", badge: "Presentasi" },
          { name: "Google Docs & Drive", level: "Tingkat Lanjut", badge: "Kolaborasi" },
          { name: "Google Forms", level: "Mahir", badge: "Survei & Data" },
          { name: "Canva Design", level: "Menengah / Kreatif", badge: "Visual Media" },
          { name: "Google Meet & Zoom", level: "Mahir", badge: "Koordinasi Online" }
        ]
      },
      {
        id: "soft-skills",
        title: { id: "Karakter Kerja & Keterampilan Interpersonal", en: "Interpersonal & Work Ethic" },
        items: [
          { name: { id: "Adaptabilitas Cepat", en: "High Adaptability" }, desc: { id: "Cepat menyesuaikan diri dengan lingkungan baru (pemerintahan, toko retail, kedai F&B).", en: "Swift adjustment across government, retail e-commerce, and busy F&B environments." } },
          { name: { id: "Kerja Sama Tim", en: "Team Collaboration" }, desc: { id: "Berkomunikasi harmonis dan saling mendukung pencapaian target shift.", en: "Supportive cross-functional communication to achieve shift milestones." } },
          { name: { id: "Manajemen Waktu & Disiplin", en: "Time Management & Discipline" }, desc: { id: "Terbiasa membagi prioritas kerja, tertib jadwal, dan tepat waktu dalam pelaporan.", en: "Structured priority setting, punctual attendance, and timely reporting." } },
          { name: { id: "Ketelitian Tinggi (Detail-Oriented)", en: "Meticulous Attention to Detail" }, desc: { id: "Teliti dalam verifikasi data korban bencana, update stok produk, dan kas harian.", en: "Rigorous accuracy in disaster data checks, stock counts, and daily cash logs." } },
          { name: { id: "Problem Solving Praktis", en: "Practical Problem Solving" }, desc: { id: "Tanggap menangani komplain pembeli dan kendala operasional dengan kepala dingin.", en: "Calm, constructive resolution of customer disputes and operational hurdles." } },
          { name: { id: "Komunikasi Efektif & Empati", en: "Empathetic Communication" }, desc: { id: "Gaya bertutur ramah dan persuasif yang didasari latar belakang pengembangan masyarakat.", en: "Warm, respectful, and articulate manner rooted in community development training." } }
        ]
      },
      {
        id: "operational-domains",
        title: { id: "Domain Operasional Lapangan", en: "Operational Domains" },
        items: [
          { name: { id: "Laporan Penjualan Harian", en: "Daily Sales Reporting" }, icon: "📊" },
          { name: { id: "Stock Opname & Kontrol Wastage", en: "Stock Opname & Wastage Control" }, icon: "📦" },
          { name: { id: "Administrasi Persuratan Resmi", en: "Official Correspondence Archiving" }, icon: "📂" },
          { name: { id: "Layanan Pelanggan Multi-Kanal", en: "Multi-Channel Customer Service" }, icon: "💬" },
          { name: { id: "Pendataan Bencana & Bantuan Sosial", en: "Disaster Data & Social Aid Logistics" }, icon: "🤝" }
        ]
      }
    ]
  },

  caseStudies: [
    {
      id: "marketplace-ops",
      title: {
        id: "Optimalisasi Penanganan Chat & Rekonsiliasi Pesanan Marketplace (Batavia Uniform)",
        en: "Marketplace Chat SLA & Order Fulfillment Workflow (Batavia Uniform)"
      },
      context: {
        id: "Mengelola toko online di Shopee, TikTok Shop, dan WhatsApp dengan ratusan interaksi pelanggan seragam setiap minggu.",
        en: "Operating uniform e-commerce storefronts across Shopee, TikTok Shop, and WhatsApp handling heavy weekly customer inquiries."
      },
      actions: {
        id: [
          "Menyusun template jawaban cepat (quick replies) yang informatif untuk pertanyaan umum seputar ukuran, bahan kain, dan estimasi kirim tanpa terkesan seperti bot otomatis.",
          "Membuat checklist harian mulai dari verifikasi pesanan baru, cetak resi, pengecekan fisik seragam, hingga penyerahan ke kurir ekspedisi.",
          "Menerapkan sistem follow-up ramah untuk pelanggan yang berkonsultasi namun belum menyelesaikan pembayaran.",
          "Mencatat setiap komplain terkait ukuran secara detail untuk mempermudah proses retur dan meminimalkan ulasan negatif bintang 1-2."
        ],
        en: [
          "Developed informative quick-reply templates for sizing, fabric specs, and shipping timelines that maintained a warm, human tone.",
          "Created an end-to-end daily checklist covering incoming order verification, waybill printing, garment QC, and courier handovers.",
          "Implemented gentle follow-up reminders for shoppers who initiated sizing queries but paused before checkout.",
          "Maintained a structured returns log to expedite exchanges and successfully prevent 1-2 star negative ratings."
        ]
      },
      outcome: {
        id: "Respon chat terjaga cepat dan konsisten, ulasan kepuasan pembeli stabil pada rating tinggi, serta laporan harian selalu terekonsiliasi rapi setiap sore.",
        en: "Chat SLA remained consistently high, store rating stayed in the top tier, and daily sales were reconciled accurately before end of business."
      }
    },
    {
      id: "kemensos-data",
      title: {
        id: "Verifikasi Data Korban Bencana & Distribusi Surat Ditjen PSKBA (Kemensos RI)",
        en: "Disaster Victim Data Auditing & Directorate Dispatch (Ministry of Social Affairs)"
      },
      context: {
        id: "Mendukung percepatan arus informasi situasi bencana alam nasional di Ditjen Perlindungan Sosial Korban Bencana Alam.",
        en: "Assisting national disaster response information flow at the Directorate General of Social Protection for Natural Disaster Victims."
      },
      actions: {
        id: [
          "Melakukan cross-check data korban bencana alam dari dinas sosial daerah untuk memisahkan data duplikat dan memverifikasi kebutuhan tenda/sembako.",
          "Mengarsipkan seluruh surat permohonan bantuan darurat dari pemerintah daerah dan menyalurkannya ke meja Direktur terkait sesuai tingkat kedaruratan.",
          "Menjaga kerahasiaan dan integritas data masyarakat terdampak bencana selama proses verifikasi."
        ],
        en: [
          "Cross-referenced regional casualty and displacement logs to identify duplicate entries and quantify emergency relief needs.",
          "Categorized emergency assistance petitions from regional governments, indexing them for rapid dispatch to the appropriate Directors.",
          "Maintained strict data integrity and confidentiality throughout crisis verification cycles."
        ]
      },
      outcome: {
        id: "Data situasi bencana tercatat rapi dan dapat diakses cepat oleh pimpinan untuk menentukan keputusan distribusi logistik bantuan.",
        en: "Crisis situational reports were cleanly indexed and readily accessible for leadership to approve logistics mobilizations."
      }
    },
    {
      id: "cafe-inventory",
      title: {
        id: "Ketertiban Stock Opname & Manajemen Higienitas Bar (Loopline Coffee)",
        en: "Stock Opname Discipline & Bar Hygiene Standards (Loopline Coffee)"
      },
      context: {
        id: "Menjaga stabilitas margin dan kebersihan kedai kopi dengan perputaran bahan baku harian yang cepat.",
        en: "Safeguarding inventory margins and sanitation compliance in a high-turnover specialty coffee shop."
      },
      actions: {
        id: [
          "Melakukan penghitungan fisik biji kopi (beans), susu fresh milk, dan sirup per shift dan mencocokkannya dengan data penjualan di sistem POS.",
          "Menerapkan prinsip FIFO (First In, First Out) pada penyimpanan susu dan bahan mudah rusak.",
          "Menjalankan prosedur deep cleaning mesin espresso dan grinder secara berkala untuk menjaga rasa seduhan tetap prima."
        ],
        en: [
          "Conducted physical shift audits of roasted coffee beans, dairy stock, and syrups, cross-checking counts against POS totals.",
          "Enforced FIFO (First In, First Out) rules for milk cartons and perishables to prevent product spoilage.",
          "Conducted routine chemical deep cleaning of the commercial espresso group heads and grinder burrs to prevent flavor drift."
        ]
      },
      outcome: {
        id: "Tingkat selisih inventaris berhasil ditekan mendekati nol dan standar sanitasi bar selalu lolos inspeksi kebersihan.",
        en: "Inventory shrinkage was reduced to near-zero and bar sanitation reliably passed store audit checks."
      }
    }
  ]
};

