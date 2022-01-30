import { useContext, useState } from "react";
import Header from "../components/Header";
import { GlobalContext } from "../GlobalState";
import MoviesContainer from "../components/MoviesContainer";

const FavouritesPage = () => {
  const { favourites, addFavourite, delFavourite } = useContext(GlobalContext);
  console.log(favourites);
  return (
    <main className="favourites-page">
      {favourites.length > 0 ? (
        <MoviesContainer title="Favourites" movies={favourites} />
      ) : (
        <>
          <h3>
            Hmm.. Either you have no favourites, or the site is broken. 🤔
          </h3>
          <h3>No Refunds!</h3>
        </>
      )}
    </main>
  );
};

export default FavouritesPage;
