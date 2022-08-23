import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./AllProject.css";

class AllProject extends Component {
  render() {
    return (
      <>
        <Container className="text-center">
          <Row className="allProjectMargin">
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>

                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>

                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                />
                <Card.Body>
                  <h2 className="projectCardTitle">Card title</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Button className="projectCardBtn">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AllProject;
