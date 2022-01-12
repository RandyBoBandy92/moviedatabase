import { useEffect, useState } from "react";
import Nav from "./Nav";

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }

    const handleMediaQuery = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 600px)');
        mediaQuery.addListener(handleMediaQuery);
        setIsDesktop(mediaQuery.matches)
        return () => mediaQuery.removeListener(isDesktop);
    }, []);


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
            <Nav navOpen={navOpen} isDesktop={isDesktop} showHideNav={showHideNav}/>
        </header>
    )
}



export default Header;


