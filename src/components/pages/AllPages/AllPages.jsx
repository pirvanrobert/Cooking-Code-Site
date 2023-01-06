import React from "react";

import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import ContentStrategies from "../ContentStategies/ContentStrategies";
import Services from "../../pages/Servicies/Services";
import Projects from "../../pages/Projec/Projects";
import Contact from "../../pages/Contact/Contact";

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
