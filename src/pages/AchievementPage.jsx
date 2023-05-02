import React from 'react'
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Achievement from '../components/Achievement/Achievement';
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const AchievementPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
        <TopNavigation title="Talukder Group" />
        <PageTop pageTitle="Our Achievement" />
        <Achievement />
        <Footer />
    </>
  )
}

export default AchievementPage