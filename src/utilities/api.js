const API_KEY = process.env.REACT_APP_API_KEY;

const imageURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"

const checkKey = () => {
  console.log(API_KEY);
};

const getPopular = async () => {
   const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.json()
}



const getConfigData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
    return response.json()
}


export { checkKey, getPopular, imageURL, getConfigData };
