import React from "react";

import About from "../pages/About";
import Skills from "../pages/Skills";
import ContentStrategies from "../pages/ContentStrategies";
import Services from "../pages/Services";
import Projects from "../pages/Projetcs";
import Contact from "../pages/Contact";

function AllPages() {
  return (
    <section>
      <About />
      <Skills />
      <ContentStrategies />
      <Services />
      <Projects />
      <Contact />
    </section>
  );
}

export default AllPages;
