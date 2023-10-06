import React, { useState } from "react";
import images from "../../constants/images";
import { menulist } from "../../constants/data";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggleHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar__logo">
            <a href="index.html">
              <img src={images.logo} alt="site logo" />
            </a>
          </div>
          <div className="navbar__menu">
            <ul className="navbar__menu__list">
              {menulist.map((item) => (
                <li key={item.title} className="text__upper text__light">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
            <div className="menu-btn" onClick={menuToggleHandler}>
              <FaBars color="white" fontSize="3rem" />
            </div>
          </div>

          {/* SMALL SCREEN */}
          <div className={`navbar__menu__small ${toggleMenu ? "active" : ""}`}>
            <FaTimes
              color="white"
              fontSize="3.3rem"
              className="i-close"
              onClick={menuToggleHandler}
            />
            <ul className="navbar__menu__small__list">
              {menulist.map((item) => (
                <li key={item.title} className="text__upper text__light">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
