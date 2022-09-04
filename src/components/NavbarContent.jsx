import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavbarContent = () => {
  return (
    <div>
      <Navbar className="navbarContent" bg="light" expand="lg">
        <Container>
          <div className="logo">
            <Link to="/">
              <Navbar.Brand as="p">Crypto card</Navbar.Brand>
            </Link>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className="nav__Content">
            <Navbar.Collapse id="navbarScroll">
              <div className="contact_button">
                <Nav.Link href="/contact" className="btn btn-warning">
                  Contact
                </Nav.Link>
              </div>
              <CartWidget />
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarContent;
