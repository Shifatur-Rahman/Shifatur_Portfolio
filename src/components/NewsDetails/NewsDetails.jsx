import React, { useEffect, useState } from 'react'
import "./NewsDetails.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import news1 from "../../asset/images/news/news2.png";
import news2 from "../../asset/images/news/news1.jpg";
import news5 from "../../asset/images/news/news5.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsDetails = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000, 
    pauseOnHover: false, 
    cssEase: "ease-in-out", 
  };
  
  return (
    <>
    
      <Container>
      <Slider {...settings}>
      {newsItems.map((item) => (
          <Col sm={12} md={6} lg={4} key={item.id}>
            <Card className="newsCardNew">
              <Card.Img variant="top" src={item.imageSrc} />
              <Card.Body>
                <h2 className="newsCardTitle">{item.title}</h2>
                <p className="newsHeader" style={{ fontSize: "14px" }}>
                  {" "}
                  <AiOutlineCalendar
                    style={{ fontSize: "20px", color: "#17a2b8" }}
                  />{" "}
                  <span className="newsHeader">{item.date}</span>{" "}
                </p>
                <p
                  className="newsPara"
                  style={{ textAlign: "justify", fontSize: "14px" }}
                >
                  {item.description}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Slider>
      </Container>
    </>
  )
}

export default NewsDetails;

const newsItems = [
  {
    id: 1,
    imageSrc: news2,
    title:
      "Talukder Group of Industries recently held a meeting to discuss strategies for achieving our targets for the upcoming year.",
    date: "January 26, 2020",
    description:
      "During the meeting, we reviewed our current performance and identified areas where improvements could be made.",
  },
  {
    id: 2,
    imageSrc: news5,
    title:
      "Talukder Group of Industries recently held a meeting to encourage collaboration and open communication with our employees.",
    date: "April 05, 2021",
    description:
      "Throughout the meeting, we encouraged open and honest communication among all participants.",
  },
  {
    id: 3,
    imageSrc: news1,
    title:
      "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
    date: "December 26, 2022",
    description:
      "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
  },
  {
    id: 4,
    imageSrc: news1,
    title:
      "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
    date: "December 26, 2022",
    description:
      "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
  },
  {
    id: 5,
    imageSrc: news1,
    title:
      "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
    date: "December 26, 2022",
    description:
      "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
  },
];
