import React, { Component } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
// import { motion } from "framer-motion";
import { animateScroll } from "react-scroll";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

class ServicePage extends Component {
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
        <PageTop pageTitle=" Product & Services" />
        <Services />
        <ContactSection />
        <Footer />
        <BackToTopButton />
        </>
      // </motion.div>
    );
  }
}

export default ServicePage;
