import "./App.css";
import Navbar from "./components/navBar/NavBar";
import AllPages from "./components/pages/AllPages";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projetcs";
import Services from "./components/pages/Services";
import Skills from "./components/pages/Skills";
import ContentStrategies from "./components/pages/ContentStrategies";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<AllPages />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/ContentStrategies" element={<ContentStrategies />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
