import { useEffect, useState } from "react";
import Nav from "./Nav";
import SearchMovies from "./SearchMovies";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      {/* Would structure be something like:
                from left to right:
                Logo
                Nav
                    Home
                    About
                    Favourites?
            */}
      <h2 className="logo">bdmi</h2>
      <SearchMovies />
      <Nav navOpen={navOpen} showHideNav={showHideNav} />
    </header>
  );
};

export default Header;
