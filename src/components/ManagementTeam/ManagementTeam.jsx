import React from "react";
import "./ManagementTeam.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import faceMaskImg from "../../asset/images/management_img/facee.png";

import { Link } from "react-router-dom";

const ManagementTeam = () => {
  return (
    <>
      <Container>
        <h2 className="mainTitle">Board of Directors</h2>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <Link to={`/about/chairman-message`}>
              <Card className="imageCard">
                <Card.Img className="photoCard"
                  style={{ height: "350px" }}
                  variant="top"
                  src={faceMaskImg}
                />
                <Card.Body className="text-center">
                  <h2 className="managementName">
                    ALHAJ MD NURUL ISLAM TALUKDER
                  </h2>
                  <p className="managementDesignation">CHAIRMAN</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <Link to={`/about/md-message`}>
              <Card className="imageCard">
                <Card.Img
                  style={{ height: "350px" }}
                  variant="top"
                  src={faceMaskImg}
                />
                <Card.Body className="text-center">
                  <h2 className="managementName">MR MD SAMSUL ARIFIN</h2>
                  <p className="managementDesignation">MANAGING DIRECTOR </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        <Row style={{ marginTop: "2rem" }}>
          <Col lg={3} md={3} sm={6}>
            <Link
              to={`/about/Message/Details?title=${"MR MD SAMSUL ABEDIN"}&subTitle=${"Director"}`}
            >
              <Card   
              className="imageCard">
                <Card.Img  variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">MR MD SAMSUL ABEDIN</h2>
                  <p className="managementDesignation">Director</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <Link
              to={`/about/Message/Details?title=${"MR MD SAMSUL SALEHIN"}&subTitle=${"Director"}`}
            >
              <Card 
               className="imageCard">
                <Card.Img variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">MR MD SAMSUL SALEHIN </h2>
                  <p className="managementDesignation">Director</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <Link
              to={`/about/Message/Details?title=${"Mrs. Shaila Akter"}&subTitle=${" Chief Executive Officer (CEO)"}`}
            >
              <Card 
              //style={{ height: "350px" }}
               className="imageCard">
                <Card.Img variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">Mrs. Shaila Akter</h2>
                  <p className="managementDesignation">
                    Chief Executive Officer (CEO)
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <Link
              to={`/about/Message/Details?title=${"Mrs.Ferdausi Akter"}&subTitle=${"Deputy Managing Director"}`}
            >
              <Card 
              //style={{ height: "350px" }} 
              className="imageCard">
                <Card.Img variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">Mrs.Ferdausi Akter</h2>
                  <p className="managementDesignation">
                    Deputy Managing Director
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default ManagementTeam;
