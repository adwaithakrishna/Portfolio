import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiC,
  SiDjango,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML",          icon: <FaHtml5 />,       level: 90, glow: "rgba(212,96,16,0.2)"  },
    { name: "CSS",           icon: <FaCss3Alt />,     level: 85, glow: "rgba(48,96,200,0.2)"  },
    { name: "JavaScript",    icon: <FaJsSquare />,    level: 80, glow: "rgba(232,160,32,0.2)" },
    { name: "React JS",      icon: <FaReact />,       level: 82, glow: "rgba(26,128,140,0.2)" },
    { name: "Tailwind CSS",  icon: <SiTailwindcss />, level: 88, glow: "rgba(124,63,160,0.2)" },
    { name: "C Language",    icon: <SiC />,           level: 75, glow: "rgba(232,160,32,0.2)" },
    { name: "Java",          icon: <FaJava />,        level: 70, glow: "rgba(192,48,48,0.2)"  },
    { name: "Python Django", icon: <SiDjango />,      level: 72, glow: "rgba(74,124,89,0.2)"  },
  ];

  return (
    <section
      id="skills-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Purple bloom */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-80px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,63,160,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1180px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "1.8rem",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--purple-light)",
              boxShadow: "0 0 12px var(--purple-light)",
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--purple-light)",
            }}
          >
            My Expertise
          </span>
        </div>

        {/* Heading */}
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
              fontSize: "clamp(3.2rem, 5vw, 4.6rem)",
              fontWeight: 900,
              color: "var(--text-bright)",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            Technical{" "}
            <span
              style={{
                color: "var(--amber-moon)",
                fontStyle: "italic",
                textShadow: "0 0 28px rgba(232,160,32,0.5)",
              }}
            >
              Skills
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
                color: "var(--text-mid)",
              maxWidth: "320px",
              lineHeight: 1.9,
            }}
          >
            A diverse toolkit built through projects and continuous learning.
          </p>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {skills.map(({ name, icon, level, glow }) => (
            <div
              key={name}
              className="night-card"
              style={{
                padding: "2.2rem 1.9rem",
                background: "rgba(8,22,32,0.78)",
                border: "1px solid rgba(26,128,140,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${glow}, 0 8px 32px rgba(0,0,0,0.5)`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 80% 20%, ${glow} 0%, transparent 65%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  background: "rgba(232,160,32,0.07)",
                  border: "1px solid rgba(232,160,32,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.9rem",
                  marginBottom: "1.4rem",
                  color: "var(--amber-moon)",
                  boxShadow: `0 0 18px ${glow}`,
                }}
              >
                {icon}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--text-bright)",
                  marginBottom: "1.2rem",
                }}
              >
                {name}
              </h3>

              {/* Progress */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-bright)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Proficiency
                  </span>

                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--amber-moon)",
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {level}%
                  </span>
                </div>

                <div
                  style={{
                    height: "4px",
                    background: "rgba(26,128,140,0.15)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${level}%`,
                      background:
                        "linear-gradient(90deg, var(--teal-glow), var(--amber-moon))",
                      borderRadius: "4px",
                      boxShadow: "0 0 8px rgba(232,160,32,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;