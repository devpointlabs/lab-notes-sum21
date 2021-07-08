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