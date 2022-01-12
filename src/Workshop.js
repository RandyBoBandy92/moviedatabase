import { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCard from "./components/MovieCard";
import { checkKey, getPopular, getConfigData, getNowPlaying, getUpcoming } from "./utilities/api";



const Workshop = () => {
  const [popularMovies, setPopularMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState(false);


  useEffect(() => {

    getPopular()
    .then((data) => setPopularMovies(data.results))
    .catch(error => console.log(error))

    getNowPlaying()
    .then(data => setNowPlayingMovies(data.results) )
    .catch(error => console.log(error))

    getUpcoming()
    .then(data => {
      setUpcomingMovies(data.results)} )
    .catch(error => console.log(error))
    

  }, []);

//   console.log(getConfigData());


  const settings = {
    dots: false,
    arrows: true,
    swipeToSlide: true,
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
        <h2>Popular</h2>
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
      <div className="movies-container" style={{padding: "0 25px"}}>
        <h2>Now Playing</h2>
        {nowPlayingMovies ? (
          <Slider {...settings}>
            {nowPlayingMovies.map((movieData) => (
              <MovieCard data={movieData} />
            ))}
          </Slider>
        ) : (
          <h2>No Movies</h2>
        )}
      </div>
      <div className="movies-container" style={{padding: "0 25px"}}>
        <h2>Upcoming</h2>
        {upcomingMovies ? (
          <Slider {...settings}>
            {upcomingMovies.map((movieData) => (
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
