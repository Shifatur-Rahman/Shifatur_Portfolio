import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import TeamManagement from '../components/TeamManagement/TeamManagement'
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const ManagementTeamPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Management Team" />
     <TeamManagement />
    <Footer />
    </>
  )
}

export default ManagementTeamPage