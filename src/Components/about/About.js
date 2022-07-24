import React from 'react';
import Me1 from "../../images/me1.jpg"
import "./about.css";
import Award from "../../images/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me1}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Not much to say. I am just another engineer with huge dreams, trying my best to achieve huge success in my field .
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Push-ups Competition runner up medal</h4>
            <p className="a-award-desc">
              Was a tough competition! But still managed to secure a great position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;