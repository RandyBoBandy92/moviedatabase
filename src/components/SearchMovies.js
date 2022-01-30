import React from "react";
import { imageURL, searchMovies } from "../utilities/api";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { ImSearch } from 'react-icons/im';
import { Link, Navigate, useNavigate } from "react-router-dom";


function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movie, setMovies] = useState([]);

  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    // searchMovies(query)
    //   .then((data) => {
    //     setMovies(data.results);
    //   })
    //   .catch((error) => console.log(error));
    if (query) {
      const uriQuery = encodeURIComponent(query)
      navigate(`/search/${uriQuery}`)
    }
  };


  return (
  
 
      <form onSubmit={handleSubmit} className="searchBox">
        <input className="searchInput"
          type="text"
          name="query"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div onClick={handleSubmit} className="searchButton" >
          <ImSearch className="search-icon"/>
        </div>  
      </form>
       
 
  );
}

export default SearchMovies;
      {/* <h2>Search results for:{query}</h2> */}