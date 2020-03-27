// Create a Right side component
// neeeds a form component, two switch components
// fill out the form component with name, breed and birthday fields

import React, { Component } from "react";

class Right extends Component {
  state = {};
  render() {
    return (
      <div className="containerDivRight">
        <h1>YAY, We love Dogs! Give us the basics about your pup.</h1>
        <form onSubmit>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </label>
        </form>
      </div>
    );
  }
}

export default Right;
