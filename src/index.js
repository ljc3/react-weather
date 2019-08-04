import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const WeatherApp = () => {
  return (
    <div>
      <span>
        <i className="fab fa-react" />
      </span>
      <span>Weather App</span>
      <span>
        <i className="wi wi-day-sunny" />
      </span>
    </div>
  );
};

const ROOT_NODE = document.getElementById("root");
ReactDOM.render(<WeatherApp />, ROOT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
