import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="section__padding">
      <div className="container footer">
        <div className="footer__content">
          <div className="footer__content--item">
            <a href="#">Dev.Point Design, Inc.</a>
            <p className="para__text">
              © 2022 Dev. Point. All rights reserved. Designed by Robirurk.
            </p>
          </div>
          <div className="footer__content--item">
            <a href="mailto:a.norawich@gmail.com">a.norawich@gmail.com</a>
            <p className="para__text">0882363848</p>
          </div>
          <div className="footer__content--item">
            <h3>Project</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <h3>News</h3>
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Legals</a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/a-norchh"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/norawich-dechsiri/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
