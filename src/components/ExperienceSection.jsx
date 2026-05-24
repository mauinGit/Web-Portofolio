import { listExperiences } from "../data";

const ExperienceSection = () => {
  const formatDate = (dateStr) => {
    if (dateStr === "Present") return "Sekarang";
    const [year, month] = dateStr.split("-");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
      "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Education":
        return "ri-graduation-cap-fill";
      case "Organization":
        return "ri-team-fill";
      case "Internship":
        return "ri-building-2-fill";
      case "Volunteer":
        return "ri-heart-fill";
      case "Project":
        return "ri-code-s-slash-fill";
      default:
        return "ri-briefcase-fill";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Education":
        return "#8b5cf6";
      case "Organization":
        return "#f59e0b";
      case "Internship":
        return "#3b82f6";
      case "Volunteer":
        return "#ef4444";
      case "Project":
        return "#10b981";
      default:
        return "var(--primary)";
    }
  };

  return (
    <section id="experience" className="py-16 lg:py-24">
      {/* Section Header */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center"
          style={{ color: "var(--text-heading)" }}
        >
          Experience
        </h2>
        <p
          className="py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Perjalanan dan pengalaman yang telah saya lalui
        </p>
        <div className="section-divider mb-10" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        <div className="timeline-line" />

        {listExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className="timeline-item relative pl-14 pb-10 last:pb-0"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 150}
          >
            {/* Timeline dot */}
            <div
              className="timeline-dot"
              style={{
                background: getTypeColor(exp.type),
                boxShadow: `0 0 0 3px var(--bg-main), 0 0 0 5px ${getTypeColor(exp.type)}40`,
              }}
            />

            {/* Card */}
            <div className="glass-card p-5 md:p-6 rounded-2xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs"
                      style={{ backgroundColor: getTypeColor(exp.type) }}
                    >
                      <i className={getTypeIcon(exp.type)} />
                    </span>
                    <span
                      className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
                      style={{ color: getTypeColor(exp.type) }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-base sm:text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-sm flex items-center gap-1"
                    style={{ color: "var(--primary)" }}
                  >
                    <i className="ri-building-line text-xs" />
                    {exp.organization}
                  </p>
                </div>

                {/* Date */}
                <div
                  className="flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <i className="ri-calendar-line" />
                  {formatDate(exp.start_date)} — {formatDate(exp.end_date)}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {listExperiences.length === 0 && (
        <div className="text-center py-12">
          <i
            className="ri-briefcase-line text-5xl mb-4 block"
            style={{ color: "var(--text-secondary)" }}
          />
          <p style={{ color: "var(--text-secondary)" }}>
            Belum ada pengalaman yang ditambahkan
          </p>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
