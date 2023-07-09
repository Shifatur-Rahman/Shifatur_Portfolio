import React from "react";
import { useState, useEffect } from "react";
import "./Foundry.css";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "../Spinner/Spinner.jsx";

const Foundry = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  return <>
  
{
  loading ? ( <Spinner />) :
  (
   <Container>
    <Row>
    <Col
            sm={12}
            md={12}
            lg={12}
            style={{ marginTop: "4rem", textAlign: "justify" }}
          >
            <p className='concernBodyText'>
            Talukder Foundry Ltd. is a prominent concern within the Talukder Group of Industries. Established in July 1973 by Mr. Nurul Islam Talukder, the foundry specializes in the manufacturing and production of various metal castings. With a strong vision of large-scale industrialization, Talukder Foundry has grown to become a leading player in the foundry industry.
            
            <br /> 
            <br /> 
            The foundry's operations involve the casting of metal components using advanced techniques and technologies. They utilize high-quality materials and employ skilled craftsmen to ensure the production of durable and reliable castings. Talukder Foundry is known for its expertise in providing castings for diverse applications, catering to the needs of different industries.
            The benefits of Talukder Foundry are given below:
              <br /> <br />
              <ul>
                <li>
                  <a>Talukder Distribution caters to a wide range of industries, including consumer goods, industrial products, construction materials, and more. They work closely with manufacturers, suppliers, and retailers to ensure the smooth flow of goods from production to end-consumers. </a>
                </li>
                <li>
                  <a> With the support of the Talukder Group's extensive resources and experience, Talukder Distribution has grown into a trusted name in the distribution sector. They continue to expand their operations and adapt to evolving market demands to meet the needs of their customers effectively.</a>
                </li>
                
              </ul>
            </p>
          </Col>

    </Row>
   </Container>

)
}
  
  </>;

};

export default Foundry;
