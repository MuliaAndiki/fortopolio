import {
  AchievementsType,
  ArticleType,
  OrganizationType,
  ProfileType,
  Project,
  techStackType,
} from '@/types';

export const profile: ProfileType = {
  name: 'MULIA ANDIKI',
  email: 'muliaandiki@gmail.com',
  phone: '+62 82216903771',
  location: 'Banda Aceh, Indonesia',
  role: 'Software Engineer',
  linkedin: 'https://www.linkedin.com/in/mulia-andiki-030457331',
  github: 'https://github.com/MuliaAndiki',
  portfolio: 'https://fortopolio-nu.vercel.app',
};

export const professionalSummary =
  'Mahasiswa tingkat akhir di program studi Informatika yang berdedikasi sebagai Software Engineer dengan rekam jejak kuat pada Frontend Development serta minat mendalam terhadap Backend Development dan Full Stack Development. Memiliki pengalaman ekstensif dalam mengarsiteki solusi berbasis kecerdasan buatan (Artificial Intelligence) dan Internet of Things (IoT) untuk menyelesaikan masalah dunia nyata secara efisien. Terbiasa merancang platform modern berkinerja tinggi, mengimplementasikan infrastruktur Cloud Computing, dan memecahkan tantangan teknis pada Sistem Terdistribusi. Berorientasi pada Research and Innovation dengan komitmen untuk terus mendorong batasan teknologi melalui kolaborasi tim dan eksekusi proyek berbasis riset.';

export const education = {
  university: 'Universitas Syah Kuala',
  degree: 'S1 Informatika',
  faculty: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
  period: '2023 — Sekarang',
  semester: 'Semester 6',
  location: 'Banda Aceh, Indonesia',
};

export const techStack: techStackType[] = [
  { name: 'Next.js', image: '/images/svg/nextjs.svg' },
  { name: 'React', image: '/images/svg/react.svg' },
  { name: 'Tailwind', image: '/images/svg/tailwind.svg' },
  { name: 'Bun', image: '/images/svg/bun.svg' },
  { name: 'ElysiaJS', image: '/images/svg/elysiajs.svg' },
  { name: 'Express.js', image: '/images/svg/expressjs.svg' },
  { name: 'Node.js', image: '/images/svg/nodejs.svg' },
  { name: 'Docker', image: '/images/svg/docker.svg' },
  { name: 'PostgreSQL', image: '/images/svg/postgressql.svg' },
  { name: 'Prisma', image: '/images/svg/prisma.svg' },
  { name: 'YOLOv8', image: '/images/svg/yolo.svg' },
  { name: 'TensorFlow', image: '/images/svg/tensorflow.svg' },
  { name: 'PyTorch', image: '/images/svg/pytorch.svg' },
  { name: 'IoT', image: '/images/svg/iot.svg' },
  { name: 'GitHub', image: '/images/svg/github.svg' },
  { name: 'Vercel', image: '/images/svg/vercel.svg' },
];

export const skillLevels = [
  { name: 'NEXT.JS', level: 95, color: 'bg-neo-yellow' },
  { name: 'REACT', level: 93, color: 'bg-neo-cyan' },
  { name: 'TAILWIND CSS', level: 98, color: 'bg-neo-pink' },
  { name: 'BUN / ELYSIAJS', level: 85, color: 'bg-neo-green' },
  { name: 'PYTHON / FASTAPI', level: 80, color: 'bg-neo-orange' },
  { name: 'YOLOv8 / CNN', level: 75, color: 'bg-neo-purple' },
];

