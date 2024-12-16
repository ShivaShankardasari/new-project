import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"; // Import the Skills component
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills /> {/* Add Skills section */}
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
