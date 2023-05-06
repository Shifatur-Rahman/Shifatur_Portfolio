import React from "react";
import "./TeamManagement.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import mdImg from "../../asset/images/chairman.jpg";
import faceMaskImg from "../../asset/images/management_img/facee.png";
//import { Link } from "react-router-dom";

const TeamManagement = () => {
  return (
    <>
      <Container>
        {/* <h2 className="mainTitle">Management Team </h2> */}
        <Row style={{ marginTop: "5rem" }}>
          <Col lg={3} md={6} sm={12}>
            {/* <Link
              to={`/about/Message/Details?title=${"Mr. Md Samsul Arifin"}&subTitle=${"Managing Director"}`}
            > */}
            <Card className="ManagementDiv">
              <Card.Img variant="top" src={faceMaskImg} alt="img1" />
              <Card.Body>
                <h2 className="managementTeamTitle"> Mr. Md Samsul Arifin</h2>
                <p className="managementTeamSubTitle">Managing Director </p>
                <p className="managementTeamBio">
                  Mr Arifin is an MBA and had travelled extensively all over the
                  world to gather a holistic view of global business. The
                  knowledge of business heredity and the perspective of global
                  business exposure supported him in planning and managing his
                  own business.
                </p>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>

          <Col lg={3} md={6} sm={12}>
            {/* <Link
              to={`/about/Message/Details?title=${"Mrs.Ferdausi Akter"}&subTitle=${"Deputy Managing Director"}`}
            > */}
            <Card className="ManagementDiv">
              <Card.Img variant="top" src={faceMaskImg} alt="img2" />
              <Card.Body>
                <h2 className="managementTeamTitle">Mrs. Ferdausi Akter</h2>
                <p className="managementTeamSubTitle">
                  Deputy Managing Director
                </p>
                <p className="managementTeamBio">
                  A proven Public Servant with a clean & colorful professional
                  track record who is now enriching and adding in Core Corporate
                  values to the Group. By virtue of her pleasant personality,
                  she became the mark of organizational integrity, contributing
                  in developing policy for each operational segment, formulating
                  strategic policy in attaining organizational objectives.
                </p>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>

          <Col lg={3} md={6} sm={12}>
            {/* <Link
              to={`/about/Message/Details?title=${"Al Amin Masud Alam"}&subTitle=${"General Manager"}`}
            > */}
            <Card className="ManagementDiv">
              <Card.Img variant="top" src={faceMaskImg} alt="img3" />
              <Card.Body>
                <h2 className="managementTeamTitle">Al Amin Masud Alam</h2>
                <p className="managementTeamSubTitle">General Manager</p>
                <p className="managementTeamBio">
                  Al Amin Masud Alam has acquired enormous expertise in business
                  sector from local and global associations, is enriched with
                  the latest trend and technologies in this fastest evolving
                  business.
                </p>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>

          <Col lg={3} md={6} sm={12}>
            {/* <Link
              to={`/about/Message/Details?title=${"Md. Akram Hossain"}&subTitle=${"General Manager"}`}
            > */}
            <Card className="ManagementDiv">
              <Card.Img variant="top" src={faceMaskImg} alt="img4" />
              <Card.Body>
                <h2 className="managementTeamTitle">Md. Akram Hossain</h2>
                <p className="managementTeamSubTitle">General Manager</p>
                <p className="managementTeamBio">
                  Md. Akram Hossain has acquired enormous expertise in business
                  sector from local and global associations, is enriched with
                  the latest trend and technologies in this fastest evolving
                  business.
                </p>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeamManagement;
