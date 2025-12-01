import React from "react";
import Hero from "./hero/Hero";
import Footer from "../footer/Footer";
import About from "./about/About";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home: React.FC = () => {
  return (
    <>
      <main>
        {/* Background Ambient Light */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-sky-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="fixed top-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
