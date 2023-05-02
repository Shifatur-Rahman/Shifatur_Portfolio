import React from 'react'
import Footer from '../components/Footer/Footer'
import ManagementTeam from '../components/ManagementTeam/ManagementTeam'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const DirectorTeamPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Board of Directors" />
    <ManagementTeam />
    <Footer />
    </>
  )
}

export default DirectorTeamPage