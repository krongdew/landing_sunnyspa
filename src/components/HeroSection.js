import React from "react";
import "./Herosection.css";
import { Button } from "./Button";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/spa1.mp4" autoPlay loop muted />
      <h1>RELAXATION AWAITS</h1>
      <p>What are you wating for?</p>
      <div className="hero-btns">
        <Button
          to="/Services"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          to="/Book"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          BOOK NOW <i className="fa-regular fa-circle-play"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
