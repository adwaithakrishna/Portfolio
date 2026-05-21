import React from "react";

function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "example2000@gmail.com",
      link: "mailto:example2000@gmail.com",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
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
      label: "Write to me",
      glow: "rgba(232,160,32,0.15)",
    },

    {
      title: "Phone",
      value: "+91 0022334455",
      link: "tel:+910022334455",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M15.5 14.5L13 17C9 15 6 12 4 8L6.5 5.5L9 7L8 10C9.2 12 11 13.8 13 15L15.5 14.5Z"
            stroke="#b06cff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Call me",
      glow: "rgba(124,63,160,0.15)",
    },

    {
      title: "Location",
      value: "Kerala, India",
      link: "#",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
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
      label: "Find me here",
      glow: "rgba(26,128,140,0.15)",
    },
  ];

  return (
    <section
      id="contact-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glowing bloom */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
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
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--amber-moon)",
              boxShadow: "0 0 12px var(--amber-moon)",
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--amber-moon)",
            }}
          >
            Contact
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.2rem, 5vw, 4.8rem)",
            fontWeight: 900,
            color: "var(--text-bright)",
            marginBottom: "1.4rem",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
          }}
        >
          Let's{" "}
          <span
            style={{
              color: "var(--amber-moon)",
              fontStyle: "italic",
              textShadow: "0 0 28px rgba(232,160,32,0.5)",
            }}
          >
            Connect
          </span>
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.12rem",
              color: "var(--text-mid)",
            marginBottom: "4rem",
            fontWeight: 300,
            lineHeight: 1.9,
            maxWidth: "700px",
          }}
        >
          Feel free to reach out for collaborations, projects,
          internships, or just to say hello. I'd love to hear
          from you.
        </p>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {contacts.map(
            ({ title, value, link, icon, label, glow }) => (
              <a
                key={title}
                href={link}
                className="night-card"
                style={{
                  padding: "2.6rem",
                  background: "rgba(8,22,32,0.78)",
                  border: "1px solid rgba(232,160,32,0.15)",
                  textDecoration: "none",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 50px ${glow}, 0 8px 40px rgba(0,0,0,0.6)`;
                  e.currentTarget.style.transform =
                    "translateY(-5px)";
                  e.currentTarget.style.borderColor =
                    "rgba(232,160,32,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(232,160,32,0.15)";
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
                    width: "68px",
                    height: "68px",
                    borderRadius: "18px",
                    background: "rgba(232,160,32,0.08)",
                    border:
                      "1px solid rgba(232,160,32,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.9rem",
                    marginBottom: "1.5rem",
                    boxShadow: `0 0 20px ${glow}`,
                  }}
                >
                  {icon}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--amber-moon)",
                    marginBottom: "10px",
                  }}
                >
                  {label}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "var(--text-bright)",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "var(--text-dim)",
                    wordBreak: "break-word",
                    lineHeight: 1.7,
                  }}
                >
                  {value}
                </p>
              </a>
            )
          )}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(8,22,32,0.95), rgba(12,30,44,0.9))",
            border:
              "1px solid rgba(232,160,32,0.22)",
            borderRadius: "var(--radius)",
            padding: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 0 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(232,160,32,0.14) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <a
            href="mailto:example2000@gmail.com"
            style={{
              display: "inline-block",
              padding: "16px 40px",
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
                "0 0 28px rgba(232,160,32,0.5), 0 4px 24px rgba(0,0,0,0.5)",
              transition: "all 0.25s",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform =
                "translateY(-2px)";
              e.target.style.boxShadow =
                "0 0 44px rgba(232,160,32,0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform =
                "translateY(0)";
              e.target.style.boxShadow =
                "0 0 28px rgba(232,160,32,0.5), 0 4px 24px rgba(0,0,0,0.5)";
            }}
          >
            Send a Message →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;