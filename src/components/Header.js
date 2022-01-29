import { useEffect, useState } from "react";
import Nav from "./Nav";
import SearchMovies from "./SearchMovies";
import Logo from "./Logo";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [console.log(scrollPosition)]);

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  const headerClass = scrollPosition > 40 ? "scrolled" : "";

  return (
    <header className={headerClass} id="header">
      {/* Would structure be something like:
                from left to right:
                Logo
                Nav
                    Home
                    About
                    Favourites?
            */}
      <Logo />
      <SearchMovies />
      <Nav navOpen={navOpen} showHideNav={showHideNav} />
    </header>
  );
};

export default Header;
