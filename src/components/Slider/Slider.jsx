import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Slider.css";
import slider1 from "../../asset/images/Slider_Img/slider1.jpg";
import slider2 from "../../asset/images/Slider_Img/slider2.jpg";
import slider3 from "../../asset/images/Slider_Img/slider3.jpg";
import Button from "react-bootstrap/Button";

const Slider = () => {
  const images = [
    {
      src: slider1,
      alt: "House Hold Products",
      para: "Better Design & Right Choice For Kitchen",
    },
    {
      src: slider2,
      alt: "Talukder Plastic Factory",
      para: "OUR BRAND IS YOURS",
    },
    {
      src: slider3,
      alt: "Talukder Products Best In Quality",
      para: "FOR QUALITY LIFE",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Change the image after every 2 seconds
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={2000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <CSSTransition
            in={activeIndex === index}
            timeout={100}
            classNames="fade"
          >
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </CSSTransition>
          <div className="carousel-overlay">
            <Carousel.Caption>
              <h3 className="topBannerTitle">{image.alt}</h3>
              <p className="topBannerSubTitle">{image.para}</p>
              <div class="button-container">
                <Button style={{ marginRight: "20px" }} variant="outline-info">
                  Our Services
                </Button>
                <Button variant="outline-light">Learn More</Button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
