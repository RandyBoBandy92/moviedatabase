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
  getMovieCredits,
  getMovieCreditsByActor,
} from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import MovieCard from "../components/MovieCard";

const Home = ({ nicCageMode }) => {
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

  useEffect(() => {
    if (nicCageMode) {
      // NIC CAGE is 2963
      getMovieCreditsByActor(2963)
        .then((data) => setPopularMovies(data.cast))
        .catch((error) => console.log(error));
    }
  }, []);

  console.log(popularMovies);


  return (
    <>
      <div className="wrapper">
        <Header />
        {nicCageMode && popularMovies ? (
          <>
            <main>
              <section className="cage-results">
                {popularMovies.map((nicCageMovie) => (
                  <MovieCard data={nicCageMovie} key={nicCageMovie.id} />
                ))}
              </section>
            </main>
          </>
        ) : (
          <main>
            <HeroCard title="Upcoming" hero={upcomingMovies[0]} />
            <h2>Popular</h2>
            <MoviesContainer title="Popular" movies={popularMovies} />
            <h2>Now Playing</h2>
            <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
            <h2>Upcoming</h2>
            <MoviesContainer title="Upcoming" movies={upcomingMovies} />
          </main>
        )}
      </div>
    </>
  );
};

export default Home;
