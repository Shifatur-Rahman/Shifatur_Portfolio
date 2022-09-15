import React, { Component } from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { motion } from "framer-motion";

class AboutPage extends Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <TopNavigation title="About" />
        <PageTop pageTitle="About Me" />
        <AboutDescription />
        <Footer />
      </motion.div>
    );
  }
}

export default AboutPage;
