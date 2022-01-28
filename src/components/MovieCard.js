import { checkKey, getPopular, imageURL } from "../utilities/api";
import loading from "../images/Spinner-1s-200px.gif";
import { Link, Navigate } from "react-router-dom";

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
        {/* <div className="hover-card">
          <h3>{movies.original_title}</h3>
        </div> */}
        <Link to={`/movie/${data.id}`}>
          <img className="movie-card" src={`${imageURL}${data.poster_path}`} />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="movie-container loading">
        <img className="movie-card" src={loading} />
      </div>
    );
  }
};

export default MovieCard;
