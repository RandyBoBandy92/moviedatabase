import { getVideos, originalImageURL } from "../utilities/api";
import {ChevronBarRight, ChevronBarLeft, ChevronLeft, ChevronRight} from "react-bootstrap-icons";
import loading from "../images/Spinner-1s-200px.gif";
import { useEffect, useState } from "react";
import { formatMovieDate, generateTextExcerpt, getTrailerKey } from "../utilities/toolbelt.js";
import MoreInfo from "./MoreInfo";
import PlayTrailerButton from "./PlayTrailerButton";

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
          src={`${originalImageURL}${hero.backdrop_path}`}
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
        <img className="hero-card" src={loading} />
      </div>
    );
  }
};

export default HeroCard;
