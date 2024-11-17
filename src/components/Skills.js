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
        <Container fluid>
          <Row>
            {/* <Col></Col> */}
            <Col class="skillsContainer text-center" xs={12}>
              <center>
                <Card style={{ height: "3rem", width: "15rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <img
                        class="skillsLogo"
                        src="../Resume_2024/JavaLogo.png"
                        alt="Java"
                        title="Java"
                      />
                      &nbsp; Java | v17.0.13
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </center>
            </Col>
            {/* <Col class="skillsContainer text-center" xs={4}>
            <center>
              <Card style={{ height: "3rem", width: "20rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">                    
                    <img
                    class="skillsLogo"
                    src="../Resume_2024/ReactLogo.png"
                    alt="React"
                    title="React"
                    />&nbsp;
                    React | v18.2.0
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              </center>
            </Col> */}

            {/* <Col></Col> */}
          </Row>
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" xs={12}>
                <Card style={{ height: "3rem", width: "15rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <img
                        class="skillsLogo"
                        src="../Resume_2024/ReactLogo.png"
                        alt="React"
                        title="React"
                      />
                      &nbsp; React | v18.2.0
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={12} xs={12}>
                <Card style={{ height: "3rem", width: "15rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <img
                        class="skillsLogo"
                        src="../Resume_2024/CucumberLogo.png"
                        alt="Cucumber"
                        title="Cucumber"
                      />
                      &nbsp; Cucumber | v7.20.1
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={12} xs={12}>
                <Card style={{ height: "3rem", width: "15rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <img
                        class="skillsLogo"
                        src="../Resume_2024/JavascriptLogo.png"
                        alt="Javascript"
                        title="Javascript"
                      />
                      &nbsp; Javascript | ES6
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
        </Container>
        <div className="skillsGrid">
          <div>
            <img
              class="skillsLogo"
              src="../Resume_2024/ReactLogo.png"
              alt="React"
              title="React"
            />{" "}
            React{" "}
          </div>
          <div>
            <img
              class="skillsLogo"
              src="../Resume_2024/JavaLogo.png"
              alt="Java"
              title="Java"
            />{" "}
            Java{" "}
          </div>
          <div>
            <img
              class="skillsLogo"
              src="../Resume_2024/CucumberLogo.png"
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
