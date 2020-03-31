// Create a Right side component
// neeeds a form component, two switch components
// fill out the form component with name, breed and birthday fields

import React, { Component } from "react";

class Right extends Component {
  state = {};
  render() {
    return (
      <div className="containerDivRight">
        <form onSubmit>
          <h1>YAY, We love Dogs! Give us the basics about your pup.</h1>

          <div className="formContainer">
            <div className="formContainerOne">
              <div className="formContainerOneLeft">
                <label>
                  Name:
            <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Breed:
            <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="formContainerOneRight">
                <label>
                  <img src="https://cdn0.iconfinder.com/data/icons/video-production-2-2/66/109-512.png" width="25px" />Upload a Photo
          </label>
                <label>
                  Birthday
            <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="formContainerTwo">
              <div className="formContainerTwoLeft">
                <div>
                  <label>
                    Gender
            <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Gender
            <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className = "formContainerTwoRight">
                <label>
                  Gender
            <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Gender
            <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Right;
