import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider2 = () => {
   
  return (
    <>
       <div id="carouselVideoExample" className="carousel slide carousel-fade" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#carouselVideoExample" data-slide-to="0" className="active" />
        <li data-target="#carouselVideoExample" data-slide-to="1" />
        <li data-target="#carouselVideoExample" data-slide-to="2" />
      </ol>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Single Item */}
        <div className="carousel-item active">
          <video className="img-fluid" autoPlay loop muted>
            <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>

        {/* Single Item */}
        <div className="carousel-item">
          <video className="img-fluid" autoPlay loop muted>
            <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Single Item */}
        <div className="carousel-item">
          <video className="img-fluid" autoPlay loop muted>
            <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      {/* Carousel Inner */}

      {/* Controls */}
      <a className="carousel-control-prev" href="#carouselVideoExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselVideoExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    
    </>
  )
}

export default Slider2