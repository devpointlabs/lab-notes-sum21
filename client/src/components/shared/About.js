import React from "react";
import {
  Box,
  Container
} from "../styledComponents/AboutStyle";
import { Row, Img, Button, Card } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <h1 style={{
        color: "green",
        textAlign: "center",
        marginTop: "-50px"
      }}>
        About Us
      </h1>
      <Container>
        <Row>
          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default About;