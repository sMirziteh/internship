import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  Form,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends Component {
  render() {
    var navstyle = {
      backgroundColor: "#285c97",
      padding: "5px"
    };
    return (
      <Navbar expand="lg" style={navstyle}>
        <LinkContainer to="/">
          <Navbar.Brand style={{ color: "#ffff" }}>
            <img
              alt=""
              src="/images/puzzleTest.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapsedMenu" id="basic-navbar-nav">
          <Form inline>
            <InputGroup>
              <FormControl placeholder="Search" />
              <InputGroup.Append>
                <Button
                  style={{ backgroundColor: "#85C441", color: "black" }}
                  variant="outline-secondary"
                >
                  <i class="material-icons search">search</i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Nav className="navbar">
            <LinkContainer className="navLinks" to="/jobs">
              <Nav.Link>Jobs</Nav.Link>
            </LinkContainer>
            <LinkContainer className="navLinks" to="/events">
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer className="navLinks" to="/favorites">
              <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
            <LinkContainer className="navLinks" to="/recommended">
              <Nav.Link>Recommendations</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
