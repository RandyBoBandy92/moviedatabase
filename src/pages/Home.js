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
import MoviesContainer from "../components/MoviesContainer";

const Home = () => {
  // getConfigData()
  // .then(data => console.log(data))
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

  console.log(popularMovies)
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
        <MoviesContainer title="Popular" movies={popularMovies} />
        <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
        <MoviesContainer title="Upcoming" movies={upcomingMovies} />
      </main>
    </div>
  );
};

export default Home;
