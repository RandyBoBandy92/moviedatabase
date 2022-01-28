import React from "react";
import { imageURL, searchMovies } from "../utilities/api";
import MovieCard from "./MovieCard";
import { useState } from "react";

function SearchMovies( { moviedata } ) {
  const [query, setQuery] = useState("");
  const [movie, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={query}>Search</label>
        <input
          type="text"
          name="query"
          placeholder="Search For movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
        <div className="search-movies">
        {movie.filter(moviedata => moviedata.poster_path).map(moviedata => (
          <MovieCard data={moviedata} key={moviedata.id} />
        ))}
      
      </div>
    </>
  );
}

export default SearchMovies;
