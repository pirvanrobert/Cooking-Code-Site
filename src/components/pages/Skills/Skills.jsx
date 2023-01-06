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
      <div className="skills-section-display">
        <div className="first-col">
          <img src={html} className="img-style" alt="" />
        </div>
        <div className="second-col css-img">
          <img src={css} className="img-style  css-img" alt="" />
        </div>
        <div className="third-col">
          <img src={js} className="img-style js-img" alt="" />
        </div>
        <div className="fourth-col">
          <img src={react} className="img-style" alt="" />
        </div>
      </div>
    </>
  );
}

export default Skills;
