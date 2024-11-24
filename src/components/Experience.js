import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Experience() {
return(
<div>
<div className="skills">
        <Container fluid class="bg-dark text-white">
          <h4 class="bg-dark text-white">
            <span class="material-symbols-outlined mat-icon-center">
              star_rate
            </span> 
            &nbsp;Experience
          </h4>
        </Container>
        <br></br>
        <div>Principal Software Engineer in Automation Testing with a pragmatic approach, leveraged on nuances, with gifted presentation skills.
5 years 8 months of rich IT experience in software testing with demonstrated track of record of completing all project related tasks on time
Highly innovative, solution oriented and always working towards increasing automation coverage. Managed a team of 6 and trained more than
25 resources. Focused on Organization building by my contributions in hiring (More than 250 plus Level 1 interviews conducted).</div>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="SCB" title="Standard Chartered GBS">
      Standard Chartered GBS
      </Tab>
      <Tab eventKey="MS" title="Maveric Systems">
        Maveric Systems
      </Tab>
      <Tab eventKey="CG" title="Capgemini">
      Capgemini
      </Tab>
      <Tab eventKey="ACT" title="Accenture" >
        Accenture
      </Tab>
    </Tabs>
    </div>
    </div>
  );
}


