import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecommendedMovies, searchMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import MoviesContainer from "../components/MoviesContainer";
import { sanitizeVideoData } from "../utilities/toolbelt";

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const formatQuery = (query) => {
    // split the query up
    const queryArray = query.split(" ");
    for (let i = 0; i < queryArray.length; i++) {
      queryArray[i] = queryArray[i].toLowerCase();
      queryArray[i] = queryArray[i][0].toUpperCase() + queryArray[i].substr(1);
    }

    return queryArray.join(" ");
  };

  useEffect(() => {
    // grab movies from query
    searchMovies(query)
      .then((data) => {
        setMovies(sanitizeVideoData(data.results));
        if (data.results.length > 0) {
          // we can search for recommended
          const recommendationId = data.results[0].id;
          getRecommendedMovies(recommendationId)
            .then((data) => {
              console.log(data);
              setRecommendedMovies(sanitizeVideoData(data.results));
            })
            .catch((error) => console.log(error));
        } else {
          // no results, we should clear recommended movies
          setRecommendedMovies([]);
        }
      })
      .catch((error) => console.log(error));
    // grab recommended movies
  }, [query]);
  // console.log(movies);
  return (
    <>
      <main>
        {movies.length > 0 ? (
          <>
            <section className="search-results-section">
              <div className="search-text-container">
                <h2 className="searchHeading">Search results for:</h2>
                <h1 className="searchQuery">{formatQuery(query)}</h1>
              </div>
              <div className="search-movies">
                {/* <h2>Search results for:{query}</h2> */}
                {movies
                  .filter((moviedata) => moviedata.poster_path)
                  .map((moviedata) => (
                    <MovieCard data={moviedata} key={moviedata.id} />
                  ))}
              </div>
            </section>
            {recommendedMovies.length > 0 ? (
              <section className="recommended-section">
                <h2>
                  If you liked {movies[0].original_title} then you gonna love
                  this:
                </h2>
                <MoviesContainer movies={recommendedMovies} />
              </section>
            ) : null}
          </>
        ) : (
          <section>
            <h2 className="search-result-heading">No Movies Found :(</h2>
          </section>
        )}
      </main>
    </>
  );
};

export default SearchPage;
