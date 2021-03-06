import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecommendedMovies, searchMovies } from "../utilities/api";
import { FaSadCry } from "react-icons/fa";
import MoviesContainer from "../components/MoviesContainer";
import { sanitizeVideoData } from "../utilities/toolbelt";
import { APP_NAME } from "../utilities/constants";

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  document.title = APP_NAME + "results for " + query;

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
              {movies ? (
                <MoviesContainer title="" movies={movies} noSlider={true} />
              ) : null}
            </section>
            {recommendedMovies.length > 0 ? (
              <section className="recommended-section">
                <h2>Recommendations based on {movies[0].original_title}</h2>
                <MoviesContainer noSlider={true} movies={recommendedMovies} />
              </section>
            ) : null}
          </>
        ) : (
          <section className="search-disclaimer">
            <div className="no-result-container">
              <h2 className="search-result-heading">No Movies Found</h2>
              <FaSadCry className="sad-face" />
              <p className="search-excerpt">
                Try searching again or head to the home page to find more
                movies!
              </p>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default SearchPage;
