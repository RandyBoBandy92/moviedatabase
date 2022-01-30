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
import { generateRandomIndex, sanitizeVideoData } from "../utilities/toolbelt";

const Home = ({ nicCageMode }) => {
  // getConfigData()
  // .then(data => console.log(data))
  const [popularMovies, setPopularMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState(false);
  const [heroMovie, setHeroMovie] = useState(false);

  useEffect(() => {
    getPopular()
      .then((data) => setPopularMovies(sanitizeVideoData(data.results)))
      .catch((error) => console.log(error));

    getNowPlaying()
      .then((data) => setNowPlayingMovies(sanitizeVideoData(data.results)))
      .catch((error) => console.log(error));

    getUpcoming()
      .then((data) => {
        const movies = sanitizeVideoData(data.results);
        setUpcomingMovies(movies);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setHeroMovie(upcomingMovies[generateRandomIndex(upcomingMovies.length)]);
  }, [upcomingMovies]);

  useEffect(() => {
    if (nicCageMode) {
      // NIC CAGE is 2963
      getMovieCreditsByActor(2963)
        .then((data) => setPopularMovies(data.cast))
        .catch((error) => console.log(error));
    }
  }, []);

  console.log(popularMovies);
  console.log(heroMovie);

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
            <HeroCard title="Upcoming" hero={heroMovie} />
            <MoviesContainer title="Popular" movies={popularMovies} />
            <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
            <MoviesContainer title="Upcoming" movies={upcomingMovies} />
          </main>
        )}
      </div>
    </>
  );
};

export default Home;
