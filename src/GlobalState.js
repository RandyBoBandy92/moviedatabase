import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  ADD_FAVOURITE,
  DEL_FAVOURITE,
  TOGGLE_SETTING,
} from "./utilities/constants";

// Initial State
const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
  settings: JSON.parse(localStorage.getItem("settings")) || {
    nicCageMode: false,
  },
};

// createContext returns an object with a Provider and Consumer
// initialState must be declared to prevent errors on first render

const GlobalContext = createContext(initialState);

// Provider Component

const GlobalProvider = (props) => {
  // useReducer returns an array with the current state, and a dispatch function
  // the dispatch function allows us to change state
  // each function, are "actions"
  // the type is the name of the action
  // the payload is the data that is being passed to the reducer

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavourite = (newFavourite) => {
    dispatch({
      type: ADD_FAVOURITE,
      payload: newFavourite,
    });
  };

  const delFavourite = (favouriteToRemove) => {
    dispatch({
      type: DEL_FAVOURITE,
      payload: favouriteToRemove,
    });
  };

  const toggleSetting = (setting) => {
    dispatch({
      type: TOGGLE_SETTING,
      payload: setting,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        settings: state.settings,
        toggleSetting,
        favourites: state.favourites,
        addFavourite,
        delFavourite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
