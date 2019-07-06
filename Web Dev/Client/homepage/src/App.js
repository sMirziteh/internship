import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/Navbar";

class App extends Component {
  render() {
    return <Navigation />;
  }
}

export default App;