export const projects: Project[] = [
  {
    name: 'ETNO',
    role: 'Full Stack Developer',
    period: 'Jan 2026 — Sekarang',
    desc: 'Platform Pembelajaran Bahasa Indonesia Berbasis 3D Module. Mengembangkan arsitektur aplikasi menggunakan Next.js dan Tailwind CSS pada sisi klien, serta membangun API server berkinerja tinggi menggunakan Bun dan ElysiaJS dengan PostgreSQL sebagai sistem manajemen basis data untuk menghasilkan sistem yang skalabel dan responsif.',
    tags: ['Next.js', 'Tailwind', 'Bun', 'ElysiaJS', 'PostgreSQL'],
    bg: 'bg-neo-blue',
    textColor: 'text-neo-black',
  },
  {
    name: 'GETSMART',
    role: 'Software Engineer',
    period: 'Mei 2026 — Sekarang',
    desc: 'Platform Pembelajaran Berbasis Computer Vision Untuk Mendeteksi Emosi Pada Interface Muka. Mengintegrasikan layanan API untuk dasbor siswa, guru, dan admin menggunakan Google OAuth untuk memfasilitasi akses terpusat yang aman bagi berbagai peran pengguna.',
    tags: ['Next.js', 'React'],
    bg: 'bg-neo-cyan',
    textColor: 'text-neo-black',
  },
  {
    name: 'AERIS',
    role: 'Software Engineer',
    period: 'April 2026 — Mei 2026',
    desc: 'Dasbor lingkungan untuk memvisualisasikan kualitas udara, cuaca, dan risiko bencana secara real-time. Mengimplementasikan integrasi API eksternal menggunakan Open-Meteo dan API-Ninjas untuk menyajikan visualisasi data cuaca dan metrik lingkungan yang real-time.',
    tags: ['Next.js', 'React'],
    bg: 'bg-neo-green',
    textColor: 'text-neo-black',
  },
  {
    name: 'NUTRIPLATE',
    role: 'Software Engineer (IoT & PWA)',
    period: 'Mei 2025 — April 2026',
    desc: 'Sistem Nutritional Calculation berupa platform IoT/PWA untuk klasifikasi gizi anak menggunakan model visi komputer. Menggabungkan model Computer Vision ke dalam alur kerja aplikasi menggunakan YOLOv8 untuk menghasilkan kemampuan pemrosesan klasifikasi makanan anak yang responsif dan akurat.',
    tags: ['Next.js', 'React', 'YOLO', 'IoT', 'PWA'],
    bg: 'bg-neo-pink',
    textColor: 'text-neo-black',
  },
  {
    name: 'LOKA-LOKA',
    role: 'Software Engineer',
    period: 'Jun 2025 — Sekarang',
    desc: 'Sistem transaksi digital yang mendukung gateway pembayaran berlapis. Membangun saluran pemrosesan pembayaran menggunakan Midtrans dan GoPay QRIS untuk memastikan penyelesaian transaksi yang cepat dan validasi dokumentasi bisnis yang terjamin.',
    tags: ['Next.js', 'React'],
    bg: 'bg-neo-orange',
    textColor: 'text-neo-black',
  },
  {
    name: 'KOSTHUB',
    role: 'Software Engineer',
    period: 'Maret 2025 — Sekarang',
    desc: 'Platform manajemen pencarian dan penyewaan kos yang memudahkan interaksi antara pemilik properti dan penyewa melalui dasbor yang intuitif. Mengembangkan antarmuka pengguna responsif menggunakan Next.js dan API RESTful menggunakan Express.js serta integrasi basis data.',
    tags: ['Next.js', 'React', 'Express.js'],
    bg: 'bg-neo-yellow',
    textColor: 'text-neo-black',
  },
  {
    name: 'CRM SYSTEM',
    role: 'Software Engineer',
    period: 'Maret 2025 — Agust 2025',
    desc: 'Sistem Manajemen Hubungan Pelanggan (CRM) yang dirancang untuk mengotomatisasi alur kerja interaksi klien dan memusatkan data prospek bisnis. Mengembangkan sistem pelacakan interaksi pelanggan menggunakan arsitektur backend yang tangguh dan protokol keamanan terjamin.',
    tags: ['Next.js', 'React', 'Express.js'],
    bg: 'bg-neo-purple',
    textColor: 'text-neo-black',
  },
];

