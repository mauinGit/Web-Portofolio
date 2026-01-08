import { useState, useEffect } from "react";
import Image from "../data";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 125) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-4 px-12 flex justify-between items-center bg-[#4D869C] text-white">
      <div className="logo flex items-center gap-6 text-3xl font-bold text-base md:text-2xl">
        <img src={Image.LogoImage} alt="" className="w-12 h-12 rounded-full"/>
        <h1>Portofolio</h1>
      </div>
      <ul
        className={`menu flex gap-4 sm:gap-7 items-center 
          md:static fixed left-1/2 -translate-x-1/2 
          md:translate-x-0 -top-10 opacity-0 
          md:opacity-100 bg-[#CDE8E5]/30 backdrop-blur-md rounded-br-2xl px-4 py-5 md:py-3 
          md:bg-transparent rounded-bl-2xl transition-all md:transition-none z-49 ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#" className="text-sm md:text-lg xl:text-xl text-[#4D869C] md:text-white font-bold font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-sm md:text-lg xl:text-xl text-[#4D869C] md:text-white font-bold font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-sm md:text-lg xl:text-xl text-[#4D869C] md:text-white font-bold font-medium">
            Skills
          </a>
        </li>
        <li>
          <a href="#" className="text-sm md:text-lg xl:text-xl text-[#4D869C] md:text-white font-bold font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
