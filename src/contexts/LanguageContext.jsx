import { createContext, useContext, useState } from 'react'

const id = {
  menu: { beranda: 'Beranda', tentang: 'Tentang', keahlian: 'Keahlian', proyek: 'Proyek', kontak: 'Kontak' },
  beranda: {
    greeting: 'Halo, saya',
    terminal: 'cat about.md',
    roles: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
    desc: 'Seorang Web Developer yang passionate dalam membangun aplikasi web modern dengan pengalaman yang seamless dan performa yang optimal.',
    btn_proyek: 'Lihat Proyek',
    btn_kontak: 'Hubungi Saya',
    status: 'Open to work',
    lokasi: 'Bekasi, Indonesia',
    remote: 'Remote friendly',
  },
  tentang: {
    terminal: 'cat tentang.json',
    title: 'Tentang Saya',
    p1: 'Halo! Saya',
    p1b: 'seorang',
    p1c: 'yang sedang menempuh pendidikan S1 Teknologi Informasi di Universitas Bina Sarana Informatika.',
    p2: 'Saya memiliki ketertarikan besar dalam membangun aplikasi web modern menggunakan',
    p3: 'Saat ini saya sedang aktif mengembangkan skill di bidang Frontend & Full-Stack Development, serta terbuka untuk kolaborasi dan kesempatan',
    info_nama: 'Nama',
    info_lokasi: 'Lokasi',
    info_email: 'Email',
    info_status: 'Status',
    freelance: 'Tersedia untuk Remote & Freelance',
    highlights: 'Highlights',
    edu: 'S1 Teknologi Informasi',
    edu_desc: 'Universitas Bina Sarana Informatika, 2023 - Belum lulus',
    exp: 'Web Development',
    exp_desc: 'Fokus pada Frontend & Backend modern',
    proj: '5+ Proyek',
    proj_desc: 'Telah dikerjakan & di-deploy',
    remote: 'Remote Ready',
    remote_desc: 'Kolaborasi tim global & lokal',
    timeline: 'Perjalanan',
    year1: '2023',
    title1: 'Mulai Kuliah S1 TI',
    desc1: 'Universitas Bina Sarana Informatika',
    year2: '2024',
    title2: 'Project Pertama',
    desc2: 'Membangun aplikasi web sederhana',
    year3: '2025',
    title3: 'Portfolio & Freelance',
    desc3: 'Mulai menerima project freelance',
    year4: '2026',
    title4: 'Terus Belajar',
    desc4: 'Mendalami React, Vue.js & Cloud',
    motto_cmd: 'echo $MOTTO',
    motto: '"Write code not just for machines, but for humans."',
  },
  keahlian: {
    terminal: 'cat keahlian.yaml',
    frontend: 'Frontend',
    tools: 'Tools & Teknologi',
    lainnya: 'Keahlian Lainnya',
    backend: 'Backend',
    cmd: 'npx skills --tech-stack',
    cmd_suffix: '# 15+ teknologi dikuasai',
  },
  proyek: {
    terminal: 'ls projects/ --list',
    title1: 'Blog Platform',
    desc1: 'Platform blogging modern dengan Markdown editor, sistem tagging, komentar, dan dashboard penulis. Dibangun dengan arsitektur JAMstack.',
    title2: 'Wedding Invitation',
    desc2: 'Undangan pernikahan digital interaktif dengan RSVP online, galeri foto, countdown, dan peta lokasi. Responsif di semua device.',
    title3: 'Portfolio Company',
    desc3: 'Company profile website modern dengan animasi smooth, optimasi SEO, dan performa tinggi. Desain yang mencerminkan brand identity.',
    title4: 'E-Commerce',
    desc4: 'Toko online lengkap dengan manajemen produk, keranjang belanja, checkout system, dan integrasi payment gateway.',
    cmd: 'npm run build --all',
    cmd_suffix: '# 4 proyek siap deploy',
    build_status: 'Build success',
  },
  kontak: {
    terminal: 'python send_message.py',
    title: 'Kontak',
    desc: 'Punya pertanyaan, ide kolaborasi, atau sekadar ingin ngobrol? Jangan ragu untuk menghubungi saya!',
    form_name: '--name',
    form_email: '--email',
    form_message: '--message',
    name_placeholder: 'Nama Anda...',
    email_placeholder: 'Email Anda...',
    message_placeholder: 'Tulis pesan Anda...',
    btn_send: 'Kirim Pesan',
    btn_sent: 'Pesan terkirim!',
    email_label: 'Email',
    lokasi_label: 'Lokasi',
    time_label: 'Zona Waktu',
    response_time: 'Respons biasanya dalam 1-2 jam',
  },
  footer: {
    built: 'Built with',
    by: 'Dibuat dengan ❤️ oleh',
  },
}

