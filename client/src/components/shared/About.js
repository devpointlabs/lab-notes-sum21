import React from "react";
import { Container } from "../styledComponents/AboutStyle";
import { Row, Card } from 'react-bootstrap';

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
            <Card.Img variant="top" src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1626827952/IMG_5084.jpg.jpg" />
            <Card.Body>
              <Card.Title>Cameron Lund</Card.Title>
              <Card.Text>
              My name’s Cameron Lund, and I’m an aspiring Software Developer and Entrepreneur. I fell in love with coding after my first mobile app development class where I learned C#. From there I knew I wanted to code and be able to create anything my mind could think of. I hope my coding journey will take me far in life.
            </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          
          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1627444115/Fernandes_qe2vxe.jpg" />
            <Card.Body>
              <Card.Title>Leticia Fernandes</Card.Title>
              <Card.Text>
              I am Leticia Fernandes, 19 years old, and I have just begun my adventure into the tech world. As I started college, I fell in love with my Python class and decided that was what I wanted to do: programming. I searched for bootcamps so that I could learn more about web design and development. I found DevPoint Labs where I was able to meet great people, learn so much, and work on big projects with some peers. I hope to keep learning and growing in this area as I continue to pursue my bachelor’s degree in Web Design and Development at Brigham Young University- Idaho.
            </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1627444268/Filtered_img1605_uo32bm.png" />
            <Card.Body>
              <Card.Title>Steph Mahnke</Card.Title>
              <Card.Text>
                I teach digital and cultural rhetoric at Utah Valley University. I began my journey in web development and content editing at Michigan State University, where I was a lab researcher for the Writing Education Digital Experience (WIDE) lab. Alongside researching and teaching, I work with communities and non-profits to create digital cultural heritage sites.
            </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1627444975/Payton_rqep34.jpg" />
            <Card.Body>
              <Card.Title>Anthony Payton</Card.Title>
              <Card.Text>
              I’m a 20 year old student, that loves gaming, motorcycles, learning, math, and yes of course Programming. I love hard challenges and outdoors. I have 4 siblings and I’m the middle child, but the tallest too. Nonetheless, if you finished reading till this part, you must be a fast reader.
            </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1627444188/Secrest_b4unoh.jpg" />
            <Card.Body>
              <Card.Title>Katie Secrest</Card.Title>
              <Card.Text>
              I am a member of the Pennsylvania and Utah bar associations. I am interested in becoming a software developer to extend legal solutions to a broader audience, especially to individuals and businesses that are too small to have general counsel. I love conflict resolution and figuring out ingenuitive solutions to persistent problems. I enjoy cooking and the sharing a WFPB diet, camping and hiking with my family, and writing short stories with my kids.
            </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default About;