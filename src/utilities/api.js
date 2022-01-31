const API_KEY = process.env.REACT_APP_API_KEY;
const REGION = "region=CA|US";
const imageURL = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/`;
const originalImageURL = `https://www.themoviedb.org/t/p/original/`;
const URL_IMAGE = `https://www.themoviedb.org/t/p/`;

// &include_adult=${adultSearch}

const getPopular = async (adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}&page=1`
  );
  return response.json();
};

const getNowPlaying = async (adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}&page=1`
  );
  return response.json();
};

const getUpcoming = async (adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}&with_release_type=2|3`
  );
  return response.json();
};
const getTopRated = async (adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&page=1`
  );
  return response.json();
};
const getTrending = async (adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&include_adult=${adultSearch}`
  );
  return response.json();
};

const getMovie = async (movieId, adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}`
  );
  return response.json();
};

const getMovieImages = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&`
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

const searchMovies = async (query, adultSearch) => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&query=${query}&page=1&include_adult=false`;
  console.log(searchUrl);
  const response = await fetch(searchUrl);
  return response.json();
};

const getRecommendedMovies = async (movieId, adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&page=1&include_adult=false`
  );
  return response.json();
};

const getVideos = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  return response.json();
};

const getMovieCredits = async (movieId, adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&include_adult=${adultSearch}`
  );
  return response.json();
};

const getMovieCreditsByActor = async (personId, adultSearch) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&include_adult=${adultSearch}`
  );
  return response.json();
};


export {
  getPopular,
  getUpcoming,
  getConfigData,
  getNowPlaying,
  searchMovies,
  getMovie,
  getRecommendedMovies,
  getVideos,
  getMovieCredits,
  getMovieCreditsByActor,
  getTrending,
  getTopRated,
  imageURL,
  originalImageURL,
  URL_IMAGE,
};

//

//
