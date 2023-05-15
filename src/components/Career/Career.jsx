import React from 'react'
import {useState, useEffect} from 'react'
import "./Career.css"
import { Container, Row, Col } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import AOS from "aos";
import Spinner from '../Spinner/Spinner';

const Career = () => {

  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      duration: 1500, // values from 0 to 3000, with step 50ms
       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
       once: false, // whether animation should happen only once - while scrolling down
       mirror: false, // whether elements should animate out while scrolling past them
       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
       animatedClassName: 'aos-animate', // class applied on animation
       initClassName: 'aos-init', // class applied after initialization
       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    });
  }, []);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);

  
  
  return (
    <>

{loading ? (
        <Spinner />
      ) :
    <Container>

         <Row style={{marginTop:"3rem"}}>
            <Col sm={12} md={6} lg={8}>
            <div className='opportunity'>
            <p data-aos="fade-right"
    //  data-aos-anchor="#example-anchor"
    //  data-aos-offset="500"
    //  data-aos-duration="1000"
      className='careerHeader'>Find Your <strong>Opportunity</strong></p>
            <p className='careerText'> Whatever your career goals may be, Talukder group provides the opportunity to work with advanced technologies, global customers, and the most innovative, talented minds in the industry. Your career path with us can encompass diverse, challenging assignments that span product lines, job types, and businesses.</p>
        
            </div>
            </Col>
          
            <Col sm={12} md={6} lg={4}>
                <div>
                <p data-aos="fade-down"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500" className='experience'>Choose a job you love, and you will never have to work a day in your life. —Confucius
                </p>
                </div>
            </Col>
        </Row>

        <hr />
        <br />

        <Row>
         <Col>
         <p className='careerText'>At Talukder group of industries, we believe in providing our employees with a fulfilling and rewarding career path. We understand that each individual has unique career aspirations, and we strive to provide opportunities that align with those aspirations. With a focus on advanced technologies and global customers, our employees are exposed to some of the most innovative and challenging projects in the industry. </p>
        {/* <br /> */}
        <p className='careerText'>We believe in nurturing and developing talent, and provide our employees with diverse and challenging assignments that span different product lines, job types, and businesses. We encourage our employees to take ownership of their career path and provide them with the resources and support to achieve their career goals. </p>
        
         </Col> 
         </Row>

    </Container>

}
    </>
  )
}

