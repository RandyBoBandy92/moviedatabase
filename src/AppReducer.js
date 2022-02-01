import {
  ADD_FAVOURITE,
  DEL_FAVOURITE,
  TOGGLE_SETTING,
} from "./utilities/constants";

const AppReducer = (state, action) => {
  // the action is an object with a type and a payload
  // the state is the present state before action is applied
  // the state is created in the GlobalState.js file
  // via the GlobalProvider useReducer hook

  const saveToLocalStorage = (localStorageItem, data) => {
    localStorage.setItem(localStorageItem, JSON.stringify(data));
  };

  let updatedFavourites;
  switch (action.type) {
    case ADD_FAVOURITE:
      updatedFavourites = [...state.favourites, action.payload];
      saveToLocalStorage("favourites", updatedFavourites);
      return {
        ...state,
        favourites: updatedFavourites,
      };
      break;

    case DEL_FAVOURITE:
      updatedFavourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
      saveToLocalStorage("favourites", updatedFavourites);
      return { ...state, favourites: updatedFavourites };
      break;

    case TOGGLE_SETTING:
      const updatedSettings = {
        ...state.settings,
        [action.payload]: !state.settings[action.payload],
      };
      saveToLocalStorage("settings", updatedSettings);
      return { ...state, settings: updatedSettings };
      break;

    default:
      return state;
      break;
  }
};

export default AppReducer;
