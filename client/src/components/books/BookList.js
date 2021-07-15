<<<<<<< HEAD
import { useEffect, useContext } from "react";
import { BookContext } from "../../providers/BookProvider";
import { Link } from "react-router-dom";
import { Card, Button, CardGroup } from "react-bootstrap";
import { ColorStyles, ColorBoxes } from "../styledComponents/sharedStyles";

const BookList = ({}) => {
  const bookContext = useContext(BookContext);

  useEffect(() => {
    bookContext?.getAllBooks();
  }, []);

  return (
    <CardGroup>
        {bookContext?.books?.length && bookContext?.books?.map((b) => {
        // { bookContext?.books?.map?.((b) => {
          console.log(b);
          // b <= 0 ? "No history":
          return (
            
            
            <Link 
              to={{
                pathname: `/books/${b.id}`,
                state: { ...b },
              }}
            >
              <ColorBoxes bg={b.color}>
              {/* <Card style={{background: "transparent", border: "none"}}> */}
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>{b.descript}</Card.Text>
                </Card.Body>
              {/* </Card> */}
              </ColorBoxes>
            </Link>
           
           
          );
        })}
    </CardGroup>
  );
};

export default BookList;
=======
import { useEffect } from 'react';
import { BookConsumer } from '../../providers/BookProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookList = ({ books, getAllBooks }) => {
  useEffect( () => {
    getAllBooks()
  }, [])
  return (
    <>
      <ListGroup>
        { books.map( b => 
          <Link to={{
            pathname: `/books/${b.id}`,
            state: { ...b }
          }}>
            <ListGroup.Item>Checkout during: {b.checkout_date}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}
const ConnectedBookList = (props) => (
  <BookConsumer>
    { value => 
      <BookList {...props} {...value} />
    }
  </BookConsumer>
)

export default ConnectedBookList;
>>>>>>> f45cbfe3e9e0bc363b384402259a975a2c9a8b68
