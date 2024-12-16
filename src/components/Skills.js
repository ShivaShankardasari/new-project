import React from "react";

const Skills = () => {
  const skills = [
    "C/C++",
    "Python",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Bootstrap",
  ];

  return (
    <section id="skills" style={{ padding: "2rem", backgroundColor: "#f0f8ff" }}>
      <h2>My Skills</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "1rem", padding: "0" }}>
        {skills.map((skill, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
