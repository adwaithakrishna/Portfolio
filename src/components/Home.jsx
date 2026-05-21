import React, { useEffect, useRef } from "react";
import character from "../assets/character.webp";

/* Firefly component */
function Fireflies() {
  const flies = [
    { left: "15%", top: "60%", delay: "0s", duration: "7s" },
    { left: "78%", top: "55%", delay: "2s", duration: "9s" },
    { left: "45%", top: "72%", delay: "4s", duration: "6s" },
    { left: "30%", top: "80%", delay: "1s", duration: "11s" },
    { left: "65%", top: "68%", delay: "3.5s", duration: "8s" },
    { left: "88%", top: "75%", delay: "5s", duration: "10s" },
    { left: "10%", top: "78%", delay: "2.5s", duration: "7.5s" },
  ];

  return (
    <>
      {flies.map((f, i) => (
        <div
          key={i}
          className="firefly"
          style={{
            left: f.left,
            top: f.top,
            animationDuration: f.duration,
            animationDelay: f.delay,
          }}
        />
      ))}
    </>
  );
}

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";

    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="home-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        marginTop: "0",
        marginBottom: "0",
        border: "none",
      }}
    >
      <Fireflies />

      {/* Hero content */}
      <div
        ref={heroRef}
        style={{
          maxWidth: "1250px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left Side */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "2.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--amber-moon)",
                boxShadow: "0 0 12px var(--amber-moon)",
              }}
            />

            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--amber-moon)",
                textShadow: "0 0 12px rgba(232,160,32,0.5)",
              }}
            >
              Computer Engineering Student
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.6rem, 5.5vw, 5.4rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "var(--text-bright)",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
          >
            Adwaitha
            <br />
            <span
              style={{
                color: "var(--amber-moon)",
                textShadow: "0 0 35px rgba(232,160,32,0.55)",
                fontStyle: "italic",
              }}
            >
              Krishna
            </span>{" "}
            A S
          </h1>

          {/* Divider */}
          <div
            style={{
              width: "90px",
              height: "2px",
              marginBottom: "2rem",
              background:
                "linear-gradient(90deg, var(--amber-moon), rgba(232,160,32,0.2))",
              boxShadow: "0 0 10px rgba(232,160,32,0.4)",
            }}
          />

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.2rem",
              lineHeight: 2.1,
              color: "var(--text-mid)",
              fontWeight: 300,
              marginBottom: "3.2rem",
              maxWidth: "520px",
            }}
          >
            Passionate about modern web development, UI/UX design, and
            building creative digital experiences with React, Tailwind CSS,
            and JavaScript.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1.4rem",
              flexWrap: "wrap",
            }}
          >
            {/* Primary */}
            <a
              href="#projects-page"
              style={{
                display: "inline-block",
                padding: "17px 42px",
                background:
                  "linear-gradient(135deg, var(--amber-moon), var(--orange-tree))",
                color: "#060e18",
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "100px",
                boxShadow:
                  "0 0 28px rgba(232,160,32,0.45), 0 4px 20px rgba(0,0,0,0.5)",
                transition: "all 0.25s",
              }}
            >
              View Projects
            </a>

            {/* Secondary */}
            <a
              href="#contact-page"
              style={{
                display: "inline-block",
                padding: "16px 42px",
                background: "transparent",
                color: "var(--text-mid)",
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "100px",
                border: "1px solid rgba(232,160,32,0.35)",
                transition: "all 0.25s",
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "4rem",
              marginTop: "4.5rem",
            }}
          >
            {[
              { num: "2", label: "Projects" },
              { num: "8+", label: "Skills" },
              { num: "2027", label: "Graduating" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.6rem",
                    fontWeight: 900,
                    color: "var(--amber-moon)",
                    textShadow:
                      "0 0 18px rgba(232,160,32,0.45)",
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                    marginTop: "4px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "430px",
              height: "520px",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: "-30px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(212,96,16,0.22) 0%, rgba(124,63,160,0.12) 50%, transparent 75%)",
                filter: "blur(35px)",
              }}
            />

            {/* Image Card */}
            <div
              className="night-card"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "30px",
                overflow: "hidden",
                border: "1px solid rgba(232,160,32,0.25)",
                boxShadow:
                  "0 0 60px rgba(0,0,0,0.7), 0 0 35px rgba(212,96,16,0.15)",
              }}
            >
              <img
                src={character}
                alt="Adwaitha Krishna A S"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(6,14,24,0.75) 100%)",
                }}
              />

              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  background: "rgba(6,14,24,0.82)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(232,160,32,0.2)",
                  borderRadius: "16px",
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>✨</span>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text-bright)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Open to Opportunities
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    Internships & Projects
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: "auto",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#60d080",
                    boxShadow: "0 0 10px #60d080",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;