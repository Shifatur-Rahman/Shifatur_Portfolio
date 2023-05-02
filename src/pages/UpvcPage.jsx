import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Upvc from "../components/Upvc/Upvc";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

const UpvcPage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder uPVC Fittings Ind. Ltd." />
      <Upvc />
      <Footer />
    </>
  );
};

export default UpvcPage;
