// Create Left side of the webpage
// need to create a heading with children lists

import React, { Component } from "react";

class Left extends Component {
  state = {};
  render() {
    return (
      <div className="containerDiv">
        <div className="heading">
          <img
            src="https://pawsofcoronado.org/wp-content/uploads/2016/01/cropped-favicon.png"
            width="70px"
          ></img>
          <h1>Pawtastic</h1>
        </div>
        <div className="leftList">
          <form>
            <ul>
              <li>Human Profile</li>
              <li>Pet Basics</li>
              <li>Pet Details</li>
              <li>Confirm</li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Left;
