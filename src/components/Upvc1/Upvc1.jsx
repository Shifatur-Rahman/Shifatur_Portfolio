import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import "./Upvc1.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Upvc1 = () => {
  return (
    <>
   <Container>
    <Row>
      <Col sm={12} md={12} lg={12} style={{ marginTop: "4rem", textAlign: "justify" }}>
      <p>
      UPVC pipes and fittings are an excellent choice for plumbing 
requiring high tensile and impact strength. They are made of 
durable unplasticized plastic material that does not corrode or 
crack easily under adverse environment and lasts for a long time, even with zero maintenance, compared to that of metal 
alternatives. Here are some more details on the benefits and features of UPVC pipes:
<br /> <br />
<ul>
  <li><a> <b>High Tensile and Impact Strength: </b> UPVC pipes have impressive tensile and impact strength, making them suitable for both above-ground and underground plumbing systems. They can withstand high pressure and resist damage from external impacts, ensuring reliable performance over an extended period. </a></li>
  <li><a> <b>Corrosion Resistance:</b> Unlike metal pipes, UPVC pipes are immune to corrosion, rust, and chemical reactions. They are not affected by aggressive substances commonly found in soil, water, or chemicals present in various plumbing applications. This resistance to corrosion ensures the longevity and durability of UPVC pipes, reducing the need for frequent replacements. </a></li>
  <li><a>  <b>Leak-Free Joints:</b> UPVC pipes come with various jointing techniques that provide secure and leak-free connections. Solvent cement joints are commonly used, which create a strong bond between pipe and fittings, ensuring a reliable and durable plumbing system. </a></li>
</ul>

      </p>
      </Col>

      <Col sm={12} md={12} lg={12} style={{ marginTop: "4rem", textAlign: "justify" }}>

      <ImageList cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
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
    </>
  )
}

export default Upvc1

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];