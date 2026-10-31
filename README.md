# Portfolio Web & Professional CV – Saida Zakiyah

> **Anti-Slop Standard**: Bebas dari template klise AI (tanpa gradien ungu neon, tanpa bola-bola kaca mengambang, tanpa jargon korporat kosong). Dibuat dengan tipografi editorial yang hangat, presisi data, dan penghormatan pada rekam jejak nyata Saida Zakiyah.

---

## 🌟 Fitur Utama

1. **Bilingual Switcher (Bahasa Indonesia & English)**:
   - Tombol toggle instan (🇮🇩 ID / 🇬🇧 EN) dengan persistensi `localStorage`.
   - Terjemahan kontekstual dan alami (bukan terjemahan mesin kaku).
2. **Desain Editorial & Ergonomis (Inspirasi DaisyUI & Shadcn UI)**:
   - **DaisyUI Tokens**: Tema Warm Light (parchment/ochre) & Espresso Dark, timeline vertikal karir, chip kategori tag.
   - **Shadcn UI Spacing & Radix Accessibility**: Border 1px presisi, hierarki teks yang tajam, rasio kontras WCAG 2.1 AA, fokus keyboard (`:focus-visible`).
3. **Storybook Component Inspector**:
   - Tab khusus yang menampilkan preview terisolasi dari komponen antarmuka atomik & molekuler (Hero Card, Timeline Item, Grounded Metric Chips, Case Study Block).
4. **Studi Kasus Lapangan Nyata (Deep Dives)**:
   - Penanganan SLA chat & rekonsiliasi pesanan marketplace (Batavia Uniform).
   - Verifikasi data korban bencana alam Ditjen PSKBA (Kementerian Sosial RI).
   - Audit inventaris stock opname & sanitasi bar espresso (Loopline Coffee).
5. **Print-to-PDF / ATS Printable Resume**:
   - Dilengkapi `@media print` khusus. Cukup klik tombol **Cetak CV** atau tekan `Cmd+P` / `Ctrl+P` untuk mencetak lembar CV format fisik profesional bersih tanpa elemen tombol web.
6. **Skills AI yang Terpasang & Aktif**:
   - `skills/antislop`: Filter kualitas inti & hard gates terhadap klise AI.
   - `skills/antislop-ui`: Standar tata letak dan tipografi bebas slop.
   - `skills/antislop-copywriting`: Panduan narasi jujur berbasis pencapaian nyata.
   - `skills/antislop-human`: Aksesibilitas, rasio kontras, keramahan navigasi.
   - `skills/antislop-layoutmobile`: Target sentuh 44x44px dan adaptasi mobile.
   - `skills/antislop-code`: Kode modular, zero-bloat, tanpa dependensi berlebih.
   - `skills/daisyui-components`: Pola komponen DaisyUI.
   - `skills/shadcn-ui-patterns`: Pola token & tipografi Shadcn UI.
   - `skills/storybook-showcase`: Arsitektur inspeksi komponen terisolasi.

---

## 📁 Struktur Berkas

```
resume-sasa/
├── assets/
│   └── saida-profile.jpg         # Foto asli Saida Zakiyah (diekstrak dari CV)
├── css/
│   └── style.css                 # Sistem desain responsif, token warna & print CSS
├── js/
│   ├── data.js                   # Basis data bilingual terstruktur (ID & EN)
│   └── main.js                   # Logika reaktif tema, bahasa, tabs, modal, toast
├── skills/                       # Modul Anti-Slop AI Skills terpasang
│   ├── antislop/
│   ├── antislop-ui/
│   ├── antislop-copywriting/
│   ├── antislop-human/
│   ├── antislop-layoutmobile/
│   ├── antislop-code/
│   ├── daisyui-components/
│   ├── shadcn-ui-patterns/
│   └── storybook-showcase/
├── .gemini/skills/               # Duplikasi rules untuk sistem agent lokal
├── DESIGN.md                     # Panduan desain & arah visual bebas slop
├── index.html                    # Halaman utama aplikasi
├── server.js                     # Server lokal statis (Node.js built-in, 0 dependency)
├── package.json
└── README.md
```

---

## 🚀 Cara Menjalankan

Aplikasi dirancang **zero-dependency** (dapat berjalan langsung dengan Node.js bawaan tanpa perlu install ratusan megabyte npm packages):

```bash
# Menjalankan server lokal
npm start
# atau
node server.js
```

Buka peramban di: `http://localhost:3000`

Atau buka berkas `index.html` secara langsung di browser mana pun.

