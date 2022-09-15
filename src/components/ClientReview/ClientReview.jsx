import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./ClientReview.css";

class ClientReview extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <>
        <Container className=" text-center">
          <h1 className="mainTitle"> Client Review </h1>
          <Slider className="slider" {...settings}>
            <div className="clientCard">
              <Row className="text-center justify-content-center">
                <Col sm={12} md={6} lg={6}>
                  <img
                    className="circleImg"
                    src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_167585366_20001372200092800_78813.jpg"
                    alt="client_img"
                  />
                  <h1 className="clientTitle">Web Development</h1>
                  <p className="clientPara">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam optio, totam magni quam deserunt deleniti maxime
                    ipsa voluptates laudantium recusandae consequatur, corporis,
                    rem distinctio ipsam?
                  </p>
                </Col>
              </Row>
            </div>
            <div className="clientCard">
              <Row className="text-center justify-content-center">
                <Col sm={12} md={6} lg={6}>
                  <img
                    className="circleImg"
                    src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_167585366_20001372200092800_78813.jpg"
                    alt="client_img"
                  />
                  <h1 className="clientTitle">Web Development</h1>
                  <p className="clientPara">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam optio, totam magni quam deserunt deleniti maxime
                    ipsa voluptates laudantium recusandae consequatur, corporis,
                    rem distinctio ipsam?
                  </p>
                </Col>
              </Row>
            </div>
            <div className="clientCard">
              <Row className="text-center justify-content-center">
                <Col sm={12} md={6} lg={6}>
                  <img
                    className="circleImg"
                    src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_167585366_20001372200092800_78813.jpg"
                    alt="client_img"
                  />
                  <h1 className="clientTitle">Web Development</h1>
                  <p className="clientPara">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam optio, totam magni quam deserunt deleniti maxime
                    ipsa voluptates laudantium recusandae consequatur, corporis,
                    rem distinctio ipsam?
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </>
    );
  }
}

export default ClientReview;
