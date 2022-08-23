import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PageTop.css";

class PageTop extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="text-center">
              <Row>
                <Col className="pageContent">
                  <h3 className="topPageSubTitle">{this.props.pageTitle}</h3>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default PageTop;
