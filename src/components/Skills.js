import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
export default function Skills() {
  return (
    <div>
      <div className="skills">
        <h4>Skills</h4>
        <Container>
          <Row>
            <Col></Col>
            <Col class="skillsContainer text-center" xs={4}>
            <center>
              <Card style={{ height: "3rem", width: "20rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">                    
                    <img
                      class="skillsLogo"
                      src="../JavaLogo.png"
                      alt="Java"
                      title="Java"
                    />&nbsp;
                    Java | v17.0.13
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              </center>
            </Col>
            <Col class="skillsContainer text-center" xs={4}>
            <center>
              <Card style={{ height: "3rem", width: "20rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">                    
                    <img
                    class="skillsLogo"
                    src="../ReactLogo.png"
                    alt="React"
                    title="React"
                    />&nbsp;
                    React | v18.2.0
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              </center>
            </Col>

           <Col></Col>
          </Row>
          <br></br>
          <Row>
            <Col></Col>
            <Col class="skillsContainer text-center" xs={4}>
            <center>
              <Card style={{ height: "3rem", width: "20rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">                    
                    <img
                      class="skillsLogo"
                      src="../JavaLogo.png"
                      alt="Java"
                      title="Java"
                    />&nbsp;
                    Java | v17.0.13
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              </center>
            </Col>
            <Col class="skillsContainer text-center" xs={4}>
            <center>
              <Card style={{ height: "3rem", width: "20rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">                    
                    <img
                    class="skillsLogo"
                    src="../ReactLogo.png"
                    alt="React"
                    title="React"
                    />&nbsp;
                    React | v18.2.0
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              </center>
            </Col>

           <Col></Col>
          </Row>
        </Container>
        <div className="skillsGrid">
          <div>
            <img
              class="skillsLogo"
              src="../ReactLogo.png"
              alt="React"
              title="React"
            />{" "}
            React{" "}
          </div>
          <div>
            <img
              class="skillsLogo"
              src="../JavaLogo.png"
              alt="Java"
              title="Java"
            />{" "}
            Java{" "}
          </div>
          <div>
            <img
              class="skillsLogo"
              src="../CucumberLogo.png"
              alt="Cucumber"
              title="Cucumber"
            />{" "}
            Cucumber{" "}
          </div>
          <div source="path/to/html-icon.svg" alt="HTML" title="HTML"></div>
          <div source="path/to/css-icon.svg" alt="CSS" title="CSS"></div>
        </div>
      </div>
    </div>
  );
}
