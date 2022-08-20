import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Services.css";
class Services extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2 className="mainTitle">My Services</h2>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <Card.Img
                  variant="top"
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png"
                />
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Web Development</h2>
                  <p className="servicesCardPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <Card.Img
                  variant="top"
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png"
                />
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Web Development</h2>
                  <p className="servicesCardPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="serviceCard">
                <Card.Img
                  variant="top"
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png"
                />
                <Card.Body className="text-center">
                  <h2 className="servicesCardTitle">Web Development</h2>
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
