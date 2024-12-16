import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutme" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2>About Me</h2>
      <p>
        <strong>Education Details:</strong>
      </p>
      <ul>
        <li>
          <strong>B.Tech:</strong> Computer Science and Engineering, Jawaharlal Nehru Technological University College of Engineering Manthani, CGPA: 7.4/10
        </li>
        <li>
          <strong>Class XII:</strong> Excel Junior College, Percentage: 96%
        </li>
        <li>
          <strong>Class X:</strong> Jaya IIT Olympiad High School, CGPA: 9.8/10
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
