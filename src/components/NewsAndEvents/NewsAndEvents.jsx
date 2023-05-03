import React, { useEffect } from "react";
import "./NewsAndEvents.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import news1 from "../../asset/images/news/news2.png";
import news2 from "../../asset/images/news/news1.jpg";
import news5 from "../../asset/images/news/news5.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const NewsAndEvents = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      duration: 2000, // values from 0 to 3000, with step 50ms
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      animatedClassName: "aos-animate", // class applied on animation
      initClassName: "aos-init", // class applied after initialization
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container>
        {/* data-aos='fade-up' */}
        <h1 className="knowusTitle">News And Events</h1>
        {/* data-aos='slide-right' */}

        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className="newsCard">
              <Card.Img variant="top" src={news2} />
              <Card.Body>
                <h2 className="newsCardTitle">
                  Talukder Group of Industries recently held a meeting to
                  discuss strategies for achieving our targets for the upcoming
                  year.{" "}
                </h2>
                <p style={{ fontSize: "14px" }}>
                  <AiOutlineCalendar style={{ fontSize: "20px", color:"#17a2b8" }} />{" "}
                  <span className="newsHeader">January 26, 2020</span>{" "}
                </p>
                <p
                  className="newsPara"
                  style={{ textAlign: "justify", fontSize: "14px" }}
                >
                  During the meeting, we reviewed our current performance and
                  identified areas where improvements could be made.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="newsCard">
              <Card.Img variant="top" src={news5} />
              <Card.Body>
                <h2 className="newsCardTitle">
                  Talukder Group of Industries recently held a meeting to
                  encourage collaboration and open communication with our
                  employees.{" "}
                </h2>
                <p className="newsHeader" style={{ fontSize: "14px",  }}>
                  {" "}
                  <AiOutlineCalendar style={{ fontSize: "20px", color:"#17a2b8" }} />{" "}
                  <span className="newsHeader">April 05, 2021</span>{" "}
                </p>
                <p
                  className="newsPara"
                  style={{ textAlign: "justify", fontSize: "14px" }}
                >
                  Throughout the meeting, we encouraged open and honest
                  communication among all participants.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="newsCard">
              <Card.Img variant="top" src={news1} />
              <Card.Body>
                <h2 className="newsCardTitle">
                  Talukder Group of Industries recently organized an event to
                  celebrate the achievements of our company.{" "}
                </h2>
                <p className="newsHeader" style={{ fontSize: "14px" }}>
                  {" "}
                  <AiOutlineCalendar style={{ fontSize: "20px", color:"#17a2b8" }} />{" "}
                  <span className="newsHeader">December 26, 2022</span>{" "}
                </p>
                <p
                  className="newsPara"
                  style={{ textAlign: "justify", fontSize: "14px" }}
                >
                  The event was held at a prestigious venue and was attended by
                  senior executives, department heads, and representatives.
                </p>
                {/* <Button variant="info">More Info</Button> */}
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </>
  );
};

export default NewsAndEvents;
