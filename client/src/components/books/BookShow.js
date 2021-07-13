import { Button, Modal } from 'react-bootstrap';
import { useState,useContext } from 'react';
import BookForm from './BookForm';
import { BookContext } from '../../providers/BookProvider';

const BookShow = ({ location, deleteBook, match }) => {
  const bookContext = useContext(BookContext);
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  return (
    <>
      <h1>Book Show # {location.state.id}</h1>
      {/* <h1>Checkout Show # {match.params.id}</h1> */}
      <p>
        Book Title:  {location.state.title}
      </p>
      <p>
        Book Description: {location.state.description}
      </p>
      <p>
        Book start_date ${location.state.start_date}
      </p>
      <p>
        Book end_date ${location.state.end_date}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book {location.state.id} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="danger" onClick={() => deleteBook(match.params.id)}>Delete</Button>
    </>
  )
}

export default BookShow;