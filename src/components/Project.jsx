import React from "react";
import { FaBriefcase, FaLaptopCode, FaArrowUp } from "react-icons/fa";

function Project() {
  const projects = [
    {
      title: "Smart Online Hiring Portal",
      description:
        "A modern hiring platform designed to connect recruiters and job seekers with an elegant user experience.",
      tech: ["HTML", "Django"],
      icon: <FaBriefcase />,
      num: "01",
      glow: "rgba(232,160,32,0.14)",
      accent: "var(--amber-moon)",
    },
    {
      title: "Portfolio Website",
      description:
        "A futuristic glassmorphism portfolio with smooth animations and responsive modern design.",
      tech: ["React", "Tailwind CSS"],
      icon: <FaLaptopCode />,
      num: "02",
      glow: "rgba(124,63,160,0.14)",
      accent: "var(--purple-light)",
    },
  ];

  return (
    <section
      id="projects-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Amber glow */}
      <div
        style={{
          position: "absolute",
          top: "15%", right: "-80px",
          width: "420px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", width: "100%", position: "relative", zIndex: 1 }}
      >
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <div
            style={{
              width: "7px", height: "7px",
              borderRadius: "50%",
              background: "var(--orange-tree)",
              boxShadow: "0 0 14px var(--orange-tree)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--orange-tree)",
            }}
          >
            Creative Works
          </span>
        </div>

        {/* Heading + subtitle */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
              fontWeight: 900,
              color: "var(--text-bright)",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            Featured{" "}
            <span
              style={{
                color: "var(--amber-moon)",
                fontStyle: "italic",
                textShadow: "0 0 30px rgba(232,160,32,0.5)",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-mid)",
              maxWidth: "340px",
              lineHeight: 1.9,
            }}
          >
            Modern projects focused on futuristic UI design and responsive experiences.
          </p>
        </div>

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className="night-card"
              style={{
                background: "rgba(8,22,32,0.82)",
                border: "1px solid rgba(232,160,32,0.15)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 60px ${p.glow}, 0 8px 40px rgba(0,0,0,0.6)`;
                e.currentTarget.style.borderColor =
                  p.accent === "var(--amber-moon)"
                    ? "rgba(232,160,32,0.35)"
                    : "rgba(124,63,160,0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(232,160,32,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Inner glow */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(ellipse at 90% 10%, ${p.glow} 0%, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Responsive inner grid */}
              <div
                className="project-card-inner"
                style={{
                  padding: "3.2rem",
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 70px",
                  gap: "2.5rem",
                  alignItems: "center",
                }}
              >
                {/* Number + Icon */}
                <div
                  className="project-num-icon"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.82rem",
                      color: "var(--text-dim)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {p.num}
                  </span>
                  <div
                    style={{
                      width: "72px", height: "72px",
                      borderRadius: "20px",
                      background: "rgba(232,160,32,0.08)",
                      border: "1px solid rgba(232,160,32,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                      color: "var(--amber-moon)",
                      boxShadow: `0 0 24px ${p.glow}`,
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="project-title"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                      fontWeight: 700,
                      color: "var(--text-bright)",
                      marginBottom: "1rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.05rem",
                      lineHeight: 1.9,
                      color: "var(--text-dim)",
                      fontWeight: 300,
                      marginBottom: "1.4rem",
                      maxWidth: "700px",
                    }}
                  >
                    {p.description}
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                          color: p.accent === "var(--amber-moon)" ? "var(--amber-moon)" : "var(--purple-light)",
                          background: p.accent === "var(--amber-moon)" ? "rgba(232,160,32,0.1)" : "rgba(124,63,160,0.1)",
                          border: `1px solid ${p.accent === "var(--amber-moon)" ? "rgba(232,160,32,0.2)" : "rgba(124,63,160,0.2)"}`,
                          borderRadius: "100px",
                          padding: "6px 16px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <a
                  href="#"
                  className="project-arrow"
                  style={{
                    width: "58px", height: "58px",
                    borderRadius: "50%",
                    border: "1px solid rgba(232,160,32,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-mid)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "var(--amber-moon)";
                    e.target.style.color = "#060e18";
                    e.target.style.boxShadow = "0 0 24px rgba(232,160,32,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "var(--text-mid)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <FaArrowUp style={{ transform: "rotate(45deg)" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;