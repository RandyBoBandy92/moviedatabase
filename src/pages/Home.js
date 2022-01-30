import { useContext, useEffect, useState } from "react";
import HeroCard from "../components/HeroCard";

import {
  checkKey,
  getPopular,
  getVideo,
  getConfigData,
  getNowPlaying,
  getUpcoming,
  getMovieCredits,
  getMovieCreditsByActor,
  getRecommendedMovies,
} from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import MovieCard from "../components/MovieCard";
import { generateRandomIndex, sanitizeVideoData } from "../utilities/toolbelt";
import { GlobalContext } from "../GlobalState";
import { cleanup } from "@testing-library/react";

const Home = () => {
  // getConfigData()
  // .then(data => console.log(data))
  const [popularMovies, setPopularMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState(false);
  const [recommendedMovies, setRecommendedMovies] = useState(false);
  const [heroMovie, setHeroMovie] = useState(false);
  const { favourites, settings } = useContext(GlobalContext);

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

    if (favourites.length > 0) {
      const recommendedMovieSeed =
        favourites[generateRandomIndex(favourites.length)];
      getRecommendedMovies(recommendedMovieSeed.id)
        .then((data) => {
          const movies = sanitizeVideoData(data.results);
          setRecommendedMovies({ recommendedMovieSeed, movies });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    setHeroMovie(upcomingMovies[generateRandomIndex(upcomingMovies.length)]);
  }, [upcomingMovies]);

  useEffect(() => {
    if (settings.nicCageMode) {
      // NIC CAGE is 2963
      getMovieCreditsByActor(2963)
        .then((data) => setPopularMovies(sanitizeVideoData(data.cast)))
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      {settings.nicCageMode && popularMovies ? (
        <>
          <main className="home-page">
            <section className="cage-results">
              {popularMovies.map((nicCageMovie) => (
                <MovieCard data={nicCageMovie} key={nicCageMovie.id} />
              ))}
            </section>
          </main>
        </>
      ) : (
        <main className="home-page">
          <HeroCard title="Upcoming" hero={heroMovie} />
          <MoviesContainer title="Popular" movies={popularMovies} />
          <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
          <MoviesContainer title="Upcoming" movies={upcomingMovies} />
          {recommendedMovies?.movies?.length > 0 ? (
            <MoviesContainer
              title={`If you liked ${recommendedMovies.recommendedMovieSeed.original_title}, you might also like...`}
              movies={recommendedMovies.movies}
            />
          ) : null}
        </main>
      )}
    </>
  );
};

export default Home;
