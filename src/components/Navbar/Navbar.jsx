import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar sticky-top">
      <div className="app__navbar-logo">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="scroll"
        >
          <img src={images.gericht} alt="logo" />
        </ScrollLink>
      </div>
      <div className="app__navbar-links p__opensans">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="scroll"
        >
          Home
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="scroll"
        >
          About
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="menu"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="scroll"
        >
          Menu
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="awards"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="scroll"
        >
          Awards
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="scroll"
        >
          Contact
        </ScrollLink>
      </div>
      <div className="app_navbar-login p__opensans">
        <a href="#">Log In / Register</a>
        <div />
        <Link to="#">Book Table</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              onClick={() => {
                setToggleMenu(false);
              }}
              className="overlay__close"
            />
            <ul className="app__navbar-smallscreen-links p__opensans">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/awards">Awards</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
