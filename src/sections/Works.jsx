import React from "react";
import { stats } from "../constants/data";
import WorkItem from "../components/WorkItem";

const Works = () => {
  return (
    <>
      <section id="works" className="section__padding">
        <div className="container">
          <div className="work-list">
            {stats.map((item) => (
              <WorkItem key={item.title} details={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
