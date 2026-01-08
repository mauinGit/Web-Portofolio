import HeroImage from "/assets/HeroImage.JPG";
import LogoImage from "/assets/Logo.png"

const Image = {
  HeroImage, LogoImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/figma.png";
import Tools8 from "/assets/tools/golang.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Repository",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design App",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Figma",
    ket: "Design App",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Golang",
    ket: "Language",
    dad: "800",
  }
];

import Proyek1 from "/assets/proyek/proyek1.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website CaptGrill",
    desk: "Website Kasir dan Mengelola Data bahan yang ada (Tugas Akhir RPL)",
    tools: ["Laravel", "Tailwind", "Breeze", "Filament"],
    dad: "200",
  },
];
