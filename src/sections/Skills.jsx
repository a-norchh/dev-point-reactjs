import React from "react";
import Skill from "../components/Skill";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <section id="skills" className="section__padding">
      <div className="container">
        <div className="section__title">Professional Skills</div>
        <div className="skill-list">
          {skills.map((item) => (
            <Skill title={item.title} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
