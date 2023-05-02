import React, { useEffect } from 'react'
import "./NewsAndEvents.css"
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import news1 from "../../asset/images/news/news1.jpg";
import news2 from "../../asset/images/news/news2.jpg";
import news5 from "../../asset/images/news/news5.jpg";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsAndEvents = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      duration: 2000, // values from 0 to 3000, with step 50ms
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      animatedClassName: 'aos-animate', // class applied on animation
      initClassName: 'aos-init', // class applied after initialization
      useClassNames: false // if true, will add content of `data-aos` as classes on scroll
    });
  }, []);
  return (
  <> 
  <Container className='fluid'>
  {/* data-aos='fade-up' */}
     <h1 className='knowusTitle'>News And Events</h1>
     {/* data-aos='slide-right' */}
          <Row>
          
            <Col lg={4} md={6} sm={12}>
              <Card className='newsCard'>
                <Card.Img variant="top" src={news2} />
                <Card.Body>
                  <h2 className="servicesCardTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                <p style={{fontSize:"14px"}}> <BsFillPersonFill style={{fontSize:"20px"}} /> <span className='newsHeader'>Zaman</span> <AiOutlineCalendar style={{fontSize:"20px", marginLeft:"15px"}} />  <span className='newsHeader'>December 26, 2022</span>  </p>
                  <p className='newsPara' style={{textAlign:"justify", fontSize:"14px"}} >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink className='knowMoreBtn' to='/news/newsDetails'>
                  <Button className='knowMoreBtn' variant="outline-success">Read More</Button> 
                 </NavLink>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Card className='newsCard'>
                <Card.Img variant="top" src={news5} />
                <Card.Body>
                  <h2 className="servicesCardTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                <p className='newsHeader' style={{fontSize:"14px"}}> <BsFillPersonFill style={{fontSize:"20px"}} /> <span className='newsHeader'>Zaman</span> <AiOutlineCalendar style={{fontSize:"20px", marginLeft:"15px"}} />  <span className='newsHeader'>December 26, 2022</span>  </p>
                  <p className='newsPara' style={{textAlign:"justify", fontSize:"14px"}} >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink className='knowMoreBtn' to='/news/newsDetails'>
                  <Button className='knowMoreBtn' variant="outline-success">Read More</Button> 
                 </NavLink>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={4} md={6} sm={12}>
              <Card className='newsCard'>
                <Card.Img variant="top" src={news1} />
                <Card.Body>
                  <h2 className="servicesCardTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                <p className='newsHeader' style={{fontSize:"14px"}}> <BsFillPersonFill style={{fontSize:"20px"}} /> <span className='newsHeader'>Zaman</span> <AiOutlineCalendar style={{fontSize:"20px", marginLeft:"15px"}} />  <span className='newsHeader'>December 26, 2022</span>  </p>
                  <p className='newsPara' style={{textAlign:"justify", fontSize:"14px"}} >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink className='knowMoreBtn' to='/news/newsDetails'>
                  <Button className='knowMoreBtn' variant="outline-success">Read More</Button> 
                  </NavLink>

                </Card.Body>
              </Card>
            </Col>
     
          </Row>
        </Container>

    </>


  )
}

export default NewsAndEvents