import React, { Component } from "react";
import "./UnitComponent.css";

class UnitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "C"
    };
  }

  render() {
    return (
      <div className="unit-container">
        <span
          className={`unit-value ${
            this.state.unit === "C" ? "active-unit" : ""
          }`}
          onClick={this.changeUnit}
        >
          C
        </span>
        <span
          className={`unit-value ${
            this.state.unit === "F" ? "active-unit" : ""
          }`}
          onClick={this.changeUnit}
        >
          F
        </span>
      </div>
    );
  }
}

export default UnitComponent;