export const achievements: AchievementsType[] = [
  {
    image: '/images/svg/Innovillage.svg',
    title: 'TOP 180 NASIONAL — INNOVILLAGE',
    description:
      'Berhasil menembus peringkat Top 180 tingkat nasional pada kompetisi inovasi sosial digital melalui pengembangan proyek NutriPlate (Sistem Nutritional Calculation berbasis IoT/PWA).',
    year: '2025 — 2026',
    bg: 'bg-neo-pink',
  },
  {
    image: '/images/svg/school.svg',
    title: 'S1 INFORMATIKA — USK',
    description:
      'Mahasiswa aktif Semester 6 di Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Syah Kuala, Banda Aceh.',
    year: '2023 — SEKARANG',
    bg: 'bg-neo-blue',
  },
  {
    image: '/images/svg/science.svg',
    title: 'RESEARCH & INNOVATION',
    description:
      'Mengintegrasikan model machine learning (Computer Vision) ke dalam alur kerja aplikasi web progresif NutriPlate dengan arsitektur backend berperforma tinggi.',
    year: '2025 — 2026',
    bg: 'bg-neo-green',
  },
];

export const organizations: OrganizationType[] = [
  {
    name: 'BEM FMIPA — USK',
    role: 'Anggota Departemen PDD — Videografer',
    period: '2024',
    description:
      'Bertanggung jawab dalam perencanaan, pengambilan gambar, dan penyuntingan video untuk kebutuhan publikasi kegiatan serta pendokumentasian acara fakultas. Mengelola alur produksi konten visual kreatif guna meningkatkan jangkauan dan citra organisasi di media sosial.',
    bg: 'bg-neo-cyan',
  },
  {
    name: 'HMIF — USK',
    role: 'Anggota Himpunan',
    period: '2025 — Sekarang',
    description:
      'Berpartisipasi aktif dalam dua periode kepengurusan untuk mendukung program kerja himpunan serta memperkuat kolaborasi antar mahasiswa di lingkungan departemen.',
    bg: 'bg-neo-yellow',
  },
  {
    name: 'PPM — USK',
    role: 'Anggota',
    period: '2025 — 2026',
    description:
      'Berkontribusi sebagai anggota selama dua periode kepengurusan (kabinet yang berbeda), berfokus pada fungsi koordinasi, analisis, dan advokasi untuk meningkatkan kualitas serta inovasi di bidang kemahasiswaan.',
    bg: 'bg-neo-orange',
  },
];

export const articles: ArticleType[] = [
  {
    title: 'Implementing YOLOv8 in Web Apps',
    excerpt:
      'Integrasi model Computer Vision ke dalam alur kerja aplikasi menggunakan YOLOv8 untuk klasifikasi makanan anak yang responsif dan akurat.',
    category: 'TECH',
    date: 'MEI 2025',
    bg: 'bg-neo-green',
    readTime: '15 min read',
  },
  {
    title: 'Building Full Stack with Bun & ElysiaJS',
    excerpt:
      'Mengembangkan API server berkinerja tinggi menggunakan Bun dan ElysiaJS dengan PostgreSQL untuk sistem yang skalabel dan responsif.',
    category: 'TECH',
    date: 'JAN 2026',
    bg: 'bg-neo-yellow',
    readTime: '12 min read',
  },
  {
    title: 'Real-Time Environmental Dashboards',
    excerpt:
      'Implementasi integrasi API eksternal menggunakan Open-Meteo dan API-Ninjas untuk visualisasi data cuaca dan metrik lingkungan real-time.',
    category: 'TECH',
    date: 'APR 2026',
    bg: 'bg-neo-cyan',
    readTime: '10 min read',
  },
  {
    title: 'Computer Vision for Emotion Detection',
    excerpt:
      'Mengintegrasikan layanan API untuk dasbor siswa, guru, dan admin dengan Google OAuth pada platform pembelajaran berbasis Computer Vision.',
    category: 'TECH',
    date: 'MEI 2026',
    bg: 'bg-neo-pink',
    readTime: '8 min read',
  },
];

export const languages = [
  { name: 'Bahasa Indonesia', level: 'Native / Bilingual Proficiency' },
  { name: 'Bahasa Inggris', level: 'Basic Proficiency' },
];

export const interests = ['AI / ML', 'Full Stack', 'IoT', 'Cloud Computing'];
