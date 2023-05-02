import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./MdMessage.css"
// import chairmanImg from "../../asset/images/chairman.jpg"
import mdImg from "../../asset/images/management_img/facee.png"

const MdMessage = () => {
  return (
    <>
     <Container>
        <Row style={{marginTop:"5rem"}}>
            <Col sm={12} md={6} lg={6}>
                <div className='chairmanImg'>
                   <img src={mdImg} alt="chairmanImg" />
                </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div >
            <blockquote className="chairmanText">
            "As the Managing Director of Talukder Group of Industries, I am delighted to welcome you to our website. It is with great pleasure that I introduce you to our company, which has become a leading name in the corporate world through its relentless efforts and dedication.

Our journey started in 1973, with a small venture to meet the demand for cast iron products in Jessore and the surrounding areas. Over time, we have grown and diversified our business, and now Talukder Group of Industries is a flagship corporate name that represents excellence, quality, and innovation.

Our Founder Chairman, Mr. Nurul Islam Talukder, had a vision to create a large-scale industrialization in our region, and he established Talukder Foundry Ltd. to achieve this goal. 
At Talukder Group of Industries, we believe in delivering the best quality products and services to our customers. We have a team of highly skilled professionals who are committed to excellence, and we have invested in state-of-the-art technology and infrastructure to ensure that we are always at the forefront of our industry.

We believe in building long-term relationships based on mutual trust and respect, and we are committed to creating value for all our stakeholders.

Thank you for visiting our website, and we look forward to serving you with our quality products and services."
              
                  {" "}
                  <br />
                  <br />
                  <cite className='ChairmanTitle'>
                   - MR MD SAMSUL ARIFIN <br /> Managing Director
                </cite>
              </blockquote>
            </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default MdMessage