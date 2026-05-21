import React from "react";

function Education() {
  return (
    <section
      id="edu-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Teal glow */}
      <div
        style={{
          position: "absolute",
          top: "20%", right: "-100px",
          width: "420px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,80,96,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1250px", width: "100%", position: "relative", zIndex: 1 }}
      >
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <div
            style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "var(--teal-glow)",
              boxShadow: "0 0 12px var(--teal-glow)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--teal-glow)",
            }}
          >
            Academic Journey
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 5vw, 4.6rem)",
            fontWeight: 900,
            color: "var(--text-bright)",
            marginBottom: "4rem",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
          }}
        >
          My{" "}
          <span
            style={{
              color: "var(--amber-moon)",
              fontStyle: "italic",
              textShadow: "0 0 28px rgba(232,160,32,0.5)",
            }}
          >
            Education
          </span>
        </h2>

        {/* Timeline */}
        <div
          className="edu-timeline"
          style={{ position: "relative", paddingLeft: "56px" }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "12px", top: 0, bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, var(--amber-moon) 0%, rgba(232,160,32,0.05) 100%)",
              boxShadow: "0 0 10px rgba(232,160,32,0.2)",
            }}
          />

          {/* Dot */}
          <div
            style={{
              position: "absolute",
              left: "1px", top: "34px",
              width: "22px", height: "22px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #ffd060, var(--amber-moon))",
              boxShadow: "0 0 18px rgba(232,160,32,0.8), 0 0 36px rgba(232,160,32,0.3)",
            }}
          />

          {/* Card */}
          <div
            className="night-card edu-card"
            style={{
              padding: "4rem",
              background: "rgba(8,22,32,0.82)",
              border: "1px solid rgba(232,160,32,0.18)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40px", right: "-40px",
                width: "220px", height: "220px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Year badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(232,160,32,0.1)",
                border: "1px solid rgba(232,160,32,0.28)",
                borderRadius: "100px",
                padding: "7px 18px",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  width: "7px", height: "7px",
                  borderRadius: "50%",
                  background: "var(--amber-moon)",
                  boxShadow: "0 0 8px var(--amber-moon)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--amber-moon)",
                }}
              >
                2024 — 2027
              </span>
            </div>

            {/* Degree */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-bright)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Diploma in Computer Engineering
            </h3>

            {/* College */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.08rem",
                fontWeight: 400,
                color: "var(--purple-light)",
                marginBottom: "1.6rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                textShadow: "0 0 16px rgba(26,80,96,0.6)",
              }}
            >
              ▣ Govt. Women's Polytechnic College, Kaimanam
            </p>

            {/* Desc */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 2,
                color: "var(--text-bright)",
                fontWeight: 300,
                maxWidth: "850px",
                marginBottom: "2rem",
              }}
            >
              Focused on software development, programming, web technologies,
              and modern computer engineering concepts with hands-on practical learning.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Software Development", "Web Technologies", "Programming", "Practical Learning"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    color: "var(--text-mid)",
                    background: "rgba(26,80,96,0.2)",
                    border: "1px solid rgba(26,128,140,0.22)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.8rem 2.2rem",
            background: "rgba(74,124,89,0.06)",
            border: "1px solid rgba(74,124,89,0.18)",
            borderRadius: "18px",
            display: "flex",
            alignItems: "flex-start",
            gap: "18px",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              color: "var(--text-bright)",
              textShadow: "0 0 10px rgba(26,128,140,0.5)",
              flexShrink: 0,
            }}
          >
            ✦
          </span>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-bright)",
              lineHeight: 1.8,
            }}
          >
            Currently in{" "}
            <strong style={{ color: "var(--text-mid)" }}>Year 2</strong>{" "}
            of a 3-year diploma, building real-world projects alongside academics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;