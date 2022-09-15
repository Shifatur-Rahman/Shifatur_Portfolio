import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Projects.css";
import project1 from "../../asset/images/project1.jpg";
import project2 from "../../asset/images/project2.jpg";
import project3 from "../../asset/images/project3.jpg";
import project4 from "../../asset/images/project4.jpg";

class Projects extends Component {
  render() {
    return (
      <>
        <Container className="text-center">
          <h1 className="mainTitle">My projects</h1>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img className="cardDivImg" variant="top" src={project1} />
                <Card.Body>
                  <h2 className="projectCardTitle">Github API</h2>

                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a
                    href="https://github-fetch-api.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="projectCardBtn">Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img variant="top" src={project2} />
                <Card.Body>
                  <h2 className="projectCardTitle">Task Manager</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a
                    href="https://task-manager-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="projectCardBtn">Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img variant="top" src={project3} />
                <Card.Body>
                  <h2 className="projectCardTitle">Loan Calculator</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a
                    href="https://bank-loan-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="projectCardBtn">Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Card className="projectCard">
                <Card.Img variant="top" src={project4} />
                <Card.Body>
                  <h2 className="projectCardTitle">Crud App</h2>
                  <p className="projectCardText">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a
                    href="https://college-management-system.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="projectCardBtn">Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Projects;
