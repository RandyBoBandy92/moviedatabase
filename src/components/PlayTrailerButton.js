import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideos } from "../utilities/api";

const PlayTrailerButton = ({ trailerKey }) => {
  // so... beginning from mobile first
  // we take the movieId, and we look for some videos
  // we should examine the results first
  const navigate = useNavigate();

  const handleClick = () => {
    const url = `https://youtu.be/${trailerKey}`;
    console.log(url);
    window.location = url;
  };

  return <button onClick={handleClick}>Play Trailer</button>;
};

export default PlayTrailerButton;
