import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "About",     id: "about-page" },
    { label: "Education", id: "edu-page" },
    { label: "Projects",  id: "projects-page" },
    { label: "Skills",    id: "skills-page" },
    { label: "Contact",   id: "contact-page" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "12px 48px" : "22px 48px",
          background: scrolled ? "rgba(6,14,24,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232,160,32,0.12)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
          transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Logo */}
        <a
          href="#home-page"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M19 13.5A8.5 8.5 0 1 1 8.5 3a6.5 6.5 0 0 0 10.5 10.5z"
              fill="none" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round"
            />
          </svg>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)",
            fontWeight: 700,
            color: "var(--amber-moon)",
            letterSpacing: "0.12em",
            textShadow: "0 0 16px rgba(232,160,32,0.5)",
          }}>
            Adwaitha Krishna
          </span>
        </a>

        {/* Desktop links */}
        <ul
          className="navbar-links"
          style={{ display: "flex", gap: "2.2rem", listStyle: "none", alignItems: "center" }}
        >
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-mid)",
                  textDecoration: "none",
                  transition: "color 0.25s, text-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--amber-moon)";
                  e.target.style.textShadow = "0 0 12px rgba(232,160,32,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--text-mid)";
                  e.target.style.textShadow = "none";
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          className="navbar-hire-btn"
          href="#contact-page"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#060e18",
            background: "linear-gradient(135deg, var(--amber-moon), var(--orange-tree))",
            padding: "9px 22px",
            borderRadius: "100px",
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(232,160,32,0.35), 0 4px 16px rgba(0,0,0,0.4)",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 30px rgba(232,160,32,0.6), 0 4px 24px rgba(0,0,0,0.5)";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 20px rgba(232,160,32,0.35), 0 4px 16px rgba(0,0,0,0.4)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Hire Me
        </a>

        {/* Hamburger button */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "1px solid rgba(232,160,32,0.35)",
            borderRadius: "10px",
            padding: "8px 10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--amber-moon)",
              borderRadius: "2px",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="navbar-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Amber glow dot */}
        <div style={{
          width: "60px", height: "60px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,160,32,0.3), transparent 70%)",
          marginBottom: "1rem",
        }} />

        {links.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleNavClick}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-mid)",
              textDecoration: "none",
              transition: "color 0.2s, text-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "var(--amber-moon)";
              e.target.style.textShadow = "0 0 12px rgba(232,160,32,0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "var(--text-mid)";
              e.target.style.textShadow = "none";
            }}
          >
            {label}
          </a>
        ))}

        <a
          href="#contact-page"
          onClick={handleNavClick}
          style={{
            marginTop: "1rem",
            fontFamily: "var(--font-display)",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#060e18",
            background: "linear-gradient(135deg, var(--amber-moon), var(--orange-tree))",
            padding: "14px 36px",
            borderRadius: "100px",
            textDecoration: "none",
            boxShadow: "0 0 24px rgba(232,160,32,0.5)",
          }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}

export default Navbar;