 import React, { Component } from "react";
 import Office from "./Office.js";
 import External from "./External.js";
 import CommonRoom from "./CommonRoom.js";

class App extends React.Component {



  render() {
    return (
      <div className="App">
        <p className="App">App</p>
        <CommonRoom />
        <External />
        <Office />
      </div>
    );
  }
}

export default App;
