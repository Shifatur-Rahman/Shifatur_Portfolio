import React, { Component } from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class AboutPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="About" />
        <PageTop pageTitle="About Me" />
        <AboutDescription />
        <Footer />
      </>
    );
  }
}

export default AboutPage;
