import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import WorkExperience from "./sections/Experience";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";


const App = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};


export default App;
