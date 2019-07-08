import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routing from "./components/routing";
import Navigation from "./components/Navbar";
import Landing from "./components/landing";
function App() {
  return (
    <div>
      <Navigation />
      <Link to="/login">Login</Link>
      <Link to="/signup">signup</Link>
      <section>
        <Routing />
      </section>
    </div>
  );
}

export default App;
