
const API_KEY = process.env.REACT_APP_API_KEY;



const REGION = 'region=CA'
const imageURL = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/`;
const originalImageURL = `https://www.themoviedb.org/t/p/original/`;
const URL_IMAGE = `https://www.themoviedb.org/t/p/`;
const ALT_API  = `2dea7d512a7b6eca5d19868b31f7fb0f`;



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



const getConfigData = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
  );
  return response.json();
};

const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';

export { checkKey, getPopular, getUpcoming, imageURL, getConfigData, getNowPlaying, URL_SEARCH, originalImageURL, URL_IMAGE, ALT_API};


// 



// 
