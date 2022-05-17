import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";

//! try to remove bs an make it custom frm link https://www.youtube.com/watch?v=BHC-ll9PFe0

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        style={{ backgroundColor: "#242424" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Travel Agency
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Button btnStyle="btn-outline" content="Sign Up" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
