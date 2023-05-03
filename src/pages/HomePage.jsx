import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Summary from "../components/Summary/Summary";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import KnowUs from "../components/KnowUs/KnowUs";
import Slider from "../components/Slider/Slider";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

class HomePage extends Component {
  componentDidMount() {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }

  render() {
    return (
      <>
        <TopNavigation title="Talukder Group" />
        {/* <TopBanner /> */}
        <Slider />
        <KnowUs />
        <Summary />
        <NewsAndEvents />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}

export default HomePage;
