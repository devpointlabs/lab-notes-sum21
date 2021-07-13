
import { useEffect } from 'react';
import { BookConsumer } from '../../providers/BookProvider';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const BookList= ({ books, getAllBooks }) => {
  useEffect( () => {
    getAllBooks()
  }, [])
  return (
    <>
    <h1>My Cards</h1>
    <Card>
        { books.map( b => 
          <Card.Link to={{
            pathname: `./books/${b.id}`,
            state: { ...b }
          }}>
            <Card.Title>
              Book Title: {b.title} 
              </Card.Title>
              <Card.Text>

              Description: {b.descript} 
              </Card.Text>
            
          </Card.Link>
        )}
      </Card>
    
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