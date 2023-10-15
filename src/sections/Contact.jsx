import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section__padding">
      <div className="container text__center">
        <div className="section__title">Need a Project?</div>
        <div className="para__text">
          Let us know what you're looking for in an agency. We'll take a look
          and see if this could be the start of something beautiful.
        </div>
        <form action="#" className="form">
          <div className="form__elem form__elem--1">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form__elem form__elem--2">
            <input type="text" placeholder="Your Title" />
          </div>
          <div className="form__elem form__elem--3">
            <textarea
              name=""
              id=""
              rows="6"
              placeholder="Your Comment"
            ></textarea>
          </div>
          <button className="btn btn__blue">send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
