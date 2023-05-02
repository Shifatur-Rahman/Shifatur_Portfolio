import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Furniture from "../components/Furniture/Furniture";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

const FurniturePage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder Furniture Ltd." />
      <Furniture />
      <Footer />
    </>
  );
};

export default FurniturePage;
