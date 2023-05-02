import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Distribution from "../components/Distribution/Distribution";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

const DistriibutionPage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder Distribution Co. Ltd." />
      <Distribution />
      <Footer />
    </>
  );
};

export default DistriibutionPage;
