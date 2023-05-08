// import React, { useEffect, useState } from "react";
// import "./NewsAndEvents.css";
// import { Col, Container, Row, Card, Button } from "react-bootstrap";
// import news1 from "../../asset/images/news/news2.png";
// import news2 from "../../asset/images/news/news1.jpg";
// import news5 from "../../asset/images/news/news5.jpg";
// import { AiOutlineCalendar } from "react-icons/ai";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const NewsAndEvents = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 120,
//       delay: 0,
//       easing: "ease",
//       duration: 2000,
//       disable: false,
//       once: false,
//       mirror: false,
//       startEvent: "DOMContentLoaded",
//       animatedClassName: "aos-animate",
//       initClassName: "aos-init",
//       useClassNames: false,
//     });
//   }, []);

//   return (
//     <>
//       <Container>
//         <h1 className="knowusTitle">News And Events</h1>

//         <Row>
//           <Col sm={12} md={6} lg={4}>
//             <Card className="newsCard">
//               <Card.Img variant="top" src={news2} />
//               <Card.Body>
//                 <h2 className="newsCardTitle">
//                   Talukder Group of Industries recently held a meeting to
//                   discuss strategies for achieving our targets for the upcoming
//                   year.{" "}
//                 </h2>
//                 <p style={{ fontSize: "14px" }}>
//                   <AiOutlineCalendar
//                     style={{ fontSize: "20px", color: "#17a2b8" }}
//                   />{" "}
//                   <span className="newsHeader">January 26, 2020</span>{" "}
//                 </p>
//                 <p
//                   className="newsPara"
//                   style={{ textAlign: "justify", fontSize: "14px" }}
//                 >
//                   During the meeting, we reviewed our current performance and
//                   identified areas where improvements could be made.
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col sm={12} md={6} lg={4}>
//             <Card className="newsCard">
//               <Card.Img variant="top" src={news5} />
//               <Card.Body>
//                 <h2 className="newsCardTitle">
//                   Talukder Group of Industries recently held a meeting to
//                   encourage collaboration and open communication with our
//                   employees.{" "}
//                 </h2>
//                 <p className="newsHeader" style={{ fontSize: "14px" }}>
//                   {" "}
//                   <AiOutlineCalendar
//                     style={{ fontSize: "20px", color: "#17a2b8" }}
//                   />{" "}
//                   <span className="newsHeader">April 05, 2021</span>{" "}
//                 </p>
//                 <p
//                   className="newsPara"
//                   style={{ textAlign: "justify", fontSize: "14px" }}
//                 >
//                   Throughout the meeting, we encouraged open and honest
//                   communication among all participants.
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col sm={12} md={6} lg={4}>
//             <Card className="newsCard">
//               <Card.Img variant="top" src={news1} />
//               <Card.Body>
//                 <h2 className="newsCardTitle">
//                   Talukder Group of Industries recently organized an event to
//                   celebrate the achievements of our company.{" "}
//                 </h2>
//                 <p className="newsHeader" style={{ fontSize: "14px" }}>
//                   {" "}
//                   <AiOutlineCalendar
//                     style={{ fontSize: "20px", color: "#17a2b8" }}
//                   />{" "}
//                   <span className="newsHeader">December 26, 2022</span>{" "}
//                 </p>
//                 <p
//                   className="newsPara"
//                   style={{ textAlign: "justify", fontSize: "14px" }}
//                 >
//                   The event was held at a prestigious venue and was attended by
//                   senior executives, department heads, and representatives.
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default NewsAndEvents;


// // Second news


// // import React, { useEffect, useState } from 'react'
// // import "./NewsAndEvents.css"
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";
// // import { Col, Container, Row, Card, Button } from "react-bootstrap";
// // import news1 from "../../asset/images/news/news2.png";
// // import news2 from "../../asset/images/news/news1.jpg";
// // import news5 from "../../asset/images/news/news5.jpg";
// // import { AiOutlineCalendar } from "react-icons/ai";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const NewsAndEvents = () => {


// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 3,
// //     autoplay: true,
// //     autoplaySpeed: 3000, 
// //     pauseOnHover: false, 
// //     cssEase: "ease-in-out", 
// //   };
  
// //   return (
// //     <>
    
// //       <Container>
// //       <Slider {...settings}>
// //       {newsItems.map((item) => (
// //           <Col sm={12} md={6} lg={4} key={item.id}>
// //             <Card className="newsCardNew">
// //               <Card.Img variant="top" src={item.imageSrc} />
// //               <Card.Body>
// //                 <h2 className="newsCardTitle">{item.title}</h2>
// //                 <p className="newsHeader" style={{ fontSize: "14px" }}>
// //                   {" "}
// //                   <AiOutlineCalendar
// //                     style={{ fontSize: "20px", color: "#17a2b8" }}
// //                   />{" "}
// //                   <span className="newsHeader">{item.date}</span>{" "}
// //                 </p>
// //                 <p
// //                   className="newsPara"
// //                   style={{ textAlign: "justify", fontSize: "14px" }}
// //                 >
// //                   {item.description}
// //                 </p>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Slider>
// //       </Container>
// //     </>
// //   )
// // }

// // export default NewsAndEvents;

// // const newsItems = [
// //   {
// //     id: 1,
// //     imageSrc: news2,
// //     title:
// //       "Talukder Group of Industries recently held a meeting to discuss strategies for achieving our targets for the upcoming year.",
// //     date: "January 26, 2020",
// //     description:
// //       "During the meeting, we reviewed our current performance and identified areas where improvements could be made.",
// //   },
// //   {
// //     id: 2,
// //     imageSrc: news5,
// //     title:
// //       "Talukder Group of Industries recently held a meeting to encourage collaboration and open communication with our employees.",
// //     date: "April 05, 2021",
// //     description:
// //       "Throughout the meeting, we encouraged open and honest communication among all participants.",
// //   },
// //   {
// //     id: 3,
// //     imageSrc: news1,
// //     title:
// //       "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
// //     date: "December 26, 2022",
// //     description:
// //       "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
// //   },
// //   {
// //     id: 4,
// //     imageSrc: news1,
// //     title:
// //       "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
// //     date: "December 26, 2022",
// //     description:
// //       "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
// //   },
// //   {
// //     id: 5,
// //     imageSrc: news1,
// //     title:
// //       "Talukder Group of Industries recently organized an event to celebrate the achievements of our company.",
// //     date: "December 26, 2022",
// //     description:
// //       "The event was held at a prestigious venue and was attended by senior executives, department heads, and representatives.",
// //   },
// // ];



// {
//   /* data-aos='slide-right' */
// }
