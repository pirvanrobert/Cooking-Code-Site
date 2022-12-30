import "./About.css";
import photo from "../../assets/photo.jpg";

function About() {
  return (
    <div className="description-section">
      <div className="content-left-col">
        <img src={photo} alt="Robert Pic" className="photo" />
      </div>
      <div className="about-me content-right-col">
        <h3>My name is Robert Pirvan</h3>
        <p>
          Junior Front-End Developer and Tech enthusiast with little experience
          building Web and cross-platform solutions in diverse areas of
          industry. <br />
          Tech never stay the same. Human evolve non-stop witch mean tech time
          fly and continue to impress. Passionate about developing - the best
          reward I find doing my job.
        </p>
        <span>No pain - No Gain.</span>
      </div>
    </div>
  );
}

export default About;
