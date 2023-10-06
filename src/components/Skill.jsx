import React from "react";

const Skill = ({ title, value }) => {
  return (
    <>
      <div className="skill-item">
        <div className="skill-item__title">
          {title} ({value})
        </div>
        <div className="skill-item__bar">
          <div
            className="skill-item__bar__active"
            style={{ width: `${value}` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Skill;
