const PlayTrailerButton = ({ trailerKey }) => {
  const handleClick = () => {
    const url = `https://youtu.be/${trailerKey}`;
    window.location = url;
  };

  return (
    <button className="play-trailer" onClick={handleClick}>
      Play Trailer
    </button>
  );
};

export default PlayTrailerButton;
