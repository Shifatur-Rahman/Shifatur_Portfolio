import React, { useEffect, useState } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import Slider from "../components/Slider/Slider";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import NewsDetails from "../components/NewsDetails/NewsDetails";
// import Spinner from "../components/Spinner/Spinner";

const HomePage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2600);
  // }, []);

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
