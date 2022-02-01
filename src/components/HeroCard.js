import { getVideos, URL_IMAGE } from "../utilities/api";
import { useEffect, useState } from "react";
import { formatMovieDate, generateTextExcerpt, getTrailerKey } from "../utilities/toolbelt.js";
import MoreInfo from "./MoreInfo";
import PlayTrailerButton from "./PlayTrailerButton";
import { LoadingSpinner } from "./LoadingSpinner";

// Inside data
// data.id
// data.original_title
// data.vote_average
// data.vote_count
// data.release_date
// data.overview

const HeroCard = ({ hero }) => {
  const [trailerKey, setTrailerKey] = useState("");
  useEffect(() => {
    if (hero) {
      getVideos(hero.id).then((data) => {
        setTrailerKey(getTrailerKey(data.results));
      });
    }
  },[hero]);
  
  if (hero) {
    return (
      <div className="hero-container">
        <img
          className="hero-card"
          src={`${URL_IMAGE}w1280/${hero.backdrop_path}`}
          alt={`${hero.original_title} large movie poster`}
        />
        <div className="hero-info-container">
          <h1 className="hero-title">{generateTextExcerpt(hero.original_title, 7) }</h1>
          <h2 className="hero-release-date">
            Release Date: {" "}
            {formatMovieDate(hero.release_date)}
          </h2>
          <h3 className="hero-overview">{generateTextExcerpt(hero.overview, 25)}</h3>
          <div className="button-container">
            <PlayTrailerButton trailerKey={trailerKey}/>
            <MoreInfo movieId={hero.id}/>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hero-container">
        <div className="hero-loader">
          <LoadingSpinner/>
        </div>
      </div>
    );
  }
};

export default HeroCard;
