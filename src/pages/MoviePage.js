import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavouritesButton from "../components/FavouritesButton";
import Header from "../components/Header";
import PlayTrailerButton from "../components/PlayTrailerButton";
import { GlobalContext } from "../GlobalState";
import {
  getMovie,
  getMovieImages,
  getMovieKeywords,
  originalImageURL,
  imageURL,
  getVideos,
  URL_IMAGE,
} from "../utilities/api";
import { formatMovieDate, getTrailerKey } from "../utilities/toolbelt.js";

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
  movieData.genres.forEach((genre, index) => {
    genreElems.push(<li key={index}>{genre.name}</li>);
  });
  return genreElems;
};

const MoviePage = () => {
  const [movieData, setMovieData] = useState(false);
  // I don't actually need to keep the entire array
  // of videos, i only need the one I intend to show the user
  const [trailerKey, setTrailerKey] = useState("");
  const { favourites, settings } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    getMovie(id, settings.adultSearch)
      .then((data) => setMovieData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (movieData) {
      getVideos(movieData.id).then((data) => {
        setTrailerKey(getTrailerKey(data.results));
      });
    }
  }, [movieData]);

  if (movieData) {
    return (
      <>
        <main className="movie-page">
          <div className="movie-poster">
            <img
              className="backdrop"
              src={`${originalImageURL}${movieData.backdrop_path}`}
              alt={`${movieData.original_title} backdrop`}
            />
            <img
              className="poster"
              src={`${URL_IMAGE}w342/${movieData.poster_path}`}
              alt={`${movieData.original_title} poster`}
            />
          </div>
          <div className="movie">
            <div className="movie-details">
              <h2 className="movie-title">{movieData.original_title}</h2>
              <div className="release-and-runtime">
                <h3 className="release-date">
                  {formatMovieDate(movieData.release_date)}
                </h3>
                <h3 className="movie-runtime">
                  {formatMovieRuntime(movieData.runtime)}
                </h3>
              </div>
              <div className="button-container">
                {trailerKey ? (
                  <PlayTrailerButton trailerKey={trailerKey} />
                ) : null}
                <FavouritesButton movieData={movieData} />
              </div>
              <ul className="movie-genres">{renderMovieGenres(movieData)}</ul>
              <p className="plot-summary">{movieData.overview}</p>
            </div>
            {/* YT Embed */}
            {trailerKey ? (
              <iframe
                className="youtube-video"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : null}
          </div>
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
  // Add to favourites
  // maybe an h3 with the release data DONE
  // Rating MISSING from API
  // Run time DONE
  // Movie Categories DONE
  // Plot Summary
  // Watch the trailer button?
};

export default MoviePage;
