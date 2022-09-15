import React, { Component } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { motion } from "framer-motion";

class ContactPage extends Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <TopNavigation title="Contact" />
        <PageTop pageTitle="Contact Me" />
        <ContactSection />
        <Footer />
      </motion.div>
    );
  }
}

export default ContactPage;
