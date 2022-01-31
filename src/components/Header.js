import { useEffect, useState } from "react";
import Nav from "./Nav";
import SearchMovies from "./SearchMovies";
import Logo from "./Logo";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (scrollPosition !== position) {
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const headerClass = scrollPosition > 150 ? "scrolled" : "";

  return (
    <header className={headerClass} id="header">
      <div className="header-wrapper">
        <Logo />
        <SearchMovies />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
