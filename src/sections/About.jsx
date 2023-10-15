import React from "react";
import images from "../constants/images";
import { motion } from "framer-motion";

const About = () => {
  const toTop = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section id="about" className="section__padding">
        <motion.div
          className="container text__center"
          variants={toTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section__title">About Us</div>
          <p className="text__grey para__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            vitae reprehenderit veritatis doloribus sint provident vero? Ullam
            repellendus assumenda voluptate perferendis eligendi! Neque nostrum
            velit in temporibus, architecto error possimus officiis minus sit
            ipsa eveniet.
          </p>
          <img src={images.signature} alt="signature" className="signature" />
        </motion.div>
      </section>
    </>
  );
};

export default About;
