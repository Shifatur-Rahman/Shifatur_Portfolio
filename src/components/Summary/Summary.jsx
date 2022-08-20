import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Summary.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";

class Summary extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="SummarySection summaryMargin p-0">
          <div className="summaryOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <h2 className="summaryTitle">
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 0 }}
                        >
                          {({ isVisible }) => (
                            <div style={{ height: 40 }}>
                              {isVisible ? <CountUp end={200} /> : null}
                            </div>
                          )}
                        </VisibilitySensor>
                      </h2>

                      <h2 className="summaryTitle">Total Projects</h2>

                      <hr className="summaryAlign" />
                    </Col>
                    <Col>
                      <h2 className="summaryTitle">
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 0 }}
                        >
                          {({ isVisible }) => (
                            <div style={{ height: 40 }}>
                              {isVisible ? <CountUp end={100} /> : null}
                            </div>
                          )}
                        </VisibilitySensor>
                      </h2>
                      <h2 className="summaryTitle">Total Clients</h2>
                      <hr className="summaryAlign" />
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="summaryCard">
                    <Card.Body>
                      <h2 className="summaryCardTitle">How i Work</h2>
                      <Card.Text>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          Requirement Gathering
                        </p>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          System Analysis
                        </p>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          Coding Testing{" "}
                        </p>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          Implementation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default Summary;
