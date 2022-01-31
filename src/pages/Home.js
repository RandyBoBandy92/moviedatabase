import { useEffect, useState, useContext } from "react";
import { trackPromise } from "react-promise-tracker";
import HeroCard from "../components/HeroCard";
import MoviesContainer from "../components/MoviesContainer";
import MovieCard from "../components/MovieCard";
import { GlobalContext } from "../GlobalState";

import {
  getPopular,
  getNowPlaying,
  getUpcoming,
  getMovieCreditsByActor,
  getRecommendedMovies,
  getTrending,
  getTopRated,
} from "../utilities/api";

import { generateRandomIndex, sanitizeVideoData } from "../utilities/toolbelt";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState(false);
  const [recommendedMovies, setRecommendedMovies] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState(false);
  const [topRatedMovies, setTopRatedMovies] = useState(false);
  const [cageMovies, setCageMovies] = useState(false);
  const [heroMovie, setHeroMovie] = useState(false);
  const { favourites, settings } = useContext(GlobalContext);

  useEffect(() => {
    trackPromise(
      getPopular().then((data) =>
        setPopularMovies(sanitizeVideoData(data.results)).catch((error) =>
          console.log(error)
        )
      )
    );

    trackPromise(
      getNowPlaying().then((data) =>
        setNowPlayingMovies(sanitizeVideoData(data.results)).catch((error) =>
          console.log(error)
        )
      )
    );
    trackPromise(
      getTrending().then((data) =>
        setTrendingMovies(sanitizeVideoData(data.results)).catch((error) =>
          console.log(error)
        )
      )
    );
    trackPromise(
      getTopRated().then((data) =>
        setTopRatedMovies(sanitizeVideoData(data.results)).catch((error) =>
          console.log(error)
        )
      )
    );

    trackPromise(
      getUpcoming()
        .then((data) => {
          const movies = sanitizeVideoData(data.results);
          setUpcomingMovies(movies);
        })
        .catch((error) => console.log(error))
    );

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
    if (!settings.nicCageMode) {
      setHeroMovie(upcomingMovies[generateRandomIndex(upcomingMovies.length)]);
    }
  }, [upcomingMovies]);

  // useEffect(() => {
  //   if (settings.nicCageMode) {
  //     setHeroMovie(cageMovies[generateRandomIndex(popularMovies.length)]);
  //   }
  // }, [cageMovies]);

  useEffect(() => {
    if (settings.nicCageMode) {
      // NIC CAGE is 2963
      trackPromise(
        getMovieCreditsByActor(2963)
          .then((data) => {
            const cageMovies = sanitizeVideoData(data.cast);
            setHeroMovie(cageMovies[generateRandomIndex(cageMovies.length)]);
            setCageMovies(cageMovies);
          })
          .catch((error) => console.log(error))
      );
    } else {
      // we need to make sure a hero movie is set again
      setHeroMovie(upcomingMovies[generateRandomIndex(upcomingMovies.length)]);
    }
  }, [settings.nicCageMode]);

  return (
    <>
      {settings.nicCageMode ? (
        <>
          <main className="home-page">
            <HeroCard title="Upcoming" hero={heroMovie} />
            <MoviesContainer title="" movies={cageMovies} flex={true} />
          </main>
        </>
      ) : (
        <main className="home-page">
          <HeroCard title="Upcoming" hero={heroMovie} />
          <MoviesContainer title="Popular" movies={popularMovies} />
          <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
          <MoviesContainer title="Upcoming" movies={upcomingMovies} />
          <MoviesContainer title="Top Rated" movies={topRatedMovies} />
          <MoviesContainer title="Trending This Week" movies={trendingMovies} />
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
