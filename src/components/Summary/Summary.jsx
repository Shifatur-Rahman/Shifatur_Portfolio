import React, { Component,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Summary.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Summary = () =>  {

  useEffect(() => {
    AOS.init({
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      duration: 2000, // values from 0 to 3000, with step 50ms
     
    });
  }, []);
  
    return (
      <>
        <Container fluid={true} className="SummarySection summaryMargin p-0">
          <div className="summaryOverlay">
            <Container className="text-center">
            {/* data-aos='fade-down' */}
              <Row>
                <Col lg={9} md={8} sm={12}>
                  <Row className="countSection">
                   
                  <Col>
                      <h2 className="summaryTitle">
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 0 }}
                        >
                          {({ isVisible }) => (
                            <div
                              className="chartsCountUp"
                              style={{ height: 40 }}
                            >
                              {isVisible ? <CountUp end={1973} /> : null}
                            </div>
                          )}
                        </VisibilitySensor>
                      </h2>
                      <h2 className="summaryTitle">Inception as a Commodity Trader</h2>
                      <hr className="summaryAlign" />
                    </Col>

                   
                   
                    <Col>
                      <h2 className="summaryTitle">
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 0 }}
                        >
                          {({ isVisible }) => (
                            <div
                              className="chartsCountUp"
                              style={{ height: 40 }}
                            >
                              {isVisible ? <CountUp end={20} /> : null} K+
                            </div>
                          )}
                        </VisibilitySensor>
                      </h2>

                      <h2 className="summaryTitle">Total <br />Employees</h2>

                      <hr className="summaryAlign" />
                    </Col>
                    
                    <Col>
                      <h2 className="summaryTitle">
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 0 }}
                        >
                          {({ isVisible }) => (
                            <div
                              className="chartsCountUp"
                              style={{ height: 40 }}
                            >
                              {isVisible ? <CountUp end={10} /> : null} <span style={{fontSize:"32px"}}>+</span>
                            </div>
                          )}
                        </VisibilitySensor>
                      </h2>
                      <h2 className="summaryTitle">Awards</h2>
                      <hr className="summaryAlign" />
                    </Col>

                  </Row>
                </Col>

                <Col lg={3} md={4} sm={12}>
                  <Card className="summaryCard">
                    <Card.Body>
                      <h2 className="summaryCardTitle">Our Services</h2>
                      <Card.Text>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          LGED
                        </p>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          PLASTIC
                        </p>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          CORPORATE PLASTIC
                        </p>
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                        UPVC
                        </p>
                       
                        <p className="summaryCardText">
                          {" "}
                          <BsFillArrowRightCircleFill className="summaryIcon" />{" "}
                          OFFICE FURNITURE
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


export default Summary;
