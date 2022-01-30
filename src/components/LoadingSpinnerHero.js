import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingSpinner = (props) => {
 const { promiseInProgress } = usePromiseTracker();

  return (
    <>
        {
         (promiseInProgress === true) ?
        <div className="loader loader8 movie-card"></div>
      :
        null
    }
  </>
  )
};