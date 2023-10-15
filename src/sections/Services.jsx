import React from "react";
import { services } from "../constants/data";
import { motion } from "framer-motion";

const Services = () => {
  const fadeInAnimate = {
    initial: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section__padding">
      <div className="container">
        <div className="services">
          {services.map((item) => (
            <motion.div
              key={item.title}
              className="services__item"
              variants={fadeInAnimate}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="services__icon">
                <img src={item.img} alt="service icon" />
              </div>
              <div className="services__title">{item.title} </div>
              <div className="services__description para__text">
                {item.text}{" "}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
