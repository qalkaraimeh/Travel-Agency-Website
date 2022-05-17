import React from "react";
import "./HeroSection.css";
import Button from "../Button/Button";
const HeroSection = () => {
  // const sources = ["videos/sunset.mp4", "videos/camel-girl.mp4"];
  return (
    <div>
      <video className="background-video" autoPlay muted loop>
        <source src="videos/sea.mp4" type="video/mp4" />
      </video>
      <div className="hero-section">
        <h1>Adventure Awaits </h1>
        <h2>What are you waiting for?</h2>
        <div className="hero-btns">
          <Button content="Get Started" btnStyle="btn-outline"></Button>
          <Button content="Watch Trailer" btnStyle="btn-light"></Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
