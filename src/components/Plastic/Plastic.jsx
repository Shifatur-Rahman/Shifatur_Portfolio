import React from "react";
import "./Plastic.css";
import { Container,Row,Col } from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import plastic1 from "../../asset/images/Concern/Plastics/01.jpg"
import plastic2 from "../../asset/images/Concern/Plastics/02.jpg"
import plastic3 from "../../asset/images/Concern/Plastics/03.jpg"
import plastic4 from "../../asset/images/Concern/Plastics/04.jpg"
import plastic5 from "../../asset/images/Concern/Plastics/05.jpg"
import plastic6 from "../../asset/images/Concern/Plastics/06.jpg"
import plastic7 from "../../asset/images/Concern/Plastics/07.jpg"
import plastic8 from "../../asset/images/Concern/Plastics/08.jpg"

const Plastic = () => {
  return <>

  <Container>

    <Row>

        <Col sm={12} md={12} lg={12} style={{ marginTop: "4rem", textAlign: "justify" }}>
          <p>Now a days essence and use of plastic products knows no bound,
            Plastic furniture becomes the first choice of mass people against
            their requirement, whether it is for our home patio, workplace or
            even places such as restaurant and garden. Now, if you are
            thinking that furniture made from plastic have cheap material
            having lower mechanical & physical strength, then you are not
            aware of all kinds of benefits associated with high quality plastic
            furniture, which is not only long-lasting but elegant in looks.
            The benefits of plastic furniture are given below:
            <br /> <br />
            <ul>
              <li><a>Virtually maintenance free</a></li>
              <li><a> Eco-friendly</a></li>
              <li><a> Affordable yet stylish </a></li>
              <li><a> Mobility </a></li>
              <li><a> Long-lasting </a></li>
              <li><a> Waterproof and safe under open sky </a></li>
            </ul>
          </p>
        </Col>

        <Col style={{marginTop:"3rem"}} sm={12} md={12} lg={12}>
          <ImageList cols={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img style={{height:"350px"}}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Col>

    </Row>
  </Container>
  
  </>;
};

export default Plastic;

const itemData = [
  {
    img: plastic1,
  },
  {
    img: plastic2,
  },
  {
    img: plastic3,
  },
  {
    img: plastic4,
  },
  {
    img: plastic5,
  },
  {
    img: plastic6,
  },
  {
    img: plastic7,
  },
  {
    img: plastic8,
  },
];