export default Career




        {/* <Row style={{marginTop:"2rem"}}>
            <Col>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='AccordionHeader'>Regional Sales Manager</Accordion.Header>
        <Accordion.Body>
        <div class="job-description">
  <h3>WE ARE HIRING</h3>
  <h4>Position: Sales Manager</h4>
  <p>Location: Anywhere in Bangladesh</p>
  <p>Education: Master’s /MBA (Marketing)</p>
  <p>Age &amp; Experience: Max 35 Years &amp; 12 year’s Experience</p>
  <h4>Brief Responsibilities:</h4>
  <ul>
   
    <li>Plan and execute sales initiatives and measure as guided by management.</li>
    <li>Establish sustainable &amp; professional distribution network.</li>
    <li>Create sales strategies and programs to achieve the sales target of assigned zone.</li>
    <li>Ensure distributor performance considering the investment, sales target achievement, dedicated DSR, stock &amp; delivery service support, coverage, reporting and compliance adhered.</li>
    <li>Visit the assigned market to check &amp; increase outlet coverage, products placement, numeric and weighted distribution maintained.</li>
    <li>Operate credit business and ensure cash &amp; credit sales ratio as per management need etc.</li>
  </ul>
  <h4>Special Skills/ Training/ Personal Attributes:</h4>
  <ul>
    <li>Results-oriented</li>
    <li>Manage Stress</li>
    <li>Relationship Building</li>
    <li>People Management and People-driven</li>
    <li>Can do attitude</li>
    <li>Advance Computer literacy</li>
    <li>Must have salesmanship</li>
  </ul>
  <p>Email your cv to: <a href="mailto:2021hrcareer@gmail.com">2021hrcareer@gmail.com</a></p>
  <p>Note: Only the short listed candidates will be contacted. Mention your desired postion in the subject line.</p>
</div>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>IT Engineer</Accordion.Header>
        <Accordion.Body>
        <div class="job-description">
  <h3>WE ARE HIRING</h3>
  <h4>Position: Software Engineer</h4>
  <p>Location: Anywhere in Bangladesh</p>
  <p>Education: Bachelor in CSE/EEE/CSIT</p>
  <p>Age &amp; Experience: Max 30 Years &amp; 5 year’s Experience</p>
  <h4>Brief Responsibilities:</h4>
  <ul>
   
    <li>Plan and execute sales initiatives and measure as guided by management.</li>
    <li>Establish sustainable &amp; professional distribution network.</li>
    <li>Create sales strategies and programs to achieve the sales target of assigned zone.</li>
    <li>Ensure distributor performance considering the investment, sales target achievement, dedicated DSR, stock &amp; delivery service support, coverage, reporting and compliance adhered.</li>
    <li>Visit the assigned market to check &amp; increase outlet coverage, products placement, numeric and weighted distribution maintained.</li>
    <li>Operate credit business and ensure cash &amp; credit sales ratio as per management need etc.</li>
  </ul>
  <h4>Special Skills/ Training/ Personal Attributes:</h4>
  <ul>
    <li>Website design </li>
    <li>Capable to Coding</li>
    <li>Ui & Ux design</li>
    <li>Database: Ms sql</li>
    <li>Can do attitude</li>
    <li>Advance Computer literacy</li>
    <li>Must have to know MVC framework</li>
  </ul>
  <p>Email your cv to: <a href="mailto:2021hrcareer@gmail.com">2021hrcareer@gmail.com</a></p>
  <p>Note: Only the short listed candidates will be contacted. Mention your desired postion in the subject line.</p>
</div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Graphic Designer</Accordion.Header>
        <Accordion.Body>
        <div class="job-description">
  <h3>WE ARE HIRING</h3>
  <h4>Position: Graphic Designer</h4>
  <p>Location: Dhaka</p>
  <p>Experience: 2 year’s Experience</p>
  <h4>Brief Responsibilities:</h4>
  <ul>
    
    <li>Plan and execute sales initiatives and measure as guided by management.</li>
    <li>Establish sustainable &amp; professional distribution network.</li>
    <li>Create sales strategies and programs to achieve the sales target of assigned zone.</li>
    <li>Ensure distributor performance considering the investment, sales target achievement, dedicated DSR, stock &amp; delivery service support, coverage, reporting and compliance adhered.</li>
    <li>Visit the assigned market to check &amp; increase outlet coverage, products placement, numeric and weighted distribution maintained.</li>
    <li>Operate credit business and ensure cash &amp; credit sales ratio as per management need etc.</li>
  </ul>
  <h4>Special Skills/ Training/ Personal Attributes:</h4>
  <ul>
    <li>Results-oriented</li>
    <li>Manage Stress</li>
    <li>Relationship Building</li>
    <li>People Management and People-driven</li>
    <li>Can do attitude</li>
    <li>Advance Computer literacy</li>
    <li>Must have salesmanship</li>
  </ul>
  <p>Email your cv to: <a href="mailto:2021hrcareer@gmail.com">2021hrcareer@gmail.com</a></p>
  <p>Note: Only the short listed candidates will be contacted. Mention your desired postion in the subject line.</p>
</div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header> Human Resource Executive </Accordion.Header>
        <Accordion.Body>
        <div class="job-description">
  <h3>WE ARE HIRING</h3>
  <h4>Position: Hr Executive</h4>
  <p>Location: Anywhere in Bangladesh</p>
  <p>Education: Master’s /MBA (Marketing)</p>
  <p>Age &amp; Experience: Max 35 Years &amp; 5 year’s Experience</p>
  <h4>Brief Responsibilities:</h4>
  <ul>
   
    <li>Plan and execute sales initiatives and measure as guided by management.</li>
    <li>Establish sustainable &amp; professional distribution network.</li>
    <li>Create sales strategies and programs to achieve the sales target of assigned zone.</li>
    <li>Ensure distributor performance considering the investment, sales target achievement, dedicated DSR, stock &amp; delivery service support, coverage, reporting and compliance adhered.</li>
    <li>Visit the assigned market to check &amp; increase outlet coverage, products placement, numeric and weighted distribution maintained.</li>
    <li>Operate credit business and ensure cash &amp; credit sales ratio as per management need etc.</li>
  </ul>
  <h4>Special Skills/ Training/ Personal Attributes:</h4>
  <ul>
    <li>Results-oriented</li>
    <li>Manage Stress</li>
    <li>Relationship Building</li>
    <li>People Management and People-driven</li>
    <li>Can do attitude</li>
    <li>Advance Computer literacy</li>
    <li>Must have salesmanship</li>
  </ul>
  <p>Email your cv to: <a href="mailto:2021hrcareer@gmail.com">2021hrcareer@gmail.com</a></p>
  <p>Note: Only the short listed candidates will be contacted. Mention your desired postion in the subject line.</p>
</div>
        </Accordion.Body>
      </Accordion.Item>


      
      <Accordion.Item eventKey="4">
        <Accordion.Header>Tender Sales</Accordion.Header>
        <Accordion.Body>
       <p style={{color:"red"}}>No Post Avaiable at now</p>
        </Accordion.Body>
      </Accordion.Item>






    </Accordion>
            
            </Col>
         </Row>
 */}