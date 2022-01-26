import React from "react";
import { imageURL, searchMovies } from "../utilities/api";
import { useState } from "react";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

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
        <label htmlFor="query">Movie Name</label>
        <input
          type="text"
          name="query"
          placeholder="Search For movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {movies
        ? movies.map((movie) => (
            <div key={movie.id}>
              <div>
                <img
                  className="movie-card"
                  src={`${imageURL}${movie.poster_path}`}
                />
              </div>
              <div>
                <h3>{movie.title}</h3>
                <p>
                  <small>{movie.release_date}</small>{" "}
                </p>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default SearchMovies;
