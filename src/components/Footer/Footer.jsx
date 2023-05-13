import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import "./Footer.css";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { FaFax, FaInstagramSquare } from "react-icons/fa";
import GoogleMap from "../GoogleMap/GoogleMap";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [message, setMessage] = useState("");

  let submitHandle = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/13827510-d18d-4c6d-91ec-869c48917ea8",
        data
      )
      .then((res) => {
        console.log(res);
      });

    if (!name) {
      setNameErr("Please Enter your name");
    } else {
      setNameErr("");
    }
    if (!email) {
      setEmailErr("Enter your valid email: ");
    } else {
      setEmailErr("");
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      duration: 2000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <>
      <Container className="footerSection">
        {/* First footer section */}
        <Row style={{ marginBottom: "2rem", textAlign: "center" }}>
          {/* data-aos='fade-up' */}
          <h2 className="knowusTitle">Contact us</h2>

          <Col sm={12} md={6} lg={4}>
            <MdPhoneIphone className="contactIcon" />
            <p className="contactIconName">
              <strong>Cell:</strong> +88-01966-333355
            </p>
            <p className="contactIconName">
              Saturday - Thrusday (9:00AM-6:00PM)
            </p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <AiOutlineMail className="contactIcon" />
            <p className="contactIconName">
              <strong>Email:</strong> info@talukder-group.com.bd
            </p>
            <p className="contactIconName">
              <strong>Web:</strong> www.talukder-group.com.bd
            </p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <GoLocation className="contactIcon" />
            <p className="contactIconName" style={{ fontSize: "13px" }}>
              <strong>Location:</strong> House #39, Lake Drive Road, Nikunja-1
            </p>
            <p className="contactIconName">
              Saturday - Thrusday (9:00AM-6:00PM)
            </p>
          </Col>
        </Row>

        <hr />

        {/* Second footer section */}

        <Row style={{ margin: "3rem" }}>
          <Col className="footerLocation" sm={12} md={5} lg={5}>
            <h1 style={{ textAlign: "center" }} className="footerTitle">
              Our Location
            </h1>
            <GoogleMap />
          </Col>
          <Col sm={12} lg={2} md={2}></Col>
          <Col sm={12} md={5} lg={5}>
            <h1 style={{ textAlign: "center" }} className="footerTitle">
              Quick connect
            </h1>
            {/* data-aos='fade-left' */}
            <Form onSubmit={submitHandle}>
              <Form.Group className="mb-3">
                <Form.Label className="contactFormHeader">Name</Form.Label>

                <Form.Control
                  className="formControl"
                  type="text"
                  name="username"
                  placeholder="Enter your name: "
                  value={name.username}
                  onChange={(e) => setName(e.target.value)}
                  Value={name}
                />

                {nameErr ? (
                  <Alert
                    style={{ width: "350px", fontSize: "11px", height: "50px" }}
                    severity="error"
                  >
                    Please enter your name!
                  </Alert>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="contactFormHeader">Email </Form.Label>

                <Form.Control
                  className="formControl"
                  type="email"
                  name="email"
                  placeholder="Enter your Email: "
                  value={name.email}
                  onChange={(e) => setEmail(e.target.value)}
                  Value={email}
                />

                {emailErr ? (
                  <Alert
                    style={{ width: "350px", fontSize: "11px", height: "50px" }}
                    severity="error"
                  >
                    Please Enter your valid email!
                  </Alert>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="contactFormHeader">Message</Form.Label>
                <Form.Control
                  className="formControl"
                  as="textarea"
                  rows="5"
                  name="message"
                  placeholder="Write your message here...."
                  value={name.text}
                  onChange={(e) => setMessage(e.target.value)}
                  Value={message}
                />
              </Form.Group>
              <div id="submitBtn">
                <Button className="contactFormBtn" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <hr />

        {/* Third footer section */}

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          <Col sm={12} md={4} lg={4} className="footerTextAlign">
            <h1 className="footerTitle">Head Office</h1>

            <AiFillHome className="socialFontPhone" />
            <a className="socialLink">
              {" "}
              Talukder Group of Industries House #39, Lake Drive Road,
              Nikunja-1, Dhaka-1229.Bangladesh
            </a>
            <br />

            <BsFillTelephoneFill className="socialFontPhone" />
            <a className="socialLink"> +88-02-48955420, +88-01966-333355</a>
            <br />

            <MdEmail className="socialFontPhone" />
            <a className="socialLink">info@talukder-group.com.bd</a>
            <br />

            <FaFax className="socialFontPhone" />
            <a className="socialLink"> +88-02-48955604</a>
          </Col>

          <Col sm={12} md={4} lg={4} className="footerTextAlign">
            <h1 className="footerTitle">Get to touch</h1>
            <BsFacebook className="socialFontFacebook" />
            <a
              className="socialLink"
              href="https://www.facebook.com/"
              target="_blank"
            >
              Facebook
            </a>

            <br />

            <BsTwitter className="socialFontTwitter" />
            <a
              className="socialLink"
              href="https://twitter.com/"
              target="_blank"
            >
              Twitter
            </a>
            <br />

            <BsYoutube className="socialFontYoutube" />
            <a
              className="socialLink"
              href="https://www.youtube.com/"
              target="_blank"
            >
              YouTube
            </a>
            <br />
            <FaInstagramSquare className="socialFontInsta" />
            <a
              className="socialLink"
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
            >
              Instagram
            </a>
          </Col>

          <Col sm={12} md={4} lg={4} className="footerTextAlign">
            <h1 className="footerTitle">Our Factory</h1>

            <AiFillHome className="socialFontPhone" />
            <a className="socialLink">
              {" "}
              Talukder uPVC Factory, Baniargati, Bashundia, Jessore
            </a>
            <br />

            <BsFillTelephoneFill className="socialFontPhone" />
            <a className="socialLink"> +88-01952288381</a>
            <br />

            <MdEmail className="socialFontPhone" />
            <a className="socialLink">info@talukder-group.com.bd</a>
            <br />

            <FaFax className="socialFontPhone" />
            <a className="socialLink"> +88-02-48955604</a>
          </Col>
        </Row>
      </Container>

      {/*Fourth footer section */}

      <Container
        style={{ marginTop: "2rem" }}
        fluid="true"
        className=" copyrightSection text-center"
      >
        <a className="copyrightText" href="#">
          &copy; Copyright{" "}
          <strong style={{ color: "#00acee" }}> Talukder </strong> Group Of
          Industries Limited {new Date().getFullYear()}
        </a>
      </Container>
    </>
  );
};

export default Footer;
