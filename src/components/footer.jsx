import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about-page" },
    { label: "Education", href: "#edu-page" },
    { label: "Projects", href: "#projects-page" },
    { label: "Skills", href: "#skills-page" },
    { label: "Contact", href: "#contact-page" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, transparent 0%, #030a10 100%)",
        borderTop: "1px solid rgba(232,160,32,0.12)",
        padding: "90px 60px 40px",
        fontFamily: "var(--font-body)",
        overflow: "hidden",
      }}
    >
      {/* Fog layer */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background:
            "linear-gradient(0deg, rgba(13,43,53,0.4) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top amber line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "55%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(232,160,32,0.5), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1350px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "4rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand */}
          <div style={{ flex: "1", minWidth: "320px" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "var(--amber-moon)",
                textShadow: "0 0 28px rgba(232,160,32,0.4)",
                marginBottom: "12px",
              }}
            >
              Adwaitha Krishna A S
            </div>

            <div
              style={{
                fontSize: "0.82rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--teal-glow)",
                marginBottom: "22px",
              }}
            >
              Computer Engineering Student
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "var(--text-dim)",
                maxWidth: "360px",
              }}
            >
              Crafting modern digital experiences under the moonlit sky of
              technology.
            </p>

            {/* Glowing flowers */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "28px",
              }}
            >
              {["#7c3fa0", "#3060c8", "#c03030"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: c,
                    boxShadow: `0 0 12px ${c}, 0 0 24px ${c}60`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ minWidth: "220px" }}>
            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--amber-moon)",
                marginBottom: "24px",
                fontFamily: "var(--font-display)",
              }}
            >
              Navigate
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      color: "var(--text-dim)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "color 0.2s, text-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "var(--amber-moon)";
                      e.target.style.textShadow =
                        "0 0 10px rgba(232,160,32,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "var(--text-dim)";
                      e.target.style.textShadow = "none";
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ minWidth: "300px" }}>
            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--amber-moon)",
                marginBottom: "24px",
                fontFamily: "var(--font-display)",
              }}
            >
              Reach Out
            </div>

            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6H20V18H4V6Z"
                      stroke="#e8a020"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7L12 13L20 7"
                      stroke="#e8a020"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                text: "example2000@gmail.com",
                href: "mailto:example2000@gmail.com",
              },

              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15.5 14.5L13 17C9 15 6 12 4 8L6.5 5.5L9 7L8 10C9.2 12 11 13.8 13 15L15.5 14.5Z"
                      stroke="#b06cff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                text: "+91 0022334455",
                href: "tel:+910022334455",
              },

              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21C12 21 18 15 18 10A6 6 0 1 0 6 10C6 15 12 21 12 21Z"
                      stroke="#24c8c8"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2"
                      stroke="#24c8c8"
                      strokeWidth="1.8"
                    />
                  </svg>
                ),
                text: "Kerala, India",
                href: "#",
              },
            ].map(({ icon, text, href }) => (
              <a
                key={text}
                href={href}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  marginBottom: "18px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-bright)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-dim)";
                }}
              >
                <span>{icon}</span>
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(232,160,32,0.1)",
            marginBottom: "30px",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-dim)",
            }}
          >
            © {year} Adwaitha Krishna A S. All rights reserved.
          </p>

          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-dim)",
            }}
          >
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;