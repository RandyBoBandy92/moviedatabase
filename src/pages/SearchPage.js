import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header"

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query)
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, [query]);
  console.log(movies);
  return (
      <>
    <div className="wrapper">
        <Header/>
        <main>
          <h1>Search results for:</h1>
          <h2>{query}</h2>
          <div className="search-movies">
            {/* <h2>Search results for:{query}</h2> */}
            {movies
              .filter((moviedata) => moviedata.poster_path)
              .map((moviedata) => (
                <MovieCard data={moviedata} key={moviedata.id} />
              ))}
          </div>
        </main>
    </div>
    </>
  );
};

export default SearchPage;
