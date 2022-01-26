import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import {
  getMovie,
  getMovieImages,
  getMovieKeywords,
  originalImageURL,
  imageURL,
} from "../utilities/api";

// Data Structure from API:
// adult: false
// backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg"
// belongs_to_collection: null
// budget: 200000000
// genres: Array(4) [ {…}, {…}, {…}, … ]
// homepage: "https://www.marvel.com/movies/the-eternals"
// id: 524434
// imdb_id: "tt9032400"
// original_language: "en"
// original_title: "Eternals"
// overview: "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants."
// popularity: 11902.6
// poster_path: "/b6qUu00iIIkXX13szFy7d0CyNcg.jpg"
// production_companies: Array [ {…} ]
// production_countries: Array [ {…} ]
// release_date: "2021-11-03"
// revenue: 401842256
// runtime: 156
// spoken_languages: Array(5) [ {…}, {…}, {…}, … ]
// status: "Released"
// tagline: "In the beginning..."
// title: "Eternals"
// video: false
// vote_average: 7.3
// vote_count: 2852

const formatMovieDate = (rawMovieDate) => {
  console.log(rawMovieDate.split("-"));
  const movieDateArray = rawMovieDate.split("-");
  const [year, month, day] = movieDateArray;
  let date = new Date(`${month} ${day} ${year}`);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-us", options);
};

const formatMovieRuntime = (rawMovieRuntime) => {
  // data will arrive as probably a 2 or 3 digit number
  // if it is over 60 minutes, then it should return
  let hours = Math.floor(rawMovieRuntime / 60);
  let minutes = Math.floor(rawMovieRuntime % 60);

  if (hours) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

const renderMovieGenres = (movieData) => {
  let genreElems = [];
  movieData.genres.forEach((genre) => {
    genreElems.push(<li>{genre.name}</li>);
  });
  return genreElems;
};

const MoviePage = () => {
  const [movieData, setMovieData] = useState(false);
  // const [movieKeywords, setMovieKeywords] = useState(false);
  // const [movieImages, setMovieImages] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMovie(id)
      .then((data) => setMovieData(data))
      .catch((error) => console.log(error));
    // getMovieKeywords(id)
    //   .then((data) => setMovieKeywords(data))
    //   .catch((error) => console.log(error));
    // getMovieImages(id)
    //   .then((data) => setMovieImages(data))
    //   .catch((error) => console.log(error));
    
  }, []);
  if (movieData) {
    console.log(movieData);
    return (
      <>
        <Header />
        <main className="movie-page">
          <div className="movie-poster">
            <img
              className="backdrop"
              src={`${originalImageURL}${movieData.backdrop_path}`}
              alt={`${movieData.original_title} backdrop`}
            />
            <img
              className="poster"
              src={`${imageURL}${movieData.poster_path}`}
              alt={`${movieData.original_title} poster`}
            />
          </div>
          <h2 className="movie-title">{movieData.original_title}</h2>
          <h3 className="release-date">
            {formatMovieDate(movieData.release_date)}
          </h3>
          <h3 className="movie-runtime">
            {formatMovieRuntime(movieData.runtime)}
          </h3>
          <ul className="movie-genres">{renderMovieGenres(movieData)}</ul>
          <p className="plot-summary">{movieData.overview}</p>
        </main>
      </>
    );
  } else {
    return null;
  }
  // so what content needs to be displayed here?
  // poster DONE
  // poster in background opacity
  // poster in foreground DONE
  // Probably an H2 with the title DONE
  // Add to favorites
  // maybe an h3 with the release data DONE
  // Rating MISSING from API
  // Run time DONE
  // Movie Categories DONE
  // Plot Summary
  // Watch the trailer button?
};

export default MoviePage;
