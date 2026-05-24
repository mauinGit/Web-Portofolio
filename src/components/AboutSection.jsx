import Image from "../data";
import { profile } from "../data";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div data-aos="fade-up" data-aos-duration="1000">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ color: "var(--text-heading)" }}
          >
            About Me
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* About Card */}
        <div
          className="glass-card p-6 md:p-8 xl:p-10 rounded-2xl md:mx-8 lg:mx-16 xl:mx-32"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Bio Text */}
          <p
            className="leading-6 sm:leading-7 md:leading-8 text-xs sm:text-sm md:text-base xl:text-lg text-justify mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.about}
          </p>

          {/* Profile Info & Stats */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={Image.HeroImage}
                alt="Profile"
                className="w-12 h-12 xl:w-16 xl:h-16 object-cover rounded-full"
                style={{ border: "3px solid var(--primary)" }}
              />
              <div>
                <h3
                  className="font-bold text-sm sm:text-base lg:text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {profile.full_name}
                </h3>
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <i
                    className="ri-graduation-cap-fill mr-1"
                    style={{ color: "var(--primary)" }}
                  />
                  {profile.education}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-10">
              <div className="text-center">
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {profile.stats.projects}
                  <span
                    className="ml-1"
                    style={{ color: "var(--primary)" }}
                  >
                    +
                  </span>
                </h3>
                <p
                  className="text-xs sm:text-sm lg:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Done Projects
                </p>
              </div>
              <div className="text-center">
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {profile.stats.experience_years}
                  <span
                    className="ml-1"
                    style={{ color: "var(--primary)" }}
                  >
                    +
                  </span>
                </h3>
                <p
                  className="text-xs sm:text-sm lg:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
