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

class HomePage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Shifatur Rahman" />
        <TopBanner />
        <Services />
        <Charts />
        <Summary />
        <Projects />
        <VideoSection />
        {/* <ClientReview /> */}
        <Footer />
      </>
    );
  }
}

export default HomePage;
