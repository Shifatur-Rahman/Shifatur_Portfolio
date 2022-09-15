import React, { Component } from "react";
import AllProject from "../components/AllProject/AllProject";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { motion } from "framer-motion";

class PortfolioPage extends Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <TopNavigation title="Portfolio" />
        <PageTop pageTitle="My Portfolio" />
        <AllProject />
        <Footer />
      </motion.div>
    );
  }
}

export default PortfolioPage;
