import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Workshop from "./Workshop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="workshop" exact element={<Workshop/>}/>
        <Route path="/" exact element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
