import { originalImageURL } from "../utilities/api";
import loading from "../images/Spinner-1s-200px.gif";
import { useEffect, useState } from "react";

// Inside data
// data.id
// data.original_title
// data.vote_average
// data.vote_count
// data.release_date
// data.overview

const HeroCard = ({ hero }) => {
 
    if (hero) {
    return (
      <div className="hero-container">
        <img className="hero-card" src={`${originalImageURL}${hero.backdrop_path}`} />
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



