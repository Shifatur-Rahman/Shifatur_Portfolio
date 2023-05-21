import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import GovtClient from '../components/GovtClient/GovtClient'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'

const GovtClientPage = () => {
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Our Government Client"  />
    <GovtClient />
    <Footer /> 
    </>
  )
}

export default GovtClientPage