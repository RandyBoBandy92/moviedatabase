import { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCard from "./components/MovieCard";
import { checkKey, getPopular, getConfigData } from "./utilities/api";

const Workshop = () => {
  const [popularMovies, setPopularMovies] = useState(false);
  useEffect(() => {
    getPopular()
    .then((dataThatWasReturned) => setPopularMovies(dataThatWasReturned.results))
    .catch(error => console.log(error))
  }, []);
//   console.log(getConfigData());

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="wrapper">
      <h2>Workshop</h2>
      <di></di>
      <div className="movies-container" style={{padding: "0 25px"}}>
        {popularMovies ? (
          <Slider {...settings}>
            {popularMovies.map((movieData) => (
              <MovieCard data={movieData} />
            ))}
          </Slider>
        ) : (
          <h2>No Movies</h2>
        )}
      </div>
    </div>
  );
};

export default Workshop;
