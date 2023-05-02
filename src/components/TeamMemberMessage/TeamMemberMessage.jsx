import React from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "./TeamMemberMessage.css"

const TeamMemberMessage = () => {
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title');
    const subTitle = new URLSearchParams(location.search).get('subTitle');
  return (
    <>
<Container>
      <h2 className='DetailsPageName'>Message From {title}</h2>
      <p className='DetailsPageSubName'>~{subTitle}</p>
      <p style={{textAlign:"justify", color:"#808080"}}> At Talukder Group of Industries, we believe in delivering the best quality products and services to our customers. We have a team of highly skilled professionals who are committed to excellence, and we have invested in state-of-the-art technology and infrastructure to ensure that we are always at the forefront of our industry. We believe in building long-term relationships based on mutual trust and respect, and we are committed to creating value for all our stakeholders. <br />
      <br />
      <hr />
      <br />
      Talukder group of industries has started its journey since 1973 with cast iron(CI) product. It was very little venture to meet jessore & surrounding area demand. Founder chairman Mr. Nurul Islam Talukder established Talukder foundry Ltd (TFL) with a large scale industrialization vision. 
       <br />
       <br />
       Its not take more time to become true of his vision when his elder son Mr. shamsul Arefin join as managing director of Talukder group of industries. His dedicated drive & confidence with right direction since 2001 to established Talukder as a brand name is success now, its a flagship corporate name of corporate world with great achievement .
       </p>
      </Container>
    </>
  )
}

export default TeamMemberMessage