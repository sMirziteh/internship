import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routing from "./components/Routing";
import Navigation from "./components/Navbar";
function App() {
  return (
    <div>
      <Navigation />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">signup</Link>
      <section>
        <Routing />
      </section>
    </div>
  );
}

export default App;
