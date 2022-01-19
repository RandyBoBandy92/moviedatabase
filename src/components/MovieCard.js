import { checkKey, getPopular, imageURL } from "../utilities/api";
import loading from "../images/Spinner-1s-200px.gif";
import { Link, Navigate } from "react-router-dom";

// Inside data
// data.id
// data.original_title
// data.vote_average
// data.vote_count
// data.release_date
// data.overview

const MovieCard = ({ data }) => {
  if (data) {
    return (
      <div
        onClick={() => <Navigate to={`/movie/${data.id}`} />}
        className="movie-container fadein"
      >
        {/* <div className="hover-card">
          <h3>{data.original_title}</h3>
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
