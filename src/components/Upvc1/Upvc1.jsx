import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import "./Upvc1.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import upvc1 from "../../asset/images/Concern/Upvc/01.jpg";
import upvc2 from "../../asset/images/Concern/Upvc/02.jpg";
import upvc3 from "../../asset/images/Concern/Upvc/03.jpg";
import upvc4 from "../../asset/images/Concern/Upvc/04.jpg";
import upvc5 from "../../asset/images/Concern/Upvc/05.jpg";
import upvc6 from "../../asset/images/Concern/Upvc/06.jpg";
import upvc7 from "../../asset/images/Concern/Upvc/07.jpg";
import upvc8 from "../../asset/images/Concern/Upvc/08.jpg";
import { Blurhash } from "react-blurhash";
import Spinner from "../Spinner/Spinner.jsx";

const Upvc1 = () => {
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
 
  return (
    <>
      {
        loading ? (<Spinner />) : (
          <Container>
            <Row>

              <Col sm={12} md={12} lg={12} style={{ marginTop: "4rem", textAlign: "justify" }}>
                <p className='plasticText'>
                  UPVC pipes and fittings are an excellent choice for plumbing
                  requiring high tensile and impact strength. They are made of
                  durable unplasticized plastic material that does not corrode or
                  crack easily under adverse environment and lasts for a long time, even with zero maintenance, compared to that of metal
                  alternatives. Here are some more details on the benefits and features of UPVC pipes:
                  <br /> <br />
                  <ul>
                    <li><a> <b>High Tensile and Impact Strength: </b> UPVC pipes have impressive tensile and impact strength, making them suitable for both above-ground and underground plumbing systems. They can withstand high pressure and resist damage from external impacts, ensuring reliable performance over an extended period. </a></li>
                    <li><a> <b>Corrosion Resistance:</b> Unlike metal pipes, UPVC pipes are immune to corrosion, rust and chemical reactions. They are not affected by aggressive substances commonly found in soil, water, or chemicals present in various plumbing applications. This resistance to corrosion ensures the longevity and durability of UPVC pipes, reducing the need for frequent replacements. </a></li>
                    <li><a>  <b>Leak-Free Joints:</b> UPVC pipes come with various jointing techniques that provide secure and leak-free connections. Solvent cement joints are commonly used, which create a strong bond between pipe and fittings, ensuring a reliable and durable plumbing system. </a></li>
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
    </>
  )
}

export default Upvc1

const itemData = [
  {
    img: upvc4,
  },
  {
    img: upvc3,
  },
  {
    img: upvc2,
  },
  {
    img: upvc5,
  },
  {
    img: upvc6,
  },
  {
    img: upvc1,
  },
  {
    img: upvc8,
  },
  {
    img: upvc7,
  },
];
