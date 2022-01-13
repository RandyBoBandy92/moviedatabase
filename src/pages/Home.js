import { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import {
  checkKey,
  getPopular,
  getConfigData,
  getNowPlaying,
  getUpcoming,
} from "../utilities/api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState(false);

  useEffect(() => {
    getPopular()
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.log(error));

    getNowPlaying()
      .then((data) => setNowPlayingMovies(data.results))
      .catch((error) => console.log(error));

    getUpcoming()
      .then((data) => {
        setUpcomingMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  //   console.log(getConfigData());

  const settings = {
    dots: false,
    arrows: false,
    // swipeToSlide: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h2>Movie Database</h2>
        <div className="movies-container" style={{}}>
          <h2>Popular</h2>
          {popularMovies ? (
            <Slider {...settings}>
              {popularMovies.map((movieData, index) => (
                <MovieCard key={index} data={movieData} />
              ))}
            </Slider>
          ) : (
            <h2>No Movies</h2>
          )}
        </div>
        <div className="movies-container" style={{}}>
          <h2>Now Playing</h2>
          {nowPlayingMovies ? (
            <Slider {...settings}>
              {nowPlayingMovies.map((movieData, index) => (
                <MovieCard key={index} data={movieData} />
              ))}
            </Slider>
          ) : (
            <h2>No Movies</h2>
          )}
        </div>
        <div className="movies-container" style={{}}>
          <h2>Upcoming</h2>
          {upcomingMovies ? (
            <Slider {...settings}>
              {upcomingMovies.map((movieData, index) => (
                <MovieCard key={index} data={movieData} />
              ))}
            </Slider>
          ) : (
            <h2>No Movies</h2>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
