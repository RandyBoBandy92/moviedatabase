import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";
import SearchMovies from "../components/SearchMovies";

import {
  checkKey,
  getPopular,
  getVideo,
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

    // console.log(upcomingMovies);

  return (
    <div className="wrapper">
      <Header />
      <h2>Movie Database</h2>
      <HeroCard title="Upcoming" hero={upcomingMovies[0]}/>
      <main>
        <SearchMovies/>
        <MoviesContainer title="Popular" movies={popularMovies} />
        <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
        <MoviesContainer title="Upcoming" movies={upcomingMovies} />
      </main>
    </div>
  );
};

export default Home;
