import React from "react";

const CardSection = () => {
  const projects = [
    { title: "Food Ordering System", description: "User authentication and order tracking system." },
    { title: "Voice-Based Gender Classification", description: "Machine learning project for gender recognition." },
    { title: "Library Management System", description: "Tracks and provides branch-wise book details." },
  ];

  return (
    <section id="cards" style={{ padding: "2rem", background: "#e0e0e0" }}>
      <h2 style={{ textAlign: "center" }}>My Projects</h2>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "300px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
