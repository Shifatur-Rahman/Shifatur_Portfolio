import React, { Component } from "react";
// import AllProject from "../components/AllProject/AllProject";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
// import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio/Portfolio";
import { animateScroll } from "react-scroll";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

class PortfolioPage extends Component {
  componentDidMount() {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }
  
  render() {
    return (
      // <motion.div
      //   initial={{ width: 0 }}
      //   animate={{ width: "100%" }}
      //   exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
      // >
        <>
        <TopNavigation title="Talukder Group of Industries" />
        <PageTop pageTitle="Our Portfolio" />
        {/* <AllProject /> */}
        <Portfolio />
        <Footer />
        <BackToTopButton />
        </>
      // </motion.div>
    );
  }
}

export default PortfolioPage;
