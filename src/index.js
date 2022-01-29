import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <div onScroll={(event) => {console.log("test")}}>
      <AppRouter />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
