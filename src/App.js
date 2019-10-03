import React from "react";
import "./App.css";
import Routes from "./Components/Routes";
import NavBar from "./Components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
