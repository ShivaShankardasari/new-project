import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        padding: "1rem",
        background: "#333",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p>&copy; 2024 Shiva Shanker Dasari. All Rights Reserved.</p>
      <div style={{ marginTop: "1rem" }}>
        <p>Email: <a href="mailto:shivadasari577@gmail.com" style={{ color: "#FFD700", textDecoration: "none" }}>shivadasari577@gmail.com</a></p>
        <p>Phone: <a href="tel:+918978060110" style={{ color: "#FFD700", textDecoration: "none" }}>+91 8978060110</a></p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/shiva-shanker-dasari"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFD700", textDecoration: "none" }}
          >
            Shiva Shanker Dasari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
