import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <div className="site-limiter">
      <div className="wrapper">
        <AppRouter />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
