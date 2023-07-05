import React from "react";
import "./Plastic.css";
import { Container,Row,Col } from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Plastic = () => {
  return <>

  <Container>

    <Row>

      <Col sm={12} md={12} lg={12} style={{marginTop:"4rem", textAlign:"justify"  }}>
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


      <Col sm={12} md={12} lg={12}>
      
      <ImageList  cols={3}>
      {itemData.map((item) => (
        <ImageListItem sx={{ height: '200px' }} key={item.img}>
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
  
  </>;
};

export default Plastic;

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
  }
];
