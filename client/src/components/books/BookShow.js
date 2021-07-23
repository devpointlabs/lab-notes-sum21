import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import BookEdit from './BookEdit';
import { BookConsumer } from '../../providers/BookProvider';
import Moment from 'react-moment'; 
import DayList from '../days/DayList';

const BookShow = ({ location, deleteBook, match, history }) => {
  // const bookContext = useContext(BookContext);
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  return (
    <>
      {/* <h1>Book Show # {location.state.id}</h1>
      <h1>Checkout Show # {match.params.id}</h1> */}
      
      <p>
    

        Book Title:  {location.state.title}
      </p>
      <p>
        
        Book Description: {location.state.descript}
      </p>
      <p> 
        Tracking Begin Date: <Moment format="MM-DD-YYYY">{location.state.start_date}</Moment>
      </p>
      <p>
        Tracking End Date: <Moment format="MM-DD-YYYY">{location.state.end_date}</Moment>
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book {location.state.id} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookEdit { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Button variant="danger" onClick={() => deleteBook(match.params.id, history)}>Delete</Button>
      <DayList bookId={location.state.id}/>
    </>
  )
}

const ConnectedBookShow = (props) => (
  <BookConsumer>
    { value => ( <BookShow {...props} {...value} /> )}
  </BookConsumer>
)
export default ConnectedBookShow;
