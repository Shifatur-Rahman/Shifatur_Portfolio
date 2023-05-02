import React from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const ClientPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Our Clients" />
      <Footer />
    </>
  );
};

export default ClientPage;
