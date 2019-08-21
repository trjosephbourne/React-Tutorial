// Import the React and ReactDOM libraries
import React from "react";
// Note that it is possible to require a module
import ReactDOM from "react-dom";

// Mult buttons
function getButtonText() {
  return "Click on me!";
}

// Create a react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white"
        }}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

// Show react component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
