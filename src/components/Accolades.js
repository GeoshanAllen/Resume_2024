import React from "react";
import "../styles.css";
import Carousel from "react-bootstrap/Carousel";
import Carousel2 from "../../src/carousal/Committee.jpg";
import Carousel1 from "../../src/carousal/DigitizationAward.jpg";
import Carousel3 from "../../src/carousal/UltraRunner.jpg";
import Carousel4 from "../../src/carousal/GuidingStar.jpg";
import Carousel5 from "../../src/carousal/MavericAward.jpg";
import Carousel6 from "../../src/carousal/SCBAward.jpg";

export default function Accolades() {
  return (
    <div>
      <br></br>

      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img src={Carousel1} alt="" />
          <Carousel.Caption>
            <center>
            <h4 class="bg-dark text-white" style={{ width: "50rem" }}>Standard Chartered: Digitization Award</h4>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel2} alt="" />
          <Carousel.Caption>
          <center>
            <h4 class="bg-dark text-white" style={{ width: "50rem" }}>Standard Chartered: Employee Engagment Award</h4>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel3} alt="" />
          <Carousel.Caption>
          <center>
            <h4 class="bg-dark text-white" style={{ width: "50rem" }}>Standard Chartered: Ultra Runner Award</h4>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel4} alt="" />
          <Carousel.Caption>
          <center>
            <h4 class="bg-dark text-white" style={{ width: "50rem" }}>Maveric: Guiding Star Award</h4>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel5} alt="" />
          <Carousel.Caption>
          <center>
            <h4  class="bg-dark text-white" style={{ width: "50rem" }}>Maveric: Recruitment Support Award</h4>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel6} alt="" />
          <Carousel.Caption>
          <center>
            <h4 class="bg-dark text-white" style={{ width: "50rem" }}>Standard Chartered: High Performer Award</h4>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
