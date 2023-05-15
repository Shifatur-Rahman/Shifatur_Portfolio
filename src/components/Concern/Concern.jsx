import React from "react";
import "./Concern.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Concern = () => {
  return <>
  {/* <h1>concern</h1>
  <p> Talukder Foundry</p>
  <p>Talukder uPVC</p>
  <p>Talukder Distribution</p>
  <p>Talukder Furniture</p>
  <p>J & J Enterprise</p>
   */}

<Container>
  <Row className="concern" style={{marginTop:"3rem"}}>

    <Col sm={12} md={6} lg={6}>
      
      <div className="concernInfo">
        <p>
      Talukder Group of Industries had started its journey since July, 1973. Founder chairman Mr. Nurul Islam Talukder established Talukder foundry Ltd (TFL) with a vision of large-scale Industrialization. Now Talukder Group is a successful brand name as well as a flagship corporate name in corporate world with great achievement with the dedicated service to all her stakeholders and partners. Under the leadership of Managing Director Mr. Samsul Arafin Talukder Group of Industries becomes the largest partner of LGED, JICA and PEDP in furnishing Primary Schools all over the Country.
      </p>
      </div>
    </Col>

    <Col sm={12} md={6} lg={6}>
    <div className="concernName">
    {/* <p> Talukder Foundry</p>
    <p>Talukder uPVC</p>
    <p>Talukder Distribution</p>
    <p>Talukder Furniture</p>
    <p>J & J Enterprise</p> */}
    <ul>
    <ul>
          <li>
            {" "}
            <a>
              <BsArrowRight className="concernIcon" />
              Talukder Plastic Co. Ltd.
            </a>
          </li>

          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder Foundry Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder uPVC Fittings
              Ind. Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder Distribution Co.
              Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder Furniture Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> J & J Enterprise Ltd.
            </a>
          </li>
        </ul>
    </ul>
    </div>

    </Col>

  </Row>
</Container>

  </>;
};

export default Concern;
