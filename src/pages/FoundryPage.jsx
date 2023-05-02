import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Foundry from "../components/Foundry/Foundry";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

const FoundryPage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Talukder Foundry Ltd." />
      <Foundry />
      <Footer />
    </>
  );
};

export default FoundryPage;
