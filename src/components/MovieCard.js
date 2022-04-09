import { URL_IMAGE } from "../utilities/api";
import { Link, Navigate } from "react-router-dom";
import { formatMovieDate, generateTextExcerpt } from "../utilities/toolbelt";
import FavouritesButton from "./FavouritesButton";
import { LoadingSpinner } from "./LoadingSpinner";

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
            <h4>{formatMovieDate(data.release_date)}</h4>
          </div>
          <div className="buttons-and-rating">
            <div
              className={
                data.vote_average <= 3
                  ? "default-rating low-rating"
                  : data.vote_average <= 7
                  ? "default-rating medium-rating" //These classes can be found in the _components.scss page;
                  : data.vote_average <= 10
                  ? "default-rating good-rating"
                  : data.vote_average !== 0
                  ? "default-rating no-rating"
                  : null
              }
            >
              {data.vote_average !== 0 && data.vote_average < 10 ? (
                <h4 className="rating-number">
                  {data.vote_average.toFixed(1)}
                </h4>
              ) : data.vote_average >= 10 ? (
                <h4 className="rating-number gold">
                  {data.vote_average.toFixed(0)}
                </h4>
              ) : (
                <h4 className="rating-number">NR</h4>
              )}
            </div>
            <FavouritesButton movieData={data} />
          </div>
        </div>
        <Link className="focus-link" to={`/movie/${data.id}`}>
          <img
            alt={`${data.original_title} poster`}
            className="movie-card"
            src={`${URL_IMAGE}w185/${data.poster_path}`}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <LoadingSpinner />
      </div>
    );
  }
};

export default MovieCard;
