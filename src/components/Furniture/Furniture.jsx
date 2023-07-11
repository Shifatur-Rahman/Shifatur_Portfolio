import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import furniture1 from "../../asset/images/Concern/Furniture/01.jpg";
import furniture2 from "../../asset/images/Concern/Furniture/02.jpg";
import furniture3 from "../../asset/images/Concern/Furniture/03.jpg";
import furniture4 from "../../asset/images/Concern/Furniture/04.jpg";
import furniture5 from "../../asset/images/Concern/Furniture/05.jpg";
import furniture6 from "../../asset/images/Concern/Furniture/06.jpg";
import furniture7 from "../../asset/images/Concern/Furniture/07.jpg";
import furniture8 from "../../asset/images/Concern/Furniture/08.jpg";
import { Blurhash } from "react-blurhash";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Furniture.css"
import Spinner from "../Spinner/Spinner.jsx";

const Furniture = () => {
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


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);






  return (
    <>

    {
      loading ? (<Spinner />) :(
         
   <Container>
   <Row>
              <Col sm={12}
                md={12}
                lg={12}
                style={{ marginTop: "4rem", textAlign: "justify" }}>
                <p className='plasticText'>
                  Talukder furniture is extremely resilient and requires very little
                  maintenance if the woods are seasoned methodically. Wood is a
                  long-lasting natural material that can withstand constant abuse,
                  whether it's spills in the kitchen or scratches in the dining room.
                  Solid wood furniture can last for generations imparting an antique
                  value. Owing to their below enlisted attributes office furniture made from
                  wood and particle board, these products are highly appreciated
                  and accepted by our corporate clients and very coveted in the
                  markets of entire Bangladesh:

                  <br /> <br />

                  <ul>
                    <li>
                      <a>Dimensional accuracy</a>
                    </li>
                    <li>
                      <a> Rigid construction</a>
                    </li>
                    <li>
                      <a>  Corrosion resistance </a>
                    </li>
                    <li>
                      <a> Easy to use, Chemical resistance </a>
                    </li>
                    <li>
                      <a> Lower weight to space ratio
                      </a>
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
   
    
    </>
  )
}

export default Furniture


const itemData = [
    {
      img: furniture1,
    },
    {
      img: furniture2,
    },
    {
      img: furniture3,
    },
    {
      img: furniture4,
    },
    {
      img: furniture5,
    },
    {
      img: furniture6,
    },
    {
      img: furniture7,
    },
    {
      img: furniture8,
    },
  ];
  