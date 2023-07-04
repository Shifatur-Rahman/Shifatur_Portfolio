import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import JEnterprise from '../components/JEnterprise/JEnterprise'

const JEnterprisePage = () => {
  return (
    <>

    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="J & J Enterprise" />
    <JEnterprise />
    <Footer />
    
    </>
  )
}

export default JEnterprisePage