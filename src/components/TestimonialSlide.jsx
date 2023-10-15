import React from "react";
import Slider from "react-slick";
import { testimonials } from "../constants/data";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const TestimonialSlide = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial">
            <div className="testimonial__text">
              <BiSolidQuoteLeft />
              <span> {item.text} </span>
              <BiSolidQuoteRight />
            </div>
            <div className="testimonial__name">{item.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlide;
