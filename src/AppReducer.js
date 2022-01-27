import { ADD_FAVOURITE, DEL_FAVOURITE } from "./utilities/constants";

const AppReducer = (state, action) => {
  // the action is an object with a type and a payload
  // the state is the present state before action is applied
  // the state is created in the GlobalState.js file
  // via the GlobalProvider useReducer hook

  const saveFavourites = (newFavourites) => {
      localStorage.setItem('favourites', JSON.stringify(newFavourites))
  }

  let updatedFavourites;
  switch (action.type) {
    case ADD_FAVOURITE:
      updatedFavourites = [...state.favourites, action.payload];
      saveFavourites(updatedFavourites)
      console.log(state)
      return {
          favourites: updatedFavourites
      }
      break;

    case DEL_FAVOURITE:
      updatedFavourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
      saveFavourites(updatedFavourites)
      return { favourites: updatedFavourites };
      break;

    default:
      return state;
      break;
  }
};

export default AppReducer;
