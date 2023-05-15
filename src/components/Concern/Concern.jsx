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

    <Col>
    <div className="concernName center">

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
