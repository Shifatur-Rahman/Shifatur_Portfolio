import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Services.css";
import coding from "../../asset/images/code.jpg";
import web_design from "../../asset/images/web_design.jpeg";
import clean_code from "../../asset/images/clean_code.jpeg";
class Services extends Component {
  
  render() {
    return (
      <div>
        <Container>
          <h2 className="mainTitle">Product and Services</h2>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <Card.Img variant="top" src={web_design} />
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Web Design</h2>
                  <p className="servicesCardPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <Card.Img variant="top" src={coding} />
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Coding</h2>
                  <p className="servicesCardPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <Card.Img variant="top" src={clean_code} />
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Clean Code</h2>
                  <p className="servicesCardPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
