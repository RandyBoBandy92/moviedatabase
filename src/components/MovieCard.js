import { checkKey, imageURL } from "../utilities/api";
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
            <div className={ data.vote_average  <= 3  ? "default-rating low-rating": 
                             data.vote_average  <= 7  ? "default-rating medium-rating": //These classes can be found in the _components.scss page;
                             data.vote_average  <= 10 ? "default-rating good-rating" : 
                             data.vote_average !== 0  ? "default-rating no-rating"   : null }>
                                                       
              {data.vote_average !== 0 && data.vote_average < 10 ?
                <h4 className="rating-number">{data.vote_average.toFixed(1)}</h4> :
                 data.vote_average >= 10 ? 
                <h4 className="rating-number gold">{data.vote_average.toFixed(0)}</h4> :
                <h4 className="rating-number">NR</h4> }
            </div>
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
