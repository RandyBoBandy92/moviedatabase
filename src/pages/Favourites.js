import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalState";
import MoviesContainer from "../components/MoviesContainer";
import { generateRandomIndex, sanitizeVideoData } from "../utilities/toolbelt";
import { getRecommendedMovies } from "../utilities/api";
import { APP_NAME } from "../utilities/constants";


const FavouritesPage = () => {
  document.title = APP_NAME + "Favourites"
  const { favourites, addFavourite, delFavourite } = useContext(GlobalContext);
  const [recommendedMovies, setRecommendedMovies] = useState(false);
  useEffect(() => {
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

  return (
    <main className="favourites-page">
      {favourites.length > 0 ? (
        <MoviesContainer title="Favourites" movies={favourites} flex="true" />
      ) : (
        <>
          <h3>
            Hmm.. Either you have no favourites, or the site is broken. 🤔
          </h3>
          <h3>No Refunds!</h3>
        </>
      )}
      {recommendedMovies?.movies?.length > 0 ? (
        <MoviesContainer
          title={`If you liked ${recommendedMovies.recommendedMovieSeed.original_title}, you might also like...`}
          movies={recommendedMovies.movies}
        />
      ) : null}
    </main>
  );
};

export default FavouritesPage;
