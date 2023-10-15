import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const animation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section id="home">
        <div className="container hero-contain">
          <motion.div
            className="hero-contain__texts"
            variants={animation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="hero-contain__texts__title">
              We Design and Develop
            </h1>
            <p className="hero-contain__texts__para">
              We are a new design studio based in USA. We have over 20 years of
              combined experience, and know a thing or two about designing
              websites and mobile apps.
            </p>
            <button className="btn btn__blue">Contact Us</button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
