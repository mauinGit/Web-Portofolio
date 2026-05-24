import { useState, useMemo } from "react";
import { listProyek } from "../data";

const ProjectsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTech, setFilterTech] = useState("All");

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    listProyek.forEach((p) => p.tools.forEach((t) => techSet.add(t)));
    return ["All", ...Array.from(techSet).sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return listProyek.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desk.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTech =
        filterTech === "All" || project.tools.includes(filterTech);
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, filterTech]);

  // Featured first
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return 0;
    });
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-16 lg:py-24">
      {/* Section Header */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center"
          style={{ color: "var(--text-heading)" }}
        >
          My Projects
        </h2>
        <p
          className="py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Berikut adalah project yang sudah saya kerjakan
        </p>
        <div className="section-divider mb-8" />
      </div>

      {/* Search & Filter */}
      <div
        className="flex flex-col sm:flex-row gap-4 mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        {/* Search */}
        <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
          <i
            className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--text-secondary)" }}
          />
          <input
            type="text"
            placeholder="Cari project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            id="project-search"
          />
        </div>

        {/* Tech Filter */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilterTech(tech)}
              className={`filter-btn text-xs ${
                filterTech === tech ? "active" : ""
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedProjects.map((proyek, index) => (
          <div
            className="glass-card rounded-2xl overflow-hidden group"
            key={proyek.id}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="object-cover w-full h-[180px] sm:h-[220px] md:h-[180px] lg:h-[220px] group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                {proyek.github_url && (
                  <a
                    href={proyek.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="GitHub Repository"
                  >
                    <i className="ri-github-fill text-lg text-gray-800" />
                  </a>
                )}
                {proyek.demo_url && (
                  <a
                    href={proyek.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Live Demo"
                  >
                    <i className="ri-external-link-line text-lg text-gray-800" />
                  </a>
                )}
              </div>
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {proyek.is_featured && (
                  <span className="badge badge-featured">
                    <i className="ri-star-fill mr-1" />
                    Featured
                  </span>
                )}
                <span
                  className={`badge ${
                    proyek.status === "Completed"
                      ? "badge-completed"
                      : "badge-in-progress"
                  }`}
                >
                  {proyek.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {proyek.nama}
              </h3>
              <p
                className="text-xs sm:text-sm mb-4 line-clamp-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {proyek.desk}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      color: "var(--primary)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {sortedProjects.length === 0 && (
        <div className="text-center py-16">
          <i
            className="ri-folder-open-line text-5xl mb-4 block"
            style={{ color: "var(--text-secondary)" }}
          />
          <p
            className="text-lg font-medium mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Project tidak ditemukan
          </p>
          <p style={{ color: "var(--text-secondary)" }} className="text-sm">
            Coba ubah kata kunci pencarian atau filter
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
