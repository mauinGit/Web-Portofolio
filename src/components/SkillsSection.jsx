import { useState } from "react";
import { listTools, skillCategories } from "../data";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? listTools
      : listTools.filter((tool) => tool.category === activeCategory);

  const getLevelWidth = (level) => {
    switch (level) {
      case "Beginner":
        return "33%";
      case "Intermediate":
        return "66%";
      case "Advanced":
        return "100%";
      default:
        return "50%";
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "#f59e0b";
      case "Intermediate":
        return "var(--primary)";
      case "Advanced":
        return "#10b981";
      default:
        return "var(--primary)";
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24">
      {/* Section Header */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center"
          style={{ color: "var(--text-heading)" }}
        >
          Skills & Tools
        </h2>
        <p
          className="py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Berikut adalah skill dan tools yang saya gunakan dalam pengembangan
          aplikasi
        </p>
        <div className="section-divider mb-8" />
      </div>

      {/* Category Filter */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        {skillCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredSkills.map((tool, index) => (
          <div
            className="glass-card p-4 rounded-xl group cursor-default"
            key={tool.id}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 80}
          >
            <div className="flex items-start gap-3">
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex-1 min-w-0">
                <h3
                  className="font-semibold text-sm sm:text-base truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {tool.nama}
                </h3>
                <div className="flex items-center gap-2">
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tool.ket}
                  </p>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: `${getLevelColor(tool.level)}20`,
                      color: getLevelColor(tool.level),
                    }}
                  >
                    {tool.level}
                  </span>
                </div>
                {/* Level bar */}
                <div className="skill-level-bar mt-2">
                  <div
                    className="skill-level-fill"
                    style={{
                      width: getLevelWidth(tool.level),
                      background: `linear-gradient(90deg, ${getLevelColor(
                        tool.level
                      )}aa, ${getLevelColor(tool.level)})`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <i
            className="ri-search-line text-4xl mb-4 block"
            style={{ color: "var(--text-secondary)" }}
          />
          <p style={{ color: "var(--text-secondary)" }}>
            Tidak ada skill dalam kategori ini
          </p>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
