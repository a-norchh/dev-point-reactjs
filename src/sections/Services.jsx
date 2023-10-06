import React from "react";
import { services } from "../constants/data";

const Services = () => {
  return (
    <section id="services" className="section__padding">
      <div className="container">
        <div className="services">
          {services.map((item) => (
            <div className="services__item">
              <div className="services__icon">
                <img src={item.img} alt="service icon" />
              </div>
              <div className="services__title">{item.title} </div>
              <div className="services__description para__text">
                {item.text}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
