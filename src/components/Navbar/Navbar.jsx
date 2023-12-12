import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleSmoothScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      const offset = element.offsetTop - 50; // Adjust as needed
      scroll.scrollTo(offset, {
        smooth: "easeInOutQuart",
        duration: 500,
      });
      setToggleMenu(false);
    }
  };

  const isAIFoodRoute = location.pathname === "/aifood";
  const isLoginRoute = location.pathname === "/login";
  const isHomeRoute = location.pathname === "/";

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <RouterLink to="/">
          <img src={images.gericht} alt="app__logo" />
        </RouterLink>
      </div>
      {!isAIFoodRoute && !isLoginRoute && (
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="p__opensans">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p__opensans">
            <Link
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Menu
            </Link>
          </li>
          <li className="p__opensans">
            <Link
              activeClass="active"
              to="awards"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Awards
            </Link>
          </li>
          <li className="p__opensans">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      <div className="app__navbar-links_routes">
        {!isLoginRoute && (
          <div className="app__navbar-login">
            <RouterLink to="/login" className="p__opensans">
              Log In / SignUp
            </RouterLink>
          </div>
        )}
        {!isAIFoodRoute && (
          <div className="app__navbar-login">
            <RouterLink to="/aifood" className="p__opensans">
              AI Food
            </RouterLink>
          </div>
        )}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={handleToggleMenu}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={handleToggleMenu}
            />
            <ul className="app__navbar-smallscreen_links">
              {isAIFoodRoute && (
                <>
                  <li>
                    <RouterLink to="/" onClick={handleToggleMenu}>
                      Home
                    </RouterLink>
                  </li>
                  <li className="small_screen_only">
                    <RouterLink to="/login" onClick={handleToggleMenu}>
                      Log In / Sign Up
                    </RouterLink>
                  </li>
                </>
              )}
              {isHomeRoute && (
                <>
                  <li className="small_screen_only">
                    <RouterLink to="/login" onClick={handleToggleMenu}>
                      Log In / SignUp
                    </RouterLink>
                  </li>
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => handleSmoothScroll("home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => handleSmoothScroll("about")}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="menu"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => handleSmoothScroll("menu")}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="awards"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => handleSmoothScroll("awards")}
                    >
                      Awards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => handleSmoothScroll("contact")}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="small_screen_only">
                    <RouterLink to="/aifood" onClick={handleToggleMenu}>
                      AI Food
                    </RouterLink>
                  </li>
                </>
              )}

              {isLoginRoute && (
                <>
                  <li>
                    <RouterLink to="/" onClick={handleToggleMenu}>
                      Home
                    </RouterLink>
                  </li>
                  <li className="small_screen_only">
                    <RouterLink to="/aifood" onClick={handleToggleMenu}>
                      AI Food
                    </RouterLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
