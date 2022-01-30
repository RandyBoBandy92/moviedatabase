import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <div className="site-wrapper">
      <AppRouter />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
