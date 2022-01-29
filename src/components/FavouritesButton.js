import { useContext } from "react"
import { GlobalContext } from "../GlobalState"

const FavouritesButton = ({movieData}) => {
    // this button will take in the id of the movie it is being rendered by
    // it will then draw in the entire favourites context and necessary actions
    // conditionally display different text based on whether the movie
    // is or is not favourites
    // and it will handle clicks to either add/remove a movie from favourites
 

  const {favourites, addFavourite, delFavourite} = useContext(GlobalContext)
  
  const isFavourited = () => {
      const movieInFavourites = favourites.filter(favourite => favourite.id === movieData.id)
      if (movieInFavourites.length > 0) { // movie already exists
          return true
      } else {
          return false
      }
  }
  
  const handleClick = () => {
    if (isFavourited()) {
        delFavourite(movieData)
    } else {
        addFavourite(movieData)
    }
  }
  

  console.log(movieData)
  

    return (
        <button onClick={handleClick}>
            {isFavourited() ? "Remove" : "Add"}
        </button>
    )
    
}

export default FavouritesButton