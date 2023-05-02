import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import MdMessage from '../components/MdMessage/MdMessage'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const MdMsgPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>

    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Message from MANAGING DIRECTOR" />
    <MdMessage />
    <Footer />
    
    </>
  )
}

export default MdMsgPage