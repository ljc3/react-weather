import React, { Component } from "react";
import Navbar from "../Navbar";
import TodayComponent from "../TodayComponent";
import ListComponent from "../ListComponent";
import GraphComponent from "../GraphComponent";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "C",
      queryString: "",
      latLng: [],
      navbarData: {},
      todayComponentData: {},
      listComponentData: [],
      graphComponentData: []
    };
  }

  componentDidMount() {
    const geolocation = navigator.geolocation;
    if (geolocation) {
      const permissionGranted = position => {
        this.setState(
          {
            latLng: [position.coords.latitude, position.coords.longitude]
          },
          this.notifyStateChange
        );
      };
      const permissionDenied = () => {
        console.log("Location Permission Denied");
      };
      geolocation.getCurrentPosition(permissionGranted, permissionDenied);
    } else {
      console.log("GeoLocation not supported...Update the browser...");
    }
  }

  notifyStateChange = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar />
        </div>
        <div className="app-today">
          <TodayComponent />
        </div>
        <div className="app-list-graph">
          <ListComponent />
          <GraphComponent />
        </div>
      </div>
    );
  }
}

export default App;
