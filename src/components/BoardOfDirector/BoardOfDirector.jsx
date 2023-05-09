import React from "react";
import "./BoardOfDirector.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import "./BoardOfDirector.css";
import profile1Img from "../../asset/images/About us/profile.jpg";
import profile2Img from "../../asset/images/About us/avatar.jpg";
import profile3Img from "../../asset/images/About us/avatarFemale.png";

const BoardOfDirector = () => {
  return (
    <>
      <div className="profile-area">
        <Container style={{marginTop:"3rem"}}>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>Mr. Md Samsul Arifin</h2>
                  <p style={{ fontSize: "12px" }} className="main-text-p">Managing Director</p>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile3Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>Mrs. Ferdausi Akter</h2>
                  <p style={{ fontSize: "12px" }} className="main-text-p">Deputy Managing Director</p>
                  <p></p>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>Al Amin Masud Alam</h2>
                  <p style={{ fontSize: "12px" }} className="main-text-p">General Manager</p>
                  <p></p>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>Md. Akram Hossain</h2>
                  <p style={{ fontSize: "12px" }} className="main-text-p">General Manager</p>
                  <p></p>
                </div>

                <div className="socials">
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BoardOfDirector;
