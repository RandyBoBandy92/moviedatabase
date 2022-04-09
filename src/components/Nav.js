import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      {/* Mobile Nav */}
      <nav className={`mobile-nav${navOpen ? " active" : ""}`}>
        <div onClick={() => showHideNav()} className="nav-component">
          <div className="hamburger-menu">
            <span className="hamburger-line"></span>
          </div>
        </div>
        <ul>
          <li className="nav-component home-link">
            <Link
              aria-label="navigate to the home page"
              className="link"
              to="/"
            >
              <ImHome3 className="nav-icon" />
            </Link>
          </li>
          <li className="nav-component favourites-link">
            <Link
              aria-label="navigate to the favourites page"
              className="link"
              to="/favourites"
            >
              <IoMdHeart className="nav-icon" />
            </Link>
          </li>
          <li className="nav-component about-link">
            <Link
              aria-label="navigate to the about page"
              className="link"
              to="/about"
            >
              <FaQuestion className="nav-icon" />
            </Link>
          </li>
        </ul>
      </nav>
      {/* END Mobile Nav */}
      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <ul>
          <li>
            <Link className="focus-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="focus-link" to="/favourites">
              Favourites
            </Link>
          </li>
          <li>
            <Link className="focus-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      {/* End Desktop Nav */}
    </>
  );
};

export default Nav;
