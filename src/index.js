import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./style/index.css";

import { FavoriteContextProvider } from "./store/favorite-context";

ReactDOM.render(
  <React.StrictMode>
    <FavoriteContextProvider>
      <Router>
        <App />
      </Router>
    </FavoriteContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
