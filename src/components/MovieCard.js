import { checkKey, getPopular, imageURL } from "../utilities/api";

// Inside data
// data.id
// data.original_title
// data.vote_average
// data.vote_count
// data.release_date
// data.overview

const MovieCard = ({ data }) => {
  return (
    <div className="movie-container">
      <div className="hover-card">
        <h3>{data.original_title}</h3>
      </div>
      <img className="movie-card" src={`${imageURL}${data.poster_path}`} />
    </div>
  );
};

export default MovieCard;
