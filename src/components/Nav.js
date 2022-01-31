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
            <Link className="link" to="/">
              <ImHome3 className="nav-icon" />
            </Link>
          </li>
          <li className="nav-component favourites-link">
            <Link className="link" to="/favourites">
              <IoMdHeart className="nav-icon" />
            </Link>
          </li>
          <li className="nav-component about-link">
            <Link className="link" to="/about">
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* End Desktop Nav */}
    </>
  );
};

export default Nav;
