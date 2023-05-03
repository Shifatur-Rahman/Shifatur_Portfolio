import React from 'react'
import NewsDetails from '../components/NewsDetails/NewsDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'

const NewsDetailsPgae = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
   <TopNavigation />
   <PageTop pageTitle="News & Events" />
   <NewsDetails />
   <Footer />
   <BackToTopButton />
    </>
  )
}

export default NewsDetailsPgae