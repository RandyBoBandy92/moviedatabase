import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchTimeoutId, setSearchTimeoutId] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const ref = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      // this is really chunky.. but it works which will have to do for now :(
      // if i don't account for this edge case, the search bar cannot be closed properly
      if (
        e.target.className === "searchButton" ||
        e.target.nodeName === "svg" ||
        e.target.nodeName === "path"
      ) {
        return;
      }

      if (ref.current && !ref.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // so every time the query changes
    // i clear any prior searchTimeoutId
    // then start another one, if we reach half a second without entering new results, we construct uriQuery and navigate
    clearTimeout(searchTimeoutId);
    if (query) {
      const timeoutId = setTimeout(() => {
        // trim any trailing whitespace on query to prevent error
        const uriQuery = encodeURIComponent(query.trim());
        navigate(`/search/${uriQuery}`);
      }, 500);
      setSearchTimeoutId(timeoutId);
    }
  }, [query]);

  const handleClick = (e) => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      // if the nav is opening, focus the search box
      ref?.current?.focus();
    }
  };
  return (
    // Both the form, and the button have a handleSubmit function
    // that way, clicking or pressing enter on the keyboard will submit the form
    // this also works on mobile devices

    <div className={`searchBox ${searchOpen ? "active" : ""}`}>
      <input
        className="searchInput"
        ref={ref}
        type="text"
        name="query"
        placeholder="Movie Title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div onClick={handleClick} className="searchButton">
        <ImSearch className="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
