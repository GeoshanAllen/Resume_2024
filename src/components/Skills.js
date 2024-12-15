import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaJava,FaReact,FaFileExcel } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCucumber } from "react-icons/tb";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { SiTypescript, SiApachegroovy, SiSelenium, SiProtractor } from "react-icons/si";


export default function Skills() {
  return (
    <div >
      <br></br>
      <br></br>
      <div className="skills mt-2">
        <Container fluid class="header-bg text-white" style={{ position: "fixed",  zIndex:"100000"}}>
          <h4 class="header-bg text-white " style={{border:"3px solid black"}}>
            <span className="material-symbols-outlined mat-icon-center">
              star_rate
            </span> 
            &nbsp;Skills
          </h4>
        </Container>
        <br></br>
        <Container fluid>
          <Row className="mt-3">
            <center>
              <Col className="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "4rem", zIndex:"1" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <div>
                      <FaJava />
                      &nbsp; Java | v17.0.13 <ProgressBar className="mt-1 progress" animated  now={80} />                      
                      </div>
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                      <RiJavascriptFill />
                      &nbsp; Javascript | ES6 <ProgressBar className="mt-1 progress" animated  now={70} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                      <SiTypescript />
                      &nbsp; Typescript | v4.1 <ProgressBar className="mt-1 progress" animated  now={70} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                      <FaFileExcel />
                      &nbsp;Excel VBA(Macros) | v4.1<ProgressBar className="mt-1 progress" animated  now={70} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                      <TbBrandCucumber />
                      &nbsp;Gherkin | v7.20.1<ProgressBar className="mt-1 progress" animated  now={70} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                    <SiApachegroovy />
                      &nbsp;Groovy | v3.0<ProgressBar className="mt-1 progress" animated  now={70} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                    <SiSelenium />
                      &nbsp;Selenium | v4.27.0<ProgressBar className="mt-1 progress" animated  now={95} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <div>
                    <SiProtractor />
                      &nbsp;Protractor | v7.0.0<ProgressBar className="mt-1 progress" animated  now={80} />  
                      </div>         
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
                      {/* <img
                        class="skillsLogo"
                        src="../Resume_2024/ReactLogo.png"
                        alt="React"
                        title="React"
                      /> */}
                      <FaReact />
                      &nbsp; React | v18.2.0
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>
          
          <Row >
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      {/* <img
                        class="skillsLogo"
                        src="../Resume_2024/CucumberLogo.png"
                        alt="Cucumber"
                        title="Cucumber"
                      /> */}
                      <TbBrandCucumber />
                      &nbsp;Cucumber | v7.20.1
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
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
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
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
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
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
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
          <br></br>
          <Row>
            <center>
              <Col class="skillsContainer text-center" md={4} xs={10}>
                <Card style={{ height: "3rem" }}>
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
      </div>
      <br></br>
      <br></br>

    </div>
  );
}
