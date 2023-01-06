import React from "react";
import "./ContentStrategies.css";
import ContentStrategiesImgLaptop from "../../../assets/ContentStrategiesImgLaptop.png";
import ContentStrategiesImgBuilding from "../../../assets/ContentStrategiesImgBuilding.png";
import ContentStrategiesImgMeeting from "../../../assets/ContentStrategiesImgMeeting.png";

function ContentStrategies() {
  return (
    <section className="row section-cards ">
      <div>
        <h2 className="main-header">Contents Strategies</h2>
        <p className="header-paragraph">
          We focus on ergonomics and meeting you where you are. It's only a
          keystroke away.
        </p>

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
              <h3>Success Steps For Your Personal Or Business</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentStrategies;
