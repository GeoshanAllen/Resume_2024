import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabContent from "react-bootstrap/TabContent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Education() {
  return (
    <div className="mb-5  ">
      <br></br>
      <br></br>
      <div className="skills mt-2">
        <Container fluid  class="header-bg text-white" style={{ position: "fixed",  zIndex:"100000"}}>
          <h4 class="header-bg text-white" style={{border:"3px solid black"}}>
            <span class="material-symbols-outlined mat-icon-center">
              article
            </span>
            &nbsp;Education
          </h4>
        </Container>
        <br></br>
        <center className="mt-4">
        <Container fluid>
          <Row>
          <Col>
          </Col>
            <Col md={3} xs={10}>
              <Card>
              <center>
                <Card.Img  className=" mt-3"
                  variant="bottom"
                  style={{ width: 100, height: 100 }}
                  src="../Resume_2024/Christ_Logo.png"
                />
                <Card.Body>
                  <Card.Title>MBA Finance </Card.Title>
                  <Card.Text>Christ University, Bengaluru</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">March - 2015</small>
                </Card.Footer>
                </center>
              </Card>
            </Col>
            <br></br>
            <Col  md={3} xs={10}>
              <Card>
                <center>
                <Card.Img className=" mt-3"
                  variant="bottom"
                  style={{ width: 100, height: 100 }}
                  src="../Resume_2024/SRR_Logo.png"
                />
                <Card.Body>
                  <Card.Title>BE - ECE
                  </Card.Title>
                  <Card.Text>SRR Engineering College, Chennai
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">May - 2011</small>
                </Card.Footer>
                </center>
              </Card>
            </Col>
            <Col md={3} xs={10}>
              <Card>
                <center>
                <Card.Img className=" mt-3"
                  variant="bottom"
                  style={{ width: 100, height: 100 }}
                  src="../Resume_2024/DB_Logo.png"
                />
                <Card.Body>
                  <Card.Title>Higher Secondary 
                  </Card.Title>
                  <Card.Text>Don Bosco MHSS, Chennai</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">March - 2007</small>
                </Card.Footer>
                </center>
              </Card>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        </center>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
