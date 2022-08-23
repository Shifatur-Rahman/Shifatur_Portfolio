import React, { Component } from "react";
import AllProject from "../components/AllProject/AllProject";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class PortfolioPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Portfolio" />
        <PageTop pageTitle="My Portfolio" />
        <AllProject />
        <Footer />
      </>
    );
  }
}

export default PortfolioPage;
