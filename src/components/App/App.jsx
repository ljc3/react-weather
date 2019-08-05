import React, { Component } from "react";
import NavBar from "../Navbar";
import "./App.css";
import TodayComponent from "../TodayComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div>
          <NavBar />
        </div>
        <div className="app-today">
          <TodayComponent />
        </div>
      </div>
    );
  }
}

export default App;
