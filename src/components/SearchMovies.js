import React from "react";
import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function SearchMovies() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // searchMovies(query)
    //   .then((data) => {
    //     setMovies(data.results);
    //   })
    //   .catch((error) => console.log(error));
    if (query) {
      const uriQuery = encodeURIComponent(query);
      navigate(`/search/${uriQuery}`);
    }
  };

  return (
    // Both the form, and the button have a handleSubmit function
    // that way, clicking or pressing enter on the keyboard will submit the form
    // this also works on mobile devices

    <form onSubmit={handleSubmit} className="searchBox">
      <input
        className="searchInput"
        type="text"
        name="query"
        placeholder="Movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div onClick={handleSubmit} className="searchButton">
        <Search />
      </div>
    </form>
  );
}

export default SearchMovies;
{
  /* <h2>Search results for:{query}</h2> */
}
