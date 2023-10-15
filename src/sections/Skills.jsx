import React from "react";
import Skill from "../components/Skill";
import { skills } from "../constants/data";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3 * index,
      },
    }),
  };
  return (
    <section id="skills" className="section__padding">
      <div className="container">
        <div className="section__title">Professional Skills</div>
        <div className="skill-list">
          {skills.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Skill title={item.title} value={item.value} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
