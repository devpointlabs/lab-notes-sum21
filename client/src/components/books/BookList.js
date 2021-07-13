
import { useEffect } from 'react';
import { BookConsumer } from '../../providers/BookProvider';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';


const BookList= ({ books, getAllBooks }) => {
  useEffect( () => {
    getAllBooks()
  }, [])
  return (
    <>
    <ListGroup>
        { books.map( b => 
          <Link to={{
            pathname: `./books/${b.id}`,
            state: { ...b }
          }}>
            <ListGroup.Item>
              Book Title: {b.title} 
              Description: {b.descript} </ListGroup.Item>
            
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