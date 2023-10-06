import React from "react";

const WorkItem = (props) => {
  const { img, value, title } = props.details;

  return (
    <>
      <div className="work-item">
        <div className="i-work">
          <img src={img} alt="work icon" />
        </div>
        <div>{value}</div>
        <div>{title}</div>
      </div>
    </>
  );
};

export default WorkItem;
