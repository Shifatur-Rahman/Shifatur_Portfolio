import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import JEnterprise from "../components/JEnterprise/JEnterprise";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

const JEnterprisePage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="J & J Enterprise Ltd." />
      <JEnterprise />
      <Footer />
    </>
  );
};

export default JEnterprisePage;
