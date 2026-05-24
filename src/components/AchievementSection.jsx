import { listAchievements } from "../data";

const AchievementSection = () => {
  const getTypeIcon = (type) => {
    switch (type) {
      case "Competition":
        return "ri-trophy-fill";
      case "Certification":
        return "ri-award-fill";
      case "Academic":
        return "ri-graduation-cap-fill";
      default:
        return "ri-medal-fill";
    }
  };

  const getTypeGradient = (type) => {
    switch (type) {
      case "Competition":
        return "linear-gradient(135deg, #f59e0b, #d97706)";
      case "Certification":
        return "linear-gradient(135deg, #3b82f6, #2563eb)";
      case "Academic":
        return "linear-gradient(135deg, #8b5cf6, #7c3aed)";
      default:
        return "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))";
    }
  };

  return (
    <section id="achievements" className="py-16 lg:py-24">
      {/* Section Header */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center"
          style={{ color: "var(--text-heading)" }}
        >
          Achievements
        </h2>
        <p
          className="py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Pencapaian dan prestasi yang telah saya raih
        </p>
        <div className="section-divider mb-10" />
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listAchievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className="glass-card rounded-2xl overflow-hidden group"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 120}
          >
            {/* Top accent bar */}
            <div
              className="h-1.5"
              style={{ background: getTypeGradient(achievement.type) }}
            />

            <div className="p-5 md:p-6">
              {/* Icon & Type */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl"
                  style={{ background: getTypeGradient(achievement.type) }}
                >
                  <i className={getTypeIcon(achievement.type)} />
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--glass-border)",
                  }}
                >
                  <i className="ri-calendar-line mr-1" />
                  {achievement.year}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base sm:text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {achievement.title}
              </h3>

              {/* Type badge */}
              <span
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-3"
                style={{
                  background: `${getTypeGradient(achievement.type).replace("linear-gradient(135deg, ", "").split(",")[0]}15`,
                  color: getTypeGradient(achievement.type).replace("linear-gradient(135deg, ", "").split(",")[0],
                }}
              >
                {achievement.type}
              </span>

              {/* Description */}
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {listAchievements.length === 0 && (
        <div className="text-center py-12">
          <i
            className="ri-trophy-line text-5xl mb-4 block"
            style={{ color: "var(--text-secondary)" }}
          />
          <p style={{ color: "var(--text-secondary)" }}>
            Belum ada prestasi yang ditambahkan
          </p>
        </div>
      )}
    </section>
  );
};

export default AchievementSection;
