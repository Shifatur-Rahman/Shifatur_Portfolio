import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Charts from "../components/Charts/Charts";
import Summary from "../components/Summary/Summary";
import Projects from "../components/Projects/Projects";
import VideoSection from "../components/VideoSection/VideoSection";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

class HomePage extends Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <TopNavigation title="Shifatur Rahman" />
        <TopBanner />
        <Services />
        <Charts />
        <Summary />
        <Projects />
        <VideoSection />
        <ClientReview />
        <Footer />
      </motion.div>
    );
  }
}

export default HomePage;
