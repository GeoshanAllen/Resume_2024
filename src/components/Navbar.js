import React from "react";
import "../styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NavbarResume() {
  return (
    <div className="NavbarResume">
      <Container fluid="md">
        <Row md >
          <Navbar expand="lg" className="bg-body-tertiary">
            <Col className="ms-auto" lg="1">
            
            <Navbar.Brand href="/Home">
             M ALLEN GEOSHAN
              </Navbar.Brand>
            </Col>
            <Col ms-auto lg="4" ></Col>
            <Col ms-auto lg="7" >
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/#/Home">Home</Nav.Link>
                  <Nav.Link href="/#/Skills">Skills</Nav.Link>
                  <Nav.Link href="/Experience">Experience</Nav.Link>
                  <Nav.Link href="/Education">Education</Nav.Link>
                  <Nav.Link href="/Accolades">Accolades</Nav.Link>
                  <Nav.Link href="/Trainings">Trainings</Nav.Link>
                  <Nav.Link href="/AboutMe">About Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
}
