import React from "react";
import "./ContentStrategies.css";
import ContentStrategiesImgLaptop from "../../../assets/ContentStrategiesImgLaptop.png";
import ContentStrategiesImgBuilding from "../../../assets/ContentStrategiesImgBuilding.png";
import ContentStrategiesImgMeeting from "../../../assets/ContentStrategiesImgMeeting.png";

function ContentStrategies() {
  return (
    <section className="row section-cards ">
      <div>
        <div>
          <h2 className="main-header">Contents Strategies</h2>
          <p className="header-paragraph">
            We focus on developing your ideeas. Never give up to your dreams.
          </p>
        </div>

        <div className="row flex-col-md">
          <div className="card">
            <img
              className="images"
              src={ContentStrategiesImgLaptop}
              alt="Laptop Pic"
            />
            <div className="img-description-wrapper">
              <p>
                By <span>Robert Pirvan </span> | 01 January 2023
              </p>
              <h3>Increasing Prosperity With Positive Thinking</h3>
            </div>
          </div>

          <div className="card card-middle">
            <img
              className="images"
              src={ContentStrategiesImgMeeting}
              alt="Meeting"
            />
            <div className="img-description-wrapper">
              <p>
                By <span>Robert Pirvan </span> | 01 January 2023
              </p>
              <h3>Motivation Is The First Step To Success</h3>
            </div>
          </div>

          <div className="card">
            <img
              className="images"
              src={ContentStrategiesImgBuilding}
              alt="Building"
            />
            <div className="img-description-wrapper">
              <p>
                By <span>Robert Pirvan </span> | 01 January 2023
              </p>
              <h3>
                The journey is hard, <br /> but with small steps you can touch
                the sky
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentStrategies;
