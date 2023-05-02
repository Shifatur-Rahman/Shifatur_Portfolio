import React from 'react'
import Footer from '../components/Footer/Footer'
import ImgGallery from '../components/ImgGallery/ImgGallery'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
        <TopNavigation title="Talukder Group"/>
        <PageTop pageTitle="Gallery" />
        <ImgGallery />
        <Footer />
    </>
  )
}

export default Gallery