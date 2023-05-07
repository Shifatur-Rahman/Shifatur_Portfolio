import React, { useEffect } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import Slider from "../components/Slider/Slider";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NewsDetails from "../components/NewsDetails/NewsDetails";

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
      <NewsAndEvents />
      <Footer />
      <NewsDetails />
      <BackToTopButton />

    </>
  );
};

export default HomePage;
