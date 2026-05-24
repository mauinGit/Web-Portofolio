import HeroImage from "/assets/HeroImage.JPG";
import LogoImage from "/assets/Logo.png";

const Image = {
  HeroImage,
  LogoImage,
};

export default Image;

// ==================== TOOLS / SKILLS ====================
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/figma.png";
import Tools8 from "/assets/tools/golang.png";

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Tools",
  "Design",
];

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    category: "Tools",
    level: "Advanced",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Library",
    category: "Frontend",
    level: "Intermediate",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    category: "Frontend",
    level: "Advanced",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    category: "Language",
    level: "Intermediate",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Version Control",
    category: "Tools",
    level: "Intermediate",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design Tool",
    category: "Design",
    level: "Intermediate",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Figma",
    ket: "UI Design",
    category: "Design",
    level: "Beginner",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Golang",
    ket: "Language",
    category: "Backend",
    level: "Beginner",
    dad: "800",
  },
];

// ==================== PROJECTS ====================
import Proyek1 from "/assets/proyek/proyek1.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website CaptGrill",
    desk: "Website Kasir dan Mengelola Data bahan yang ada (Tugas Akhir RPL)",
    tools: ["Laravel", "Tailwind", "Breeze", "Filament"],
    github_url: "https://github.com/mauinGit",
    demo_url: "",
    status: "Completed",
    is_featured: true,
    dad: "200",
  },
];

// ==================== EXPERIENCES ====================
export const listExperiences = [
  {
    id: 1,
    title: "Front-End Developer",
    organization: "Proyek Mandiri",
    type: "Project",
    description:
      "Mengembangkan website portfolio pribadi menggunakan React JS dan Tailwind CSS untuk menampilkan karya dan skill secara profesional.",
    start_date: "2025-01",
    end_date: "Present",
    dad: "100",
  },
  {
    id: 2,
    title: "Mahasiswa Sistem Informasi",
    organization: "Universitas Sriwijaya",
    type: "Education",
    description:
      "Menempuh pendidikan S1 Sistem Informasi dengan fokus pada pengembangan web, pemrograman, dan teknologi informasi.",
    start_date: "2023-08",
    end_date: "Present",
    dad: "200",
  },
];

// ==================== ACHIEVEMENTS ====================
export const listAchievements = [
  {
    id: 1,
    title: "Tugas Akhir RPL - Website CaptGrill",
    description:
      "Berhasil menyelesaikan proyek akhir mata kuliah Rekayasa Perangkat Lunak dengan membangun Website Kasir berbasis Laravel.",
    type: "Academic",
    year: 2025,
    dad: "100",
  },
];

// ==================== SOCIAL LINKS ====================
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/mauinGit",
    icon: "ri-github-fill",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/adiatma__23/",
    icon: "ri-instagram-fill",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maulanaadiatma/",
    icon: "ri-linkedin-fill",
  },
];

// ==================== PROFILE ====================
export const profile = {
  full_name: "Maulana Adiatma",
  tagline: "Membangun web bukan sekadar hobi, tapi perjalanan.",
  description:
    "Mahasiswa Sistem Informasi Universitas Sriwijaya yang berfokus pada Front-End Development, Back-End Development, dan Machine Learning. Terus mengembangkan kemampuan teknis melalui pembelajaran mandiri, proyek, dan eksplorasi teknologi untuk membangun solusi digital yang efektif dan berkelanjutan.",
  about:
    "Saya memiliki ketertarikan kuat pada pengembangan Full Stack Web. Ketertarikan ini sudah saya tekuni sejak kelas 2 SMA, dan terus berkembang hingga sekarang melalui perkuliahan, pembelajaran mandiri, serta berbagai proyek pengembangan aplikasi. Saya menikmati proses membangun aplikasi secara menyeluruh mulai dari antarmuka pengguna hingga logika backend dan pengelolaan data. Dengan semangat belajar yang konsisten, saya terus mengasah kemampuan teknis dan siap berkembang di dunia teknologi serta kolaborasi tim.",
  education: "Sistem Informasi — Universitas Sriwijaya",
  cv_url:
    "https://drive.google.com/file/d/14mQB6FGaFn485TGck8ROwTVzC4ECTLNX/view?usp=drive_link",
  email: "maulanaadiatma3133@gmail.com",
  stats: {
    projects: 1,
    experience_years: 1,
  },
};
