import React, { Component } from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="text-center footerSection">
          <Row>
            <Col sm={12} md={6} lg={3} className="p-5 footerTextAlign">
              <h1 className="footerTitle">Follow me</h1>
              <BsFacebook className="socialFontFacebook" />
              <a className="socialLink" href="#">
                Facebook
              </a>
              <br />

              <BsTwitter className="socialFontTwitter" />
              <a className="socialLink" href="#">
                Twitter
              </a>
              <br />

              <BsYoutube className="socialFontYoutube" />
              <a className="socialLink" href="#">
                YouTube
              </a>
            </Col>
            <Col sm={12} md={6} lg={3} className="p-5 footerTextAlign">
              <h1 className="footerTitle">Address</h1>

              <AiFillHome className="socialFontPhone" />
              <a className="socialLink"> Khan monjil, khilkhet,dhaka-1229</a>
              <br />

              <MdEmail className="socialFontPhone" />
              <a className="socialLink">shifaturnovel@gmail.com</a>
              <br />

              <BsFillTelephoneFill className="socialFontPhone" />
              <a className="socialLink"> 01921601608</a>
            </Col>
            <Col sm={12} md={6} lg={3} className="p-5 footerTextAlign">
              <h1 className="footerTitle">Information</h1>

              <a href="#" className="socialLink">
                About Me
              </a>
              <br />
              <a href="#" className="socialLink">
                My Resume
              </a>
              <br />
              <a href="#" className="socialLink">
                Contact Me
              </a>
            </Col>
            <Col sm={12} md={6} lg={3} className="p-5 footerTextAlign">
              <h1 className="footerTitle">Legal</h1>
              <a href="#" className="socialLink">
                Refused Policy
              </a>
              <br />
              <a href="#" className="socialLink">
                Terms and condition
              </a>
              <br />
              <a href="#" className="socialLink">
                Privacy policy
              </a>
            </Col>
          </Row>
        </Container>

        <Container fluid="true" className=" copyrightSection text-center">
          <a className="copyrightText" href="#">
            Shifatur.com &copy; 2022-2023
          </a>
        </Container>
      </>
    );
  }
}

export default Footer;
