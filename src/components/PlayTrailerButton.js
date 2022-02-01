
const PlayTrailerButton = ({ trailerKey }) => {
  // so... beginning from mobile first
  // we take the movieId, and we look for some videos
  // we should examine the results first

  const handleClick = () => {
    const url = `https://youtu.be/${trailerKey}`;
    window.location = url;
  };

  return <button className="play-trailer" onClick={handleClick}>Play Trailer</button>;
};

export default PlayTrailerButton;
