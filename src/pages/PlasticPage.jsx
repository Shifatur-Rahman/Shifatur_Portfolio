import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import Plastic from '../components/Plastic/Plastic'

const PlasticPage = () => {
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Talukder Plastics" />
    <Plastic />
    <Footer />
    <BackToTopButton />
    </>
  )
}

export default PlasticPage