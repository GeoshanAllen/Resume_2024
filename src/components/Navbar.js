import React from "react";
import "../styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NavbarResume() {
  return (
    <div class="position-fixed">

      <Container fluid>
        <Row md>
          <Navbar sticky="top"  expand="lg" className="bg-body-tertiary " collapseOnSelect>
            <Col ms-auto lg="1"></Col>
            <Col  lg="1">
              <Navbar.Brand href="/Resume_2024/#/Home">
                <img
                  src="../Resume_2024/AllenLogo.png"
                  alt="Logo"
                  title="Logo"
                  style={{ height: "2rem", width: "2rem" }}
                ></img>
                &nbsp;M ALLEN GEOSHAN
              </Navbar.Brand>
            </Col>
            <Col ms-auto lg="1"></Col>
            <Col ms="5" ms-auto lg="8">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                <Nav className="ms-auto" >
                  <Nav.Link href="/Resume_2024/#/Home">
                    <span class="material-symbols-outlined mat-icon-center">
                      home
                    </span>
                    <span class="nav-custom-postion">Home</span>
                  </Nav.Link>
                  <Nav.Link href="/Resume_2024/#/Skills" >
                    <span class="material-symbols-outlined mat-icon-center">
                      star_rate
                    </span>
                    <span class="nav-custom-postion">Skills</span>
                  </Nav.Link>
                  <Nav.Link href="/Resume_2024/#/Experience">
                    <span class="material-symbols-outlined mat-icon-center">
                      work
                    </span>
                    <span class="nav-custom-postion">Experience</span>
                  </Nav.Link>
                  <Nav.Link href="/Resume_2024/#/Education">
                    <span class="material-symbols-outlined mat-icon-center">
                      article
                    </span>
                    <span class="nav-custom-postion">Education</span>
                  </Nav.Link>
                  <Nav.Link href="/Resume_2024/#/Accolades">
                    <span class="material-symbols-outlined mat-icon-center">
                      workspace_premium
                    </span>
                    <span class="nav-custom-postion">Accolades</span>
                  </Nav.Link>
                  <Nav.Link href="/Resume_2024/#/AboutMe">
                    <span class="material-symbols-outlined mat-icon-center">
                      account_circle
                    </span>
                    <span class="nav-custom-postion">About Me</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
}
