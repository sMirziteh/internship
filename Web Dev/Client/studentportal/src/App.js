import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routing from "./components/routing";
import Navigation from "./components/Navbar";

function App() {
  return (
    <div>
      <Navigation />
      <Routing />
    </div>
  );
}

export default App;
