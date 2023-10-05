import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="container hero-contain">
          <div className="hero-contain__texts">
            <h1 className="hero-contain__texts__title">
              We Design and Develop
            </h1>
            <p className="hero-contain__texts__para">
              We are a new design studio based in USA. We have over 20 years of
              combined experience, and know a thing or two about designing
              websites and mobile apps.
            </p>
            <button className="btn btn__blue">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
