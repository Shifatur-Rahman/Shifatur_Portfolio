import React, { Component } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class ServicePage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Service" />
        <PageTop pageTitle="My Services" />
        <Services />
        <ContactSection />
        <Footer />
      </>
    );
  }
}

export default ServicePage;
