import React from "react";
import "./ManagementTeam.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import faceMaskImg from "../../asset/images/management_img/facee.png";

import { Link } from "react-router-dom";
import BoardOfDirector from "../BoardOfDirector/BoardOfDirector";

const ManagementTeam = () => {
  return (
    <>
      <Container>
        {/* <h2 className="mainTitle">Board of Directors</h2> */}

        <Row style={{marginTop:"5rem"}}>
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
          
              <Card   
              className="imageCard">
                <Card.Img  variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">MR MD SAMSUL ABEDIN</h2>
                  <p className="managementDesignation">Director</p>
                  <p className="managementTeamBio">
                  An MBA from a reputed university in Dhaka, Mr Md Samsul Abedin is one of the directors in Talukder Group of Industries who engaged in strengthening Brand image of the Group.
                  </p>
                  {/* As a director, he is involved in various aspects of the group's operations and is committed to strengthening its brand image. */}
                  <Link
              to={`/about/Message/Details?title=${"MR MD SAMSUL ABEDIN"}&subTitle=${"Director"}`}
            >
                  <Button variant="outline-info">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
          </Col>

          <Col lg={3} md={3} sm={6}>
           
              <Card 
               className="imageCard">
                <Card.Img variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">MR MD SAMSUL SALEHIN </h2>
                  <p className="managementDesignation">Director</p>
                  <p className="managementTeamBio">
                  An MBA from a reputed university in Dhaka, Mr Md Samsul Salehin is one of the directors in Talukder Group of Industries who is working with full devotion in Market Survey that give foundation of new opportunity.
                  </p>
                  <Link
              to={`/about/Message/Details?title=${"MR MD SAMSUL SALEHIN"}&subTitle=${"Director"}`}
            >
                  <Button variant="outline-info">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
          
          </Col>

          <Col lg={3} md={3} sm={6}>
          
              <Card 
              //style={{ height: "350px" }}
               className="imageCard">
                <Card.Img variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">Mrs. Shaila Akter</h2>
                  <p className="managementDesignation">
                    Chief Executive Officer (CEO)
                  </p>
                  <p className="managementTeamBio">
                  After completion MBA from Stamford University Mrs. Shaila Akter hold the position of Chief Executive Officer (CEO) of this organization. Mrs. Shaila Akter very successfully transformed herself to Business Leader. 
                  </p>
                  {/* Apart from her dynamic role as CEO, she is also leading Talukder Distribution Company Limited and ‘J & J Enterprise Ltd.’ - sister concerns of ‘Talukder Group’ as Managing Director.Apart from her dynamic role as CEO, she is also leading Talukder Distribution Company Limited and ‘J & J Enterprise Ltd.’ - sister concerns of ‘Talukder Group’ as Managing Director. */}
                  <Link
              to={`/about/Message/Details?title=${"Mrs. Shaila Akter"}&subTitle=${" Chief Executive Officer (CEO)"}`}
            >
                  <Button variant="outline-info">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            
          </Col>

          <Col lg={3} md={3} sm={6}>
           
              <Card 
              //style={{ height: "350px" }} 
              className="imageCard">
                <Card.Img variant="top" src={faceMaskImg} />
                <Card.Body className="text-center">
                  <h2 className="managementName">Mrs.Ferdausi Akter</h2>
                  <p className="managementDesignation">
                    Deputy Managing Director
                  </p>
                  <p className="managementTeamBio">
                  A proven Public Servant with a clean & colorful professional track record who is now enriching and adding in Core Corporate values to the Group. By virtue of her pleasant personality, she became the mark of organizational integrity, contributing in developing policy for each operational segment, formulating strategic policy in attaining organizational objectives. 
                  </p>
                  <Link
              to={`/about/Message/Details?title=${"Mrs.Ferdausi Akter"}&subTitle=${"Deputy Managing Director"}`}
            >
                  <Button variant="outline-info">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
        
          </Col>

        </Row>

      </Container>
    </>
  );
};

export default ManagementTeam;
