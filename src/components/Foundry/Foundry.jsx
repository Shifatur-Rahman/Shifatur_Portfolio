import React from "react";
import { useState, useEffect } from "react";
import "./Foundry.css";
import { Container, Row, Col } from "react-bootstrap";
import foundry1 from "../../asset/images/Concern/Foundry/01.jpg";
import foundry2 from "../../asset/images/Concern/Foundry/02.jpg";
import foundry3 from "../../asset/images/Concern/Foundry/03.jpg";
import foundry4 from "../../asset/images/Concern/Foundry/04.jpg";
import foundry5 from "../../asset/images/Concern/Foundry/05.jpg";
import foundry6 from "../../asset/images/Concern/Foundry/06.jpg";
import foundry7 from "../../asset/images/Concern/Foundry/07.jpg";
import foundry8 from "../../asset/images/Concern/Foundry/08.jpg";
import { Blurhash } from "react-blurhash";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Spinner from "../Spinner/Spinner.jsx";

const Foundry = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  const [imgLoad, setImgLoad] = useState(false);
  
  useEffect(() => {
    const imgPromises = itemData.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = item.img;
      });
    });

    Promise.all(imgPromises)
      .then(() => setImgLoad(true))
      .catch(() => setImgLoad(true));
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
            <p className='plasticText'>
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

              <Col style={{ marginTop: "3rem" }}>
                <div data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <ImageList className="ImageGallery"
                    sx={{ width: "100%", height: "auto", overflow: "hidden" }}
                    variant="woven"
                    cols={4}>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        {imgLoad ? (
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        ) : (
                          <div style={{ width: "100%", height: "100%" }}>
                            <Blurhash
                              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                              resolutionX={32}
                              resolutionY={32}
                              punch={1}
                            />
                          </div>
                        )}
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </Col>

    </Row>
   </Container>

)
}
  
  </>;

};

export default Foundry;


const itemData = [
  {
    img: foundry1,
  },
  {
    img: foundry2,
  },
  {
    img: foundry3,
  },
  {
    img: foundry4,
  },
  {
    img: foundry5,
  },
  {
    img: foundry6,
  },
  {
    img: foundry7,
  },
  {
    img: foundry8,
  },
];

