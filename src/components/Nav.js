import React, { Component } from "react";
import logo from "../images/logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav_links">
            <ul>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
              <li>
                <a href="#">Workshops</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </div>

          <div className="nav_button">
            <a href="#" className="btn btn_try">
              Try for free
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
