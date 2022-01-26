import { checkKey, getPopular, imageURL } from "../utilities/api";
import loading from "../images/Spinner-1s-200px.gif";

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
      <div className="movie-container fadein">
        <div className="hover-card">
          <h3>{data.title}</h3>
        </div>
        <img className="movie-card" src={`${imageURL}${data.poster_path}`} />
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
