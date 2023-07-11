import React, {useState, useEffect} from 'react'
import "./Distribution.css"
import { Container, Row, Col } from 'react-bootstrap'
import Spinner from "../Spinner/Spinner.jsx";

const Distribution = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return (
    <>
    {
loading ? (<Spinner />) : (
  <Container>
    <Row>
              <Col
                sm={12}
                md={12}
                lg={12}
                style={{ marginTop: "4rem", textAlign: "justify" }}
              >
                <p className='plasticText'>
                  Talukder Distribution Co. Ltd. is a significant concern within the Talukder Group of Industries. As part of the group, Talukder Distribution plays a vital role in the distribution and supply chain management of various products and goods.
                  With a strong network and infrastructure, Talukder Distribution ensures the efficient and timely delivery of products to customers across different regions. They have developed expertise in managing logistics, inventory management, and transportation to ensure seamless distribution operations.
                  The benefits of plastic furniture are given below:
                  <br /> <br />
                  <ul>
                    <li>
                      <a>As part of the esteemed Talukder Group of Industries, Talukder Foundry contributes to the group's overall success and achievements. Through their dedication to serving stakeholders and partners, they have established themselves as a trusted and reliable partner in the manufacturing sector.</a>
                    </li>
                    <li>
                      <a> Over the years, Talukder Foundry has gained recognition for its commitment to quality, precision, and innovation. Their castings have found applications in sectors such as automotive, machinery, construction, and more. With a strong focus on meeting customer requirements and delivering superior products, Talukder Foundry has built a reputation for excellence in the foundry industry.</a>
                    </li>

                  </ul>
                </p>
              </Col>
    </Row>
  </Container>
)
    }
  
    </>
  )
}

export default Distribution