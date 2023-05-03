import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Distribution from "../components/Distribution/Distribution";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const DistriibutionPage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder Distribution Co. Ltd." />
      <Distribution />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default DistriibutionPage;
