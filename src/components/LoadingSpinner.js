import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingSpinner = (props) => {
 const { promiseInProgress } = usePromiseTracker({delay:50});

  return (
    <>
        {
         (promiseInProgress === true) ?
        <div className="loader loader8"></div>
      :
        null
    }
  </>
  )
};