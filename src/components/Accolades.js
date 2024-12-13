import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Carousel2 from '../../src/carousal/Committee.jpg';
import Carousel1 from '../../src/carousal/DigitizationAward.jpg';
import Carousel3 from '../../src/carousal/UltraRunner.jpg';
import Carousel4 from '../../src/carousal/GuidingStar.jpg';
import Carousel5 from '../../src/carousal/MavericAward.jpg';
import Carousel6 from '../../src/carousal/SCBAward.jpg';



export default function Accolades() {
    return (

           
        <Carousel fade  data-bs-theme="dark">
          <Carousel.Item>
          <img src={Carousel1} alt=""/>
            <Carousel.Caption>
              <h4>Standard Chartered: Digitization Award</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Carousel2} alt=""/>
            <Carousel.Caption>
            <h4>Standard Chartered: Employee Engagment Award</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Carousel3} alt=""/>
            <Carousel.Caption>
            <h4>Standard Chartered: Ultra Runner Award</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Carousel4} alt=""/>
            <Carousel.Caption>
            <h4>Maveric: Guiding Star Award</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Carousel5} alt=""/>
            <Carousel.Caption>
            <h4>Maveric: Recruitment Support Award</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Carousel6} alt=""/>
            <Carousel.Caption>
            <h4>Standard Chartered: High Performer Award</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  
      );
}