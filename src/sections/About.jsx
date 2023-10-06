import React from "react";
import images from "../constants/images";

const About = () => {
  return (
    <>
      <section id="about" className="section__padding">
        <div className="container text__center">
          <div className="section__title">About Us</div>
          <p className="text__grey para__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            vitae reprehenderit veritatis doloribus sint provident vero? Ullam
            repellendus assumenda voluptate perferendis eligendi! Neque nostrum
            velit in temporibus, architecto error possimus officiis minus sit
            ipsa eveniet.
          </p>
          <img src={images.signature} alt="signature" className="signature" />
        </div>
      </section>
    </>
  );
};

export default About;
