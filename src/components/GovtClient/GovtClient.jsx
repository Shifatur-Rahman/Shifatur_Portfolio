import React from 'react'
import { useState, useEffect } from "react";
import { Col, Container, Card } from "react-bootstrap";
import Slider from "react-slick";
// Govt. client
import client18 from '../../asset/images/Client_logo/lged.jpg';
import client19 from '../../asset/images/Client_logo/public_health.png';
import client22 from '../../asset/images/Client_logo/dphe.png';
import client23 from '../../asset/images/Client_logo/Barishal_University_logo.svg.png';
import client25 from '../../asset/images/Client_logo/KUETLogo.png';
import client28 from '../../asset/images/Client_logo/primary.png';
import client29 from '../../asset/images/Client_logo/cda.png';
import client30 from '../../asset/images/Client_logo/EED.png';
import client24 from '../../asset/images/Client_logo/jica.png';
import client31 from '../../asset/images/Client_logo/bmda.png';
import Spinner from "../Spinner/Spinner.jsx";

const GovtClient = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2700);
    }, []);
  
      const settings = {
        // dots: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 900,
        pauseOnHover: false,
        cssEase: "ease-in-out",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };
  return (
    <>
    
    {loading ? (
        <Spinner />
      ) : (

<Container style={{ marginTop: "5rem" }}>
        <Slider {...settings}>
          {govtClientData.map((item, index) => (
            <Col sm={12} md={6} lg={4} key={item.id}>
              <Card data-aos="fade-down"
      style={{height: "160px", width:"140px", display:"flex", justifyContent:"center", alignItems:"center", border: "1px solid #92CCE9", boxShadow:"1px 1px 5px #92CCE9", marginRight:"10px", marginBottom:"10px"}} className="clientReviewImgCard">
                <Card.Img style={{width:"80%", height:"80%", padding:"20px 10px"}} className="newsCardImg" variant="top" src={item.img} />
              </Card>
            </Col>
          ))}
        </Slider>

 </Container>

      )
          }

    </>
  )
}

export default GovtClient



const govtClientData = [
    {
      img: client23
    },
    {
        img: client24
    },
    {
      img: client25
    },
    {
      img: client28
    },
    {
      img: client18
    },
    {
      img: client19
    },
    {
      img: client22
    },
    {
      img: client29
    },
    {
      img: client30
    },
    {
       img: client31
    }
  
  ]