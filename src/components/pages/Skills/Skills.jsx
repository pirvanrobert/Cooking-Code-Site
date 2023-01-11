import "./Skills.css";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import react from "../../../assets/react.png";

function Skills() {
  return (
    <>
      <div>
        <h4>Skills</h4>
      </div>
      <div className="skills-section-display ">
        <div className="first-col skills-card">
          <img src={html} className="img-style" alt="" />
          <h5>
            <p>div </p>
            <p> ...h1... This is a heading in a div element ...h1...</p>
            <p>This is some text in a div element.</p>
            <p>div </p>
          </h5>
        </div>
        <div className="second-col css-img skills-card">
          <img src={css} className="img-style  css-img" alt="" />
          <p>div </p>
          <p className="styled-p">This is a styled text in a div element.</p>
          <p>div </p>
        </div>
        <div className="third-col skills-card">
          <img src={js} className="img-style js-img" alt="" />
          <p className="js-parag">const greeting = "Hello, Visitors!";</p>
          <p>console.log(greeting);</p>
        </div>
        <div className="fourth-col skills-card">
          <img src={react} className="img-style" alt="" />
          <p>
            import React from 'react'; <br />
            <p>
              {" "}
              const MyComponent () <br />
              return Hello, React!; <br />
            </p>
            export default MyComponent;
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
