import React from 'react'
import "./BoardOfDirector.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import awards2Img from "../../asset/images/achievements/awards2.png";

const BoardOfDirector = () => {
  return (
    <>
    <h1>Board of director</h1>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={awards2Img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={awards2Img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img style={{padding: "40px"}} variant="top" src={awards2Img} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </>
  )
}

export default BoardOfDirector