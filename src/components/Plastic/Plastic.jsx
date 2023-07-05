import React from "react";
import "./Plastic.css";
import { Container,Row,Col } from "react-bootstrap";

const Plastic = () => {
  return <>
  
  
  <h1>Plastic</h1>

  <Container>
    
    <Row>
      <Col lg={4} md={6} sm={12}>
      <h1 style={{fontSize:"12px", color:"#fff", backgroundColor:"green"}}></h1>
      <p></p>
      
      </Col>

      <Col lg={4} md={6} sm={12}>

     <p style={{fontSize:"12px", color:"#fff", backgroundColor:"green"}}>
      lorem
     </p>

      
      
      </Col>

    </Row>
  </Container>
  
  </>;
};

export default Plastic;
