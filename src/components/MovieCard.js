import { checkKey, getPopular, imageURL } from "../utilities/api";
import src from "../images/emojiMovie.jpg";

// Inside data
// data.id
// data.original_title
// data.vote_average
// data.vote_count
// data.release_date
// data.overview

const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div className="image-cards-container">
      <img src={`${imageURL}${data.poster_path}`} />
    </div>
  )
};

export default MovieCard;
