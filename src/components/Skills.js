import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaWindows,FaBootstrap, FaJava,FaReact,FaFileExcel, FaGitAlt, FaBitbucket, FaJenkins,FaDocker, FaAws, FaTools, FaConfluence, FaAngular,FaHtml5, FaCss3  } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCucumber } from "react-icons/tb";
import { DiJira, DiMsqlServer } from "react-icons/di";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { VscVscode } from "react-icons/vsc";
import {SiCypress,SiEclipseide,SiIntellijidea,SiFirebase,SiOracle, SiSpring, SiTypescript, SiApachegroovy, SiSelenium, SiProtractor, SiPostman, SiSwagger } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { BsSignpostSplitFill } from "react-icons/bs";


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
                      <FaJava style={{ color: "#da6736",  fontSize :"1rem"  }} />
                      &nbsp; Java | v17.0.13 <ProgressBar className="mt-1 progress-orange" animated  now={90} />                      
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
                      <RiJavascriptFill style={{ color: "#da6736", fontSize :"1rem" }} />
                      &nbsp; Javascript | ES6 <ProgressBar className="mt-1 progress-orange" animated  now={80} />  
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
                      <SiTypescript style={{ color: "#da6736",  fontSize :"1rem"  }}/>
                      &nbsp; Typescript | v4.1 <ProgressBar className="mt-1 progress-orange" animated  now={70} />  
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
                      <FaFileExcel style={{ color: "#da6736",  fontSize :"1rem"  }} />
                      &nbsp;Excel VBA(Macros) | v4.1<ProgressBar className="mt-1 progress-orange" animated  now={80} />  
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
                      <TbBrandCucumber style={{ color: "#da6736",  fontSize :"1rem"  }} />
                      &nbsp;Gherkin | v7.20.1<ProgressBar className="mt-1 progress-orange" animated  now={95} />  
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
                    <SiApachegroovy style={{ color: "#da6736",  fontSize :"1rem"  }}/>
                      &nbsp;Groovy | v3.0<ProgressBar className="mt-1 progress-orange" animated  now={70} />  
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
                    <SiSelenium style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;Selenium | v4.27.0<ProgressBar className="mt-1 progress-red" animated  now={95} />  
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
                    <SiCypress style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;Cypress | v13.17.0<ProgressBar className="mt-1 progress-red" animated  now={75} />  
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
                    <SiProtractor style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;Protractor | v7.0.0<ProgressBar className="mt-1 progress-red" animated  now={80} />  
                      </div>         
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <TbBrandCucumber style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;Cucumber | v7.20.1<ProgressBar className="mt-1 progress-red" animated  now={95} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaTools style={{ color: "#da3636",  fontSize :"1rem"  }} />
                      &nbsp;TestNG | v7.9.0<ProgressBar className="mt-1 progress-red" animated  now={80} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <BsSignpostSplitFill style={{ color: "#da3636",  fontSize :"1rem"  }} />
                      &nbsp;RestAssured | v5.5.0<ProgressBar className="mt-1 progress-red" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaWindows style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;Winnium | v1.6.0<ProgressBar className="mt-1 progress-red" animated  now={50} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaGitAlt style={{ color: "#1893a8",  fontSize :"1rem"  }} />
                      &nbsp;Git | v2.47.0<ProgressBar className="mt-1 progress-liteBlue" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <VscAzureDevops style={{ color: "#1893a8",  fontSize :"1rem"  }}/>
                      &nbsp;Azure Devops | vDev19.M247.1<ProgressBar className="mt-1 progress-liteBlue" animated  now={80} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaBitbucket style={{ color: "#1893a8",  fontSize :"1rem"  }}/>
                      &nbsp;BitBucket | v7.19<ProgressBar className="mt-1 progress-liteBlue" animated  now={75} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaJenkins style={{ color: "#1893a8",  fontSize :"1rem"  }}/>
                      &nbsp;Jenkins | v2.422<ProgressBar className="mt-1 progress-liteBlue" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaDocker style={{ color: "#1893a8",  fontSize :"1rem"  }}/>
                      &nbsp;Docker | v24.0.7<ProgressBar className="mt-1 progress-liteBlue" animated  now={45} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaAws style={{ color: "#1893a8",  fontSize :"1rem"  }}/>
                      &nbsp;AWS | v4.0.2<ProgressBar className="mt-1 progress-liteBlue" animated  now={45} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiPostman style={{ color: "#3639da",  fontSize :"1rem"  }}/>
                      &nbsp;Postman | v10.24.26<ProgressBar className="mt-1 progress-darkBlue" animated  now={90} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiSwagger style={{ color: "#3639da",  fontSize :"1rem"  }}/>
                      &nbsp;Swagger | v3.1.0<ProgressBar className="mt-1 progress-darkBlue" animated  now={70} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaTools style={{ color: "#3639da",  fontSize :"1rem"  }}/>
                      &nbsp;Putty | v0.68<ProgressBar className="mt-1 progress-darkBlue" animated  now={95} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaTools style={{ color: "#3639da",  fontSize :"1rem"  }}/>
                      &nbsp;WinSCP | v5.9.6<ProgressBar className="mt-1 progress-darkBlue" animated  now={95} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <DiJira style={{ color: "#3639da",  fontSize :"1rem"  }}/>
                      &nbsp;Jira | v8.22<ProgressBar className="mt-1 progress-darkBlue" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaConfluence style={{ color: "#3639da",  fontSize :"1rem"  }}/>
                      &nbsp;Confluence | v7.13.5<ProgressBar className="mt-1 progress-darkBlue" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaReact style={{ color: "#1b8e3e",  fontSize :"1rem"  }}/>
                      &nbsp;React JS | v18.2.0<ProgressBar className="mt-1 progress-green" animated  now={75} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaAngular style={{ color: "#1b8e3e",  fontSize :"1rem"  }}/>
                      &nbsp;Angular JS | v9.0.0<ProgressBar className="mt-1 progress-green" animated  now={60} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaHtml5 style={{ color: "#1b8e3e",  fontSize :"1rem"  }}/>
                      &nbsp;HTML 5 | v5.2<ProgressBar className="mt-1 progress-green" animated  now={95} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaCss3 style={{ color: "#1b8e3e",  fontSize :"1rem"  }}/>
                      &nbsp;CSS 3<ProgressBar className="mt-1 progress-green" animated  now={95} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <FaBootstrap style={{ color: "#1b8e3e",  fontSize :"1rem"  }}/>
                      &nbsp;Bootstrap | v5.3<ProgressBar className="mt-1 progress-green" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiSpring style={{ color: "#1b8e3e",  fontSize :"1rem"  }}/>
                      &nbsp;Spring Boot | v3.4.0<ProgressBar className="mt-1 progress-green" animated  now={75} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiOracle style={{ color: "#da6736",  fontSize :"1rem"  }}/>
                      &nbsp;Oracle SQL | v19c (12.2.0.3)<ProgressBar className="mt-1 progress-orange" animated  now={90} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <DiMsqlServer style={{ color: "#da6736",  fontSize :"1rem"  }}/>
                      &nbsp;MS SQL | v14.0.3<ProgressBar className="mt-1 progress-orange" animated  now={75} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiFirebase style={{ color: "#da6736",  fontSize :"1rem"  }}/>
                      &nbsp;Firebase | v2018<ProgressBar className="mt-1 progress-orange" animated  now={45} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <VscVscode style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;VS Code | v1.86.2<ProgressBar className="mt-1 progress-red" animated  now={85} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiIntellijidea style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;Intellij Idea | v2023.3.4<ProgressBar className="mt-1 progress-red" animated  now={95} />  
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
                <Card style={{ height: "4rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      <SiEclipseide style={{ color: "#da3636",  fontSize :"1rem"  }}/>
                      &nbsp;STS | v4.24.0<ProgressBar className="mt-1 progress-red" animated  now={70} />  
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </center>
          </Row>
          <br></br>

          <br></br>
          



        </Container>
      </div>
      <br></br>
      <br></br>

    </div>
  );
}
