import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabContent from "react-bootstrap/TabContent";

export default function Experience() {
  return (
    <div className="mb-5  ">
      <br></br>
      <br></br>
      <div className="skills mt-2">
        <Container
          fluid
          class="header-bg text-white"
          style={{ position: "fixed", zIndex: "100000" }}
        >
          <h4
            class="header-bg text-white"
            style={{ border: "3px solid black" }}
          >
            <span class="material-symbols-outlined mat-icon-center">work</span>
            &nbsp;Experience
          </h4>
          </Container>

          <Container
          fluid>
          <Row className=" experience-overview">
            <center className="mt-5">
              <Col xs={12}>
              <div className="expContent">
                <div justify>
                  SDET with 9 years of rich IT experience in software testing
                  and development with demonstrated track of record of
                  completing all projects on time.             
                  Highly innovative, solution oriented and always working
                  towards increasing application efficiency and test coverage.                
                  Managed a team of 9 and trained more than 50 resources.                
                  Focused on Organization building by extending contributions in
                  hiring (More than 300 plus interviews conducted).
                </div>
                </div>
              </Col>
            </center>
          </Row>
          </Container>
          <Container
          fluid>
        <Row className=" mt-2 p-0">
          <Tabs
            defaultActiveKey="SCB"
            id="justify-tab"
            variant="tabs"            
            
            fill
            
            className="tabs-nav-link  p-0"
          >
            <Tab
              eventKey="SCB"
              title="Standard Chartered GBS (Jan22 - Present)"
            >
              <TabContent className="tab-content ms-2 mt-3">
   
                <h6>
                  <img
                    style={{ width: 40, height: 50 }}
                    src="../Resume_2024/SCB_Logo.png"
                    alt="SCB_LOGO"
                  />
                  <span> Standard Chartered GBS - Test Manager</span>
                </h6>
                <div className="expContent">
                - Sole Automation Test Manager for Global Pricing and Billing
                System
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
                </div>

              </TabContent>
            </Tab>
            <Tab eventKey="MS" title="Maveric Systems (Dec21 - Jan22)">
              <TabContent className="tab-content ms-2 mt-3">
                <h6>
                  <img
                    style={{ width: 110, height: 55 }}
                    src="../Resume_2024/Maveric_Systems_Logo.png"
                    alt="SCB_LOGO"
                  />
                  <span>Maveric Systems - Principal Software Engineer</span>
                </h6>
                <div className="expContent">
                - Sole Automation Test Manager for Global Pricing and Billing
                System
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
                </div>
              </TabContent>
            </Tab>
            <Tab eventKey="STR" title="Startup (Apr18 - Nov20)">
              <TabContent className="tab-content ms-2 mt-3">
                <h6>
                  <img
                    style={{ width: 30, height: 30 }}
                    src="../Resume_2024/startupLogo.jpg"
                    alt="Startup_Logo"
                  />
                  <span>

                    &nbsp; Freelancing / Startup Experience 
                  </span>
                </h6>
                <div className="expContent">  
                - Involved in development of Webpage from scratch using Angular JS and Google Firebase <br />
                - Was involved in testing the application <br />
                - Involved in Stakeholder Management <br />
                - Defect Identification and Resolution <br />
                - Client Demonstrations for various Client Change Requests<br />
                </div>
              </TabContent>
            </Tab>
            <Tab eventKey="CG" title="Capgemini (Jul15 - Mar18)">
              <TabContent className="tab-content ms-2 mt-3">
                <h6>
                  <img
                    style={{ width: 40, height: 35 }}
                    src="../Resume_2024/CG_Logo2.png"
                    alt="Capgemini_Logo"
                  />
                  <span> &nbsp;Capgemini - Consultant</span>
                </h6>
                <div className="expContent">
                - Involved in test planning, automation test case generation and
                test data preparation. <br />
                - Automated 600+ UI test scenarios using Cucumber JUnit
                Framework.
                <br />
                - Reviewed and Documented test scripts and test suites.
                <br />
                - Automated API Test scenarios using REST Assured framework
                (created Macros for automated Test Data).
                <br />
                - Part of Agile team and maintained task completion on time with
                proactive on time reporting of blockers/issues.
                <br />
                - Automation test script enhancements on change requests from
                client.
                <br />
                - Performed Defect Tracking and provided client demo using
                automation scripts.
                <br />
                - Was also involved in the requirements gathering phase for a
                Change Request in Guardian.
                <br />
                - Also contributed towards creating insurance functional
                knowledge documents for COE DTG portal.
                <br />
                - Contributed towards creating common methods and framework
                development.
                <br />
                - Part of the code maintenance and standards team and
                responsible for code conflicts resolution in TFS.
                <br />
                - Was involved in trainings and presentations and represented
                the team for Agile ceremonies.
                <br />
                </div>
              </TabContent>
            </Tab>
            <Tab eventKey="ACT" title="Accenture (Jun11 - May13)">
              <TabContent className="tab-content ms-2 mt-3">
                <h6>
                  <img
                    style={{ width: 30, height: 30 }}
                    src="../Resume_2024/Act_Logo.png"
                    alt="Accenture_Logo"
                  />
                  <span>
                    {" "}
                    &nbsp; Accenture Services Pvt Ltd - Software Engineer
                  </span>
                </h6>
                <div className="expContent">  
                - Involved in Automation framework design and maintenance using
                Selenium, POM, TestNG and Maven. <br />
                - Was involved in creating and maintaining source code in GIT
                repository. <br />
                - Created reusable methods for Hybrid Framework. <br />
                - Performed Smoke testing and regression testing and reported
                defects promptly. <br />
                - Involved in regular communication with client (regular
                meetings and demonstrations). <br />
                - Performed manual Testing (TCER and Test Cases preparation and
                execution). <br />
                - Automated High and Medium Priority scenarios and assisted in
                code and conflict resolutions for team members. <br />
                - Documented all functionalities for future reference. <br />
                - Deputised the team on handling day today testing and
                automation activities. <br />
                </div>
              </TabContent>
            </Tab>
            
          </Tabs>
        </Row>
        </Container>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
