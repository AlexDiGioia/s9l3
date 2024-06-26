import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Component } from "react";





function MyNav(props){
  const handleSelect = eventKey => props.setCategory(eventKey);
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Libri Belli</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" activeKey="1" onSelect={handleSelect}>
          <Nav.Link eventKey="1">Home</Nav.Link>
          <Nav.Link eventKey="2">About</Nav.Link>
          <NavDropdown title="Browse" id="nav-dropdown">
        <NavDropdown.Item eventKey="fantasy">Fantasy</NavDropdown.Item>
        <NavDropdown.Item eventKey="history">History</NavDropdown.Item>
        <NavDropdown.Item eventKey="horror">Horror</NavDropdown.Item>
        <NavDropdown.Item eventKey="romance">Romance</NavDropdown.Item>
        <NavDropdown.Item eventKey="scifi">Scifi</NavDropdown.Item>
      </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
  
};

export default MyNav;
