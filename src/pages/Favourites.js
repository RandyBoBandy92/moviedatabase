import { useContext, useState } from "react"
import Header from "../components/Header"
import { GlobalContext } from "../GlobalState"
import MoviesContainer from '../components/MoviesContainer';

const FavouritesPage = () => {
  const {favourites, addFavourite, delFavourite} = useContext(GlobalContext)
  console.log(favourites)
    return (
        <div className="wrapper">
        <Header/>
        <main className="favourites-page">
            <MoviesContainer title="Favourites" movies={favourites}/>
        </main>
        </div>
    )
}

export default FavouritesPage