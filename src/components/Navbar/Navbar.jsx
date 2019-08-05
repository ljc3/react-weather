import React, { Component } from "react";
import "./Navbar.css";
import SearchBox from "../SearchBox";
import UnitComponent from "../UnitComponent";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <SearchBox />
          </li>
          <li>
            <span>New York, US</span>
          </li>
          <li>
            <UnitComponent />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
