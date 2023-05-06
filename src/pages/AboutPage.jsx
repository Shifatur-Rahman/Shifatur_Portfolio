import React, { Component } from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import { animateScroll } from "react-scroll";
// import { motion } from "framer-motion";

class AboutPage extends Component {
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
        <TopNavigation title="Talukder Group" />
        <PageTop pageTitle="About Us" />
        <AboutDescription />
        <Footer />
        <BackToTopButton />
      </>
      // </motion.div>
    );
  }
}

export default AboutPage;
