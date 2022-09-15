import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TopBanner.css";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col className="topContent">
                  <h1 className="topBannerTitle">
                    Hello, I am Shifatur Rahman
                  </h1>
                  <h3 className="topBannerSubTitle">I'm Front End Developer</h3>
                  <Link to="/portfolio">
                    <Button
                      className="topBannerBtn"
                      variant="outline-secondary"
                    >
                      More Info
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}
