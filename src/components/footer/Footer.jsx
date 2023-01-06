import React from "react";
import "./Footer.css";
import mobile from "../../assets/mobile.png";
import whats from "../../assets/whats.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <section className="footer-position">
      <div className="footer">
        <div className="footer-first2">
          <div className="footer-column">
            <div>
              <h1>👨‍🍳 Cooding Code</h1>
            </div>
            <div className="footer-first-column">
              <a href="tel://+40744862118">
                <img src={mobile} className="mobile" alt="" />
              </a>
              <a
                href="https://wa.me/+40744862118"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whats} className="whats" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/pirvan-robert-07655a1b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="linkedin" alt="" />
              </a>

              <a
                href="https://github.com/pirvanrobert"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="github" alt="" />
              </a>
            </div>
          </div>
          <div className="footer-second-column">
            <Link className="remove-format-footer" to="/">
              <p>Home</p>
            </Link>
            <Link className="remove-format-footer" to="/About-us">
              <p>About Us</p>
            </Link>
          </div>
        </div>
        <div className="footer-first2">
          <div className="footer-second-column">
            <Link className="remove-format-footer" to="/Contact">
              <p>Contact</p>
            </Link>
            <Link className="remove-format-footer" to="/Clients">
              <p>Testimonials</p>
            </Link>
          </div>
          <div className="footer-last-column">
            <Link className="remove-format-footer">
              <p>Privacy</p>
            </Link>

            <Link className="remove-format-footer">
              <p>
                {" "}
                All right reserved <br /> © 👨‍🍳 Cooking Code
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
