import React, { Component } from "react";
import ListComponent from "./components/ListComponent";
import TodayComponent from "./components/TodayComponent";
import GraphComponent from "./components/GraphComponent";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
