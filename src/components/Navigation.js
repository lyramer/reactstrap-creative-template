import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Collapse,
  NavItem,
  NavLink,
  Button,
  NavbarBrand,
  NavbarToggler,
  Container
} from "reactstrap";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      className="navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <Container>
        <NavbarBrand href="#page-top">Start Bootstrap</NavbarBrand>
        <NavbarToggler>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto my-2 my-lg-0" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
