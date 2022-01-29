import { Link } from "react-router-dom";

const Nav = ({ navOpen, isDesktop, showHideNav }) => {
  return (
    <>
    {/* Mobile Nav */}
    <nav className={`mobile-nav${navOpen ? " active" : ""}`}>
      <div onClick={() => showHideNav()} className="nav-component">
        <div className="hamburger-menu"><span className="hamburger-line"></span></div>
      </div>
      <ul>
        <li className="nav-component home-link">
          <Link to="/">🏠</Link>
        </li>
        <li className="nav-component favourites-link">
          <Link to="/favourites">💖</Link>
        </li>
        <li className="nav-component about-link">
          <Link to="/about">❓</Link>
        </li>
      </ul>
    </nav>
    {/* END Mobile Nav */}
    {/* Desktop Nav */}
    <nav className="desktop-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    {/* End Desktop Nav */}
    </>
  );
};

export default Nav;
