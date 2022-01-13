import { Link } from "react-router-dom"

const Nav = ({navOpen, isDesktop, showHideNav}) => {
    return (
        <nav className={
            navOpen ? "active" : null
        }>
            <div onClick={() => showHideNav()} className="nav-component hamburgler">
                <div className="hamburger-menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </div>
            </div>
            <ul>
                <li className="nav-component home-link"><Link to="/">🏠</Link></li>
                <li className="nav-component favorites-link"><Link to="/favorites">💖</Link></li>
                <li className="nav-component about-link"><Link to="/about">❓</Link></li>
            </ul>
        </nav>
    )
}

export default Nav