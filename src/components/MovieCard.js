import { checkKey, getPopular, imageURL } from "../utilities/api";
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
        <Link to={`/movie/${data.id}`}>
          <img className="movie-card" src={`${imageURL}${data.poster_path}`} />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="loading">
        {/* <img className="movie-card" src={loading} /> */}
        <LoadingSpinner/>
      {/* <div className="loader loader8 movie-card"></div> */}
      </div>
    );
  }
};

export default MovieCard;
