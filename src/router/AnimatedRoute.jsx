import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import Gallery from "../pages/Gallery";
import AchievementPage from "../pages/AchievementPage";
import AdvertisementPage from "../pages/AdvertisementPage";
import CareerPage from "../pages/CareerPage";
import DirectorTeamPage from "../pages/DirectorTeamPage";
import ManagementTeamPage from "../pages/ManagementTeamPage";
import ChairmanMsgPage from "../pages/ChairmanMsgPage";
import MdMsgPage from "../pages/MdMsgPage";
import TeamMemberMessagePage from "../pages/TeamMemberMessagePage";
import CorporateClientPage from "../pages/CorporateClientPage";
import ConcernPage from "../pages/ConcernPage";
import GovtClientPage from "../pages/GovtClientPage";

function AnimatedRoute() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/concern" element={<ConcernPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/portfolio/gallery" element={<Gallery />} />
          <Route path="/portfolio/achievement" element={<AchievementPage />} />
          <Route
            path="/product&services/advertisement"
            element={<AdvertisementPage />}
          />
          <Route
            path="/client/corporateClient"
            element={<CorporateClientPage />}
          />
          <Route path="/client/govtClient" element={<GovtClientPage />} />

          <Route path="/about/director" element={<DirectorTeamPage />} />
          <Route
            path="/about/managementTeam"
            element={<ManagementTeamPage />}
          />
          <Route path="/about/chairman-message" element={<ChairmanMsgPage />} />
          <Route path="/about/md-message" element={<MdMsgPage />} />
          <Route
            path="/about/Message/Details"
            element={<TeamMemberMessagePage />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoute;