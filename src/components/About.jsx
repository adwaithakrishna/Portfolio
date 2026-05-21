import React from "react";

function About() {
  const traits = [
    {
      icon: "◉",
      label: "Goal-Oriented",
      desc: "Driven by purpose and excellence",
      glow: "rgba(232,160,32,0.15)",
    },

    {
      icon: "◆",
      label: "Team Player",
      desc: "Collaborative and communicative",
      glow: "rgba(124,63,160,0.15)",
    },

    {
      icon: "▣",
      label: "Continuous Learner",
      desc: "Always growing and adapting",
      glow: "rgba(48,96,200,0.15)",
    },

    {
      icon: "✦",
      label: "Creative Thinker",
      desc: "Crafting elegant solutions",
      glow: "rgba(212,96,16,0.15)",
    },
  ];

  return (
    <section
      id="about-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Purple bloom accent */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,63,160,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
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
            gap: "14px",
            marginBottom: "2.2rem",
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
              fontSize: "0.82rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--purple-light)",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.4rem, 5.5vw, 5rem)",
            fontWeight: 900,
            color: "var(--text-bright)",
            marginBottom: "3.5rem",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
          }}
        >
          About{" "}
          <span
            style={{
              color: "var(--amber-moon)",
              fontStyle: "italic",
              textShadow: "0 0 32px rgba(232,160,32,0.5)",
            }}
          >
            Me
          </span>
        </h2>

        {/* Main card */}
        <div
          className="night-card"
          style={{
            padding: "3.8rem",
            marginBottom: "3rem",
            background: "rgba(8,22,32,0.78)",
            border: "1px solid rgba(232,160,32,0.18)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative corner glow */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              right: "-30px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(212,96,16,0.14) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.28rem",
              lineHeight: 2,
              color: "var(--text-mid)",
              fontWeight: 300,
              maxWidth: "780px",
              marginBottom: "3rem",
            }}
          >
            I am motivated to grow personally and professionally, handling
            challenges with a positive attitude. I value teamwork and
            dedication, aiming to contribute positively to the modern
            workplace through continuous learning and technical excellence.
          </p>

          {/* Quote */}
          <div
            style={{
              paddingLeft: "2rem",
              borderLeft: "2px solid var(--amber-moon)",
              boxShadow: "-4px 0 18px rgba(232,160,32,0.2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontStyle: "italic",
                color: "var(--text-bright)",
                lineHeight: 1.8,
              }}
            >
              "Building tomorrow's digital world, one line of code at a time."
            </p>
          </div>
        </div>

        {/* Traits */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {traits.map(({ icon, label, desc, glow }) => (
            <div
              key={label}
              className="night-card"
              style={{
                padding: "2.3rem",
                background: "rgba(8,22,32,0.72)",
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
                  background: `radial-gradient(circle at 80% 20%, ${glow} 0%, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ fontSize: "2.6rem", marginBottom: "18px" }}>
                {icon}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.08rem",
                  fontWeight: 600,
                  color: "var(--text-bright)",
                  letterSpacing: "0.06em",
                  marginBottom: "10px",
                }}
              >
                {label}
              </div>

              <div
                style={{
                  fontSize: "1rem",
                   color: "var(--text-mid)",
                  lineHeight: 1.8,
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              label: "Explore Skills",
              href: "#skills-page",
              primary: true,
            },
            {
              label: "Contact Me",
              href: "#contact-page",
              primary: false,
            },
          ].map(({ label, href, primary }) => (
            <a
              key={label}
              href={href}
              style={{
                display: "inline-block",
                padding: "16px 36px",
                background: primary
                  ? "linear-gradient(135deg, var(--amber-moon), var(--orange-tree))"
                  : "transparent",
                color: primary ? "#060e18" : "var(--text-mid)",
                fontFamily: "var(--font-display)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "100px",
                border: primary
                  ? "none"
                  : "1px solid rgba(232,160,32,0.3)",
                boxShadow: primary
                  ? "0 0 22px rgba(232,160,32,0.4)"
                  : "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;