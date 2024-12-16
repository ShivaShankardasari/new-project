import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #333, #00bcd4)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Headline/Tagline */}
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Hi, I'm <span style={{ color: "#FFD700" }}>Shiva Shanker Dasari</span>
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "600px" }}>
        A passionate software developer with expertise in React.js, Java, Python, and
        full-stack web development. I love building innovative solutions that
        make an impact.
      </p>

      {/* Call-to-Actions */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="#cards"
          style={{
            padding: "0.8rem 1.5rem",
            background: "#FFD700",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          style={{
            padding: "0.8rem 1.5rem",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
