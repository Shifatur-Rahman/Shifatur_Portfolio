import React from 'react'
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const CorporateClient = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
       <TopNavigation title="Talukder Group" />
        <PageTop pageTitle="Corporate Client" />
        <Footer />
    </>
  )
}

export default CorporateClient