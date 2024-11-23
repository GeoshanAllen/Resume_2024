import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function AboutMe() {
  let linkedInURL = "https://www.linkedin.com/in/allen-geoshan-ag19/";
  let githubURL = "https://github.com/GeoshanAllen";

  return (
    <div>
      <div className="skills">
        <Container fluid class="bg-dark text-white">
          <h4 class="bg-dark text-white">
            <span class="material-symbols-outlined mat-icon-center">
              account_circle
            </span>
            &nbsp;About Me
          </h4>
        </Container>
        <br></br>
        <Container fluid>
          <Row
            onClick={() => 
              window.location = 'mailto:geoshanallen@gmail.com'}
          >
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <span class="material-symbols-outlined mat-icon-center">
                        stacked_email
                      </span>
                      &nbsp;geoshanallen@gmail.com
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <span class="material-symbols-outlined mat-icon-center">
                        call
                      </span>
                      &nbsp;8792429485
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <span class="material-symbols-outlined mat-icon-center">
                        location_on
                      </span>
                      &nbsp;Chennai 603211
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          <Row
            onClick={() => {
              window.open(linkedInURL);
            }}
          >
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <span class="material-symbols-outlined mat-icon-center">
                        link
                      </span>
                      &nbsp; Linked In
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          <Row
            onClick={() => {
              window.open(githubURL);
            }}
          >
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <span class="material-symbols-outlined mat-icon-center">
                        link
                      </span>
                      &nbsp; Github
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
        </Container>
      </div>
    </div>
  );
}