const en = {
  menu: { beranda: 'Home', tentang: 'About', keahlian: 'Skills', proyek: 'Projects', kontak: 'Contact' },
  beranda: {
    greeting: 'Hello, I\'m',
    terminal: 'cat about.md',
    roles: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
    desc: 'A Web Developer passionate about building modern web applications with seamless experience and optimal performance.',
    btn_proyek: 'View Projects',
    btn_kontak: 'Contact Me',
    status: 'Open to work',
    lokasi: 'Bekasi, Indonesia',
    remote: 'Remote friendly',
  },
  tentang: {
    terminal: 'cat about.json',
    title: 'About Me',
    p1: 'Hello! I\'m',
    p1b: 'a',
    p1c: 'currently pursuing a Bachelor\'s in Information Technology at Bina Sarana Informatika University.',
    p2: 'I have a great interest in building modern web applications using',
    p3: 'I\'m currently actively developing my skills in Frontend & Full-Stack Development, and open to collaboration and',
    info_nama: 'Name',
    info_lokasi: 'Location',
    info_email: 'Email',
    info_status: 'Status',
    freelance: 'Available for Remote & Freelance',
    highlights: 'Highlights',
    edu: 'S1 Information Technology',
    edu_desc: 'Bina Sarana Informatika University, 2023 - Not graduated',
    exp: 'Web Development',
    exp_desc: 'Focus on modern Frontend & Backend',
    proj: '5+ Projects',
    proj_desc: 'Built & deployed',
    remote: 'Remote Ready',
    remote_desc: 'Global & local team collaboration',
    timeline: 'Journey',
    year1: '2023',
    title1: 'Started IT Bachelor',
    desc1: 'Bina Sarana Informatika University',
    year2: '2024',
    title2: 'First Project',
    desc2: 'Built a simple web app',
    year3: '2025',
    title3: 'Portfolio & Freelance',
    desc3: 'Started taking freelance projects',
    year4: '2026',
    title4: 'Keep Learning',
    desc4: 'Deepening React, Vue.js & Cloud',
    motto_cmd: 'echo $MOTTO',
    motto: '"Write code not just for machines, but for humans."',
  },
  keahlian: {
    terminal: 'cat skills.yaml',
    frontend: 'Frontend',
    tools: 'Tools & Technology',
    lainnya: 'Other Skills',
    backend: 'Backend',
    cmd: 'npx skills --tech-stack',
    cmd_suffix: '# 15+ technologies mastered',
  },
  proyek: {
    terminal: 'ls projects/ --list',
    title1: 'Blog Platform',
    desc1: 'Modern blogging platform with Markdown editor, tagging system, comments, and author dashboard. Built with JAMstack architecture.',
    title2: 'Wedding Invitation',
    desc2: 'Interactive digital wedding invitation with online RSVP, photo gallery, countdown, and location map. Responsive on all devices.',
    title3: 'Portfolio Company',
    desc3: 'Modern company profile website with smooth animations, SEO optimization, and high performance. Design that reflects brand identity.',
    title4: 'E-Commerce',
    desc4: 'Complete online store with product management, shopping cart, checkout system, and payment gateway integration.',
    cmd: 'npm run build --all',
    cmd_suffix: '# 4 projects ready to deploy',
    build_status: 'Build success',
  },
  kontak: {
    terminal: 'python send_message.py',
    title: 'Contact',
    desc: 'Have questions, collaboration ideas, or just want to chat? Don\'t hesitate to reach out!',
    form_name: '--name',
    form_email: '--email',
    form_message: '--message',
    name_placeholder: 'Your name...',
    email_placeholder: 'Your email...',
    message_placeholder: 'Write your message...',
    btn_send: 'Send Message',
    btn_sent: 'Message sent!',
    email_label: 'Email',
    lokasi_label: 'Location',
    time_label: 'Time Zone',
    response_time: 'Response usually within 1-2 hours',
  },
  footer: {
    built: 'Built with',
    by: 'Made with ❤️ by',
  },
}

const translations = { id, en }

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang')
    return saved === 'en' ? 'en' : 'id'
  })

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'id' ? 'en' : 'id'
      localStorage.setItem('portfolio-lang', next)
      return next
    })
  }

  const t = (key) => {
    const keys = key.split('.')
    let result = translations[lang]
    for (const k of keys) {
      result = result?.[k]
    }
    return result ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang: toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
