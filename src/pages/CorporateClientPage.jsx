import React from 'react'
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import CorporateClient from '../components/CorporateClient/CorporateClient';
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import ClientReview from '../components/ClientReview/ClientReview';




const CorporateClientPage = () => {
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
       {/* <CorporateClient /> */}
       <ClientReview />
       <Footer />
       <BackToTopButton />
    
    </>
  )
}

export default CorporateClientPage