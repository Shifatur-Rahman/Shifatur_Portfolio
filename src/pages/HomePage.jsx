import React, { useEffect, useState } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import Slider from "../components/Slider/Slider";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import PageLoader from "../components/PageLoader/PageLoader";

const HomePage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <>

      
      <TopNavigation title="Talukder Group" />
      <Slider />
      <NewsDetails />
      <Footer />
      <BackToTopButton /> 

    </>
  );
};

export default HomePage;
