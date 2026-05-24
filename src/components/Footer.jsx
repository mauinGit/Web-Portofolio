import { socialLinks } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      {/* Decorative gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-2xl lg:text-3xl text-white mb-2">
              Portfolio
            </h2>
            <p className="text-white/60 text-sm lg:text-base max-w-xs mx-auto md:mx-0">
              Membangun solusi digital yang efektif dan berkelanjutan.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="text-white/50 text-xs uppercase tracking-widest mb-4 font-semibold">
              Navigation
            </h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-white text-sm lg:text-base transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="text-white/50 text-xs uppercase tracking-widest mb-4 font-semibold">
              Connect
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <i className={`${social.icon} text-white text-lg`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs sm:text-sm">
            © {currentYear} Maulana Adiatma. All rights reserved. Built with{" "}
            <span className="text-white/60">React</span> &{" "}
            <span className="text-white/60">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;