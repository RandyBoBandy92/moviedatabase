const API_KEY = process.env.REACT_APP_API_KEY;

const imageURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

const REGION = "region=CA";

const checkKey = () => {
  console.log(API_KEY);
};

const getPopular = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&${REGION}&page=1`
  );
  return response.json();
};

const getNowPlaying = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&${REGION}&page=1`
  );
  return response.json();
};

const getUpcoming = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&${REGION}&with_release_type=2|3`
  );
  return response.json();
};

const getMovie = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&${REGION}`
  );
  return response.json();
};

const getMovieImages = async (movieId) => {
  const response = await fetch(
    ` https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&`
  );
  return response.json();
};

const getMovieKeywords = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${API_KEY}`
  );
  return response.json();
};

const getConfigData = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
  );
  return response.json();
};

export {
  checkKey,
  getPopular,
  imageURL,
  getConfigData,
  getNowPlaying,
  getUpcoming,
  getMovie,
  getMovieImages,
  getMovieKeywords,
};
