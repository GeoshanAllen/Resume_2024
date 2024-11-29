import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabContent from "react-bootstrap/TabContent";

export default function Experience() {
  return (
    <div>
      <div className="skills">
        <Container fluid class="bg-dark text-white">
          <h4 class="bg-dark text-white">
            <span class="material-symbols-outlined mat-icon-center">
            work
            </span>
            &nbsp;Experience
          </h4>
        </Container>

        <div>
          <Row className="mt-2 experience-overview">
            <center>
              <Col></Col>
              <Col xs={11}>
                <div>
                  SDET with 9 years of rich IT experience in software testing
                  and development with demonstrated track of record of
                  completing all projects on time.
                </div>
                <div>
                  Highly innovative, solution oriented and always working
                  towards increasing application efficiency and test coverage.
                </div>
                <div>
                  Managed a team of 9 and trained more than 50 resources.
                </div>
                <div>
                  Focused on Organization building by extending contributions in
                  hiring (More than 300 plus interviews conducted).
                </div>
              </Col>
              <Col></Col>
            </center>
          </Row>
        </div>
        <Row className="ms-2 me-2 mt-2">
          <Tabs
            defaultActiveKey="SCB"
            id="justify-tab"
            variant="pills"
            fill
            justify
          >
            <Tab
              eventKey="SCB"
              title="Standard Chartered GBS (Jan 2022 - Present)"
            >
              <TabContent className="tab-content ms-2 mt-3">
               <h6>
                  <img
                    style={{ width: 40, height: 50 }}
                    src="../Resume_2024/SCB_Logo.png"
                    alt="SCB_LOGO"
                  />
                  <span> Test Manager - Standard Chartered GBS</span>
                </h6>

                - Sole Automation Test Manager for GPBS+ System Automation
                <br />
                - Automated more than 600+ Test Cases using Genie framework
                (Cucumber BDD + JUnit)
                <br />
                - Cleaned up Regression Automation cases and configured daily
                run for Sanity test cases using Jenkins and ADO pipeline.
                <br />
                - Performed POC and successfully implemented automation for
                Putty, WinSCP, API, Pdf, Desktop, email and XML files. <br />
                - Performed Regression Testing using Jenkins, AWS and ADO
                pipeline.
                <br />
                - Provided Automation Estimation and Coverage Information to
                Scrum Team.
                <br />
                - Provided Training sessions for Business Analysts on Feature
                file preparation and code commit processes.
                <br />
                - Managed a team of 15 and supported and trained team on
                automation
                <br />
                - Worked in an Agile team for Insprint Automation while
                simultaneously supporting Regression activities <br />
                - Contributed towards POC for Desktop applications
                <br />
                - Created various utilities like Feed File Generator, Country
                Template Validator, Base Rate Validator etc.
                <br />
                - Conducted interviews for more than 100+ candidates for SCB.
                <br />
                - Maintained the Bitbucket, ADO repository for access management
                and conducted code review for peers.
                <br />
                - Involved in preparing proposals and estimations.
                <br />
                - Worked on code migration from Excel VBA to Selenium Java.
                <br />
                - Developed springoot based dashboards to run automation scripts
                for functional testers and Business analysts.
                <br />
              </TabContent>
            </Tab>
            <Tab eventKey="MS" title="Maveric Systems (Jan 2022 - Present)">
            <TabContent className="tab-content ms-2 mt-3">
               <h6>
                  <img
                    style={{ width: 110, height: 55 }}
                    src="../Resume_2024/Maveric_Systems_Logo.png"
                    alt="SCB_LOGO"
                  />
                  <span> Principal Software Engineer - Maveric Systems</span>
                </h6>

                - Sole Automation Test Manager for GPBS+ System Automation
                <br />
                - Automated more than 600+ Test Cases using Genie framework
                (Cucumber BDD + JUnit)
                <br />
                - Cleaned up Regression Automation cases and configured daily
                run for Sanity test cases using Jenkins and ADO pipeline.
                <br />
                - Performed POC and successfully implemented automation for
                Putty, WinSCP, API, Pdf, Desktop, email and XML files. <br />
                - Performed Regression Testing using Jenkins, AWS and ADO
                pipeline.
                <br />
                - Provided Automation Estimation and Coverage Information to
                Scrum Team.
                <br />
                - Provided Training sessions for Business Analysts on Feature
                file preparation and code commit processes.
                <br />
                - Managed a team of 15 and supported and trained team on
                automation
                <br />
                - Worked in an Agile team for Insprint Automation while
                simultaneously supporting Regression activities <br />
                - Contributed towards POC for Desktop applications
                <br />
                - Created various utilities like Feed File Generator, Country
                Template Validator, Base Rate Validator etc.
                <br />
                - Conducted interviews for more than 100+ candidates for SCB.
                <br />
                - Maintained the Bitbucket, ADO repository for access management
                and conducted code review for peers.
                <br />
                - Involved in preparing proposals and estimations.
                <br />
                - Worked on code migration from Excel VBA to Selenium Java.
                <br />
                - Developed springoot based dashboards to run automation scripts
                for functional testers and Business analysts.
                <br />
              </TabContent>
            </Tab>
            <Tab eventKey="CG" title="Capgemini">
              Capgemini
            </Tab>
            <Tab eventKey="ACT" title="Accenture">  
              Accenture
            </Tab>
          </Tabs>
        </Row>
      </div>
    </div>
  );
}
