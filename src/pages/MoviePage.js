import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getMovie } from "../utilities/api";

// Data Structure from API:
    // adult: false
    // backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg"
    // belongs_to_collection: null
    // budget: 200000000
    // genres: Array(4) [ {…}, {…}, {…}, … ]
    // homepage: "https://www.marvel.com/movies/the-eternals"
    // id: 524434
    // imdb_id: "tt9032400"
    // original_language: "en"
    // original_title: "Eternals"
    // overview: "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants."
    // popularity: 11902.6
    // poster_path: "/b6qUu00iIIkXX13szFy7d0CyNcg.jpg"
    // production_companies: Array [ {…} ]
    // production_countries: Array [ {…} ]
    // release_date: "2021-11-03"
    // revenue: 401842256
    // runtime: 156
    // spoken_languages: Array(5) [ {…}, {…}, {…}, … ]
    // status: "Released"
    // tagline: "In the beginning..."
    // title: "Eternals"
    // video: false
    // vote_average: 7.3
    // vote_count: 2852

const MoviePage = () => {
  const [movieData, setMovieData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMovie(id)
      .then((data) => setMovieData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(movieData)
  return (
    <div className="wrapper">
      <Header />
      <main></main>
    </div>
  );
};

export default MoviePage;
