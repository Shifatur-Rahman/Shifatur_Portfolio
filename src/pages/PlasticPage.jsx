import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Plastic from "../components/Plastic/Plastic";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const PlasticPage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder Plastic Co. Ltd" />
      <Plastic />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default PlasticPage;
