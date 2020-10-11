import React, { Component } from "react";
import figma from "../images/logo-figma.svg";
import invision from "../images/logo-invision.svg";
import react from "../images/logo-react.svg";
import sketch from "../images/logo-sketch.svg";
import xcode from "../images/logo-xcode.svg";
import framer from "../images/logo-framer.svg";

class Logos extends Component {
  render() {
    return (
      <div className="logos">
        <img src={figma} alt="" />
        <img src={invision} alt="" />
        <img src={react} alt="" />
        <img src={sketch} alt="" />
        <img src={xcode} alt="" />
        <img src={framer} alt="" />
      </div>
    );
  }
}

export default Logos;
