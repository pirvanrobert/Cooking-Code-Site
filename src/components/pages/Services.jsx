import "./Services.css";

import lupaImg from "../../assets/lupaImg.png";
import globeImg from "../../assets/globeImg.png";
import screenImg from "../../assets/screenImg.png";
import settingImg from "../../assets/settingImg.png";
import statisticsImg from "../../assets/statisticsImg.png";

function Services() {
  return (
    <section className="content-container section">
      <h3>Explore the features!</h3>
      <p>“It's the job that's never started as takes longest to finish.”</p>

      <div className="display-cards row-centered card-wrapper">
        <div className="service-cards">
          <img className="icons" src={globeImg} alt="globe" />
          <h6>Create Ai Based Website</h6>
        </div>
        <div className="service-cards card-middle">
          <img className="icons" src={lupaImg} alt="lupa" />
          <h6>Write SEO Friendly Contents</h6>
        </div>
        <div className="service-cards">
          <img className="icons" src={settingImg} alt="settings" />
          <h6>Maintain site with Artificial Intelligence</h6>
        </div>
        <div className="service-cards card-middle">
          <img className="icons" src={statisticsImg} alt="statistics" />
          <h6>Response customer with analyzing data</h6>
        </div>
        <div className="service-cards">
          <img className="icons" src={screenImg} alt="screen" />
          <h6>Show custom interface with Ai</h6>
        </div>
      </div>
    </section>
  );
}

export default Services;
