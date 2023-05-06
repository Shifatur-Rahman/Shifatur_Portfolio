import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Slider.css";
import slider1 from "../../asset/images/Slider_Img/slider1.jpg";
import slider2 from "../../asset/images/Slider_Img/slider2.jpg";
import slider3 from "../../asset/images/Slider_Img/slider3.jpg";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
// import { Link } from "react-scroll";
// import { scroller } from "react-scroll";
import KnowUs from "../../components/KnowUs/KnowUs";
import Summary from "../../components/Summary/Summary";

const Slider = () => {
  const Summaryref = useRef(null);
  const LearnMoreref = useRef(null);

  const images = [
    {
      src: slider1,
      alt: "Talukder Plastic Factory",
      para: "Our Brand is Yours",
    },
    {
      src: slider2,
      alt: "Talukder Products Best In Quality",
      para: "For Quality Life",
    },
    {
      src: slider3,
      alt: "House Hold Products",
      para: "Better Design & Right Choice For Kitchen",
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
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  let handleClick = () => {
    if (Summaryref.current) {
      Summaryref.current.scrollIntoView({ behavior: "smooth"});
    }
  };

  let handleKnowClick = () => {
    if (LearnMoreref.current) {
        LearnMoreref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={1000}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <CSSTransition
              in={activeIndex === index}
              timeout={1000}
              classNames="fade"
            >
              <img className="sliderImg d-block w-100" src={image.src} alt={image.alt} />
            </CSSTransition>

            <div className="carousel-overlay">
              <Carousel.Caption>
                <h3 className="topBannerTitle">{image.alt}</h3>
                <p className="topBannerSubTitle">{image.para}</p>
                <div class="button-container">
                  <Button
                    onClick={handleClick}
                    className="serviceBtn btn-block btn-lg mt-3"
                    style={{ marginRight: "20px" }}
                    variant="info"
                  >
                    Our Services
                  </Button>

                  <Button
                    onClick={handleKnowClick}
                    className="learnBtn btn-block btn-lg mt-3"
                    variant="outline-light"
                  >
                    Learn More
                  </Button>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <KnowUs ref={LearnMoreref} />
      <Summary ref={Summaryref} />
    </>
  );
};

export default Slider;
