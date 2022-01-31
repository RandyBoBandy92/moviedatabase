import { checkKey, getPopular, imageURL, URL_IMAGE } from "../utilities/api";
import loading from "../images/Spinner-1s-200px.gif";
import { Link, Navigate } from "react-router-dom";
import { formatMovieDate, generateTextExcerpt } from "../utilities/toolbelt";
import MoreInfo from "./MoreInfo";
import FavouritesButton from "./FavouritesButton";
import { LoadingSpinner } from "./LoadingSpinner";

// Inside movies
// movies.id
// movies.original_title
// movies.vote_average
// movies.vote_count
// movies.release_date
// movies.overview

const MovieCard = ({ data }) => {
  if (data) {
    return (
      <div
        onClick={() => <Navigate to={`/movie/${data.id}`} />}
        className="movie-container fadein"
      >
        <div className="hover-card">
          <div className="text">
            <h3>{generateTextExcerpt(data.original_title, 5)}</h3>
            <h4>{formatMovieDate(data.release_date) }</h4>
          </div>
          <div className="buttons-and-rating">
            {data.vote_average !== 0 ? <h4>{data.vote_average}</h4> : null}
            <FavouritesButton movieData={data} />
          </div>
        </div>
        <Link className="focus-link" to={`/movie/${data.id}`}>
          <img alt={`${data.original_title} poster`} className="movie-card" src={`${URL_IMAGE}w185/${data.poster_path}`} />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <LoadingSpinner/>
      </div>
    );
  }
};

export default MovieCard;
