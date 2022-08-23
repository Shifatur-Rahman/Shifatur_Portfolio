import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutDescription.css";

class AboutDescription extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="AboutMeMargin">
            <Col sm={12} md={12} lg={12}>
              <h1 className="AboutPageTitle">Who i am</h1>
              <p className="AboutPageDescription">
                Here's one way to write a first-person bio: “I’m a freelance
                writer specializing in small business content. I’ve worked with
                companies in a variety of industries, from home care services to
                fine leather goods.” By speaking in the first person here, you
                take a more personable approach to connecting with a client or
                brand.
              </p>
              <hr className="AboutMeHr" />

              <h1 className="AboutPageTitle">My Mission</h1>
              <p className="AboutPageDescription">
                Here's one way to write a first-person bio: “I’m a freelance
                writer specializing in small business content. I’ve worked with
                companies in a variety of industries, from home care services to
                fine leather goods.” By speaking in the first person here, you
                take a more personable approach to connecting with a client or
                brand. For instance, when you write a third-person bio you may
                start with “Jasmine Montgomery is a Senior Hiring Manager at
                L’Oreal based in New York. She recruits across several business
                units to connect with the brightest talent from around the
                globe.” By only using your name and pronouns to speak about
                yourself here, you are letting your title and skill set speak
                for themselves. So your decision to write your professional bio
                in the first or third person depends on whether you’d like to
                leave a more personable or assertive impression. Overall, both
                approaches can be effective when you tailor them to your goals
                and the audience you are writing for. The most important thing
                is to be clear, concise, and tell your story in a way that
                connects with your reader.
              </p>
              <hr className="AboutMeHr" />

              <h1 className="AboutPageTitle">My Vision</h1>
              <p className="AboutPageDescription">
                Here's one way to write a first-person bio: “I’m a freelance
                writer specializing in small business content. I’ve worked with
                companies in a variety of industries, from home care services to
                fine leather goods.” By speaking in the first person here, you
                take a more personable approach to connecting with a client or
                brand.While first-person bios are quite common, third-person
                bios can prove more effective in informal situations. If you’re
                job searching, applying for grants, or trying to get published,
                it’s generally best to stick to the third person.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutDescription;
