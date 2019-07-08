import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routing from "./components/routing";
import Navigation from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Link to="/login">Login</Link>
      <Routing />
    </div>
  );
}

export default App;
