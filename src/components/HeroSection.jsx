import Image from "../data";
import { profile, socialLinks } from "../data";
import "remixicon/fonts/remixicon.css";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--primary-light)" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center w-full relative z-10">
        {/* Left Content */}
        <div className="animate__animated animate__fadeInLeft animate__delay-1s order-2 md:order-1">
          {/* Tagline badge */}
          <div className="glass-card p-3 px-4 rounded-xl flex items-center gap-3 w-fit mb-6">
            <img
              src={Image.LogoImage}
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-lg"
            />
            <p
              className="text-xs sm:text-sm font-medium"
              style={{ color: "var(--text-heading)" }}
            >
              "{profile.tagline}"
            </p>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
            <span style={{ color: "var(--text-primary)" }}>Hi, I'm </span>
            <span className="gradient-text">{profile.full_name}</span>
          </h1>

          {/* Role subtitle */}
          <p
            className="text-sm sm:text-base md:text-sm lg:text-lg font-medium mb-4"
            style={{ color: "var(--primary)" }}
          >
            <i className="ri-graduation-cap-fill mr-2" />
            {profile.education}
          </p>

          {/* Description */}
          <p
            className="text-justify leading-6 md:leading-7 lg:leading-8 text-xs md:text-sm lg:text-base mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={profile.cv_url}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg flex items-center gap-2 hover:scale-105"
              id="cta-cv"
            >
              <i className="ri-file-download-line" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                border: "2px solid var(--primary)",
                color: "var(--primary)",
              }}
              id="cta-contact"
            >
              <i className="ri-mail-send-line" />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                <i
                  className={`${social.icon} text-lg sm:text-xl`}
                  style={{ color: "var(--primary)" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="animate__animated animate__fadeInRight animate__delay-2s order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-30 animate-pulse-glow"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              }}
            />
            <img
              src={Image.HeroImage}
              alt="Maulana Adiatma"
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[280px] md:h-[280px] lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] object-cover rounded-2xl shadow-2xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-3 -left-3 glass-card px-4 py-2 rounded-xl animate-float">
              <p
                className="text-xs sm:text-sm font-bold"
                style={{ color: "var(--text-heading)" }}
              >
                <i className="ri-code-s-slash-line mr-1" />
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
