import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <Jumbotron>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">signup</Link>
        Landing
      </Jumbotron>
    );
  }
}
