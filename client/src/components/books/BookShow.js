import { Button, Modal, Card } from 'react-bootstrap';
import { useState } from 'react';
import BookEdit from './BookEdit';
import { BookConsumer } from '../../providers/BookProvider';
import Moment from 'react-moment'; 
import DayList from '../days/DayList';
import {CenterBookShow} from '../styledComponents/BookShowStyle';

const BookShow = ({ location, deleteBook, match, history }) => {
  // const bookContext = useContext(BookContext);
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  return (
    <>
    <CenterBookShow>
      {/* <h1>Book Show # {location.state.id}</h1>
      <h1>Checkout Show # {match.params.id}</h1> */}
      <Card style={{width: '18rem'}} className="text-center">
      <Card.Header >
      <text style={{fontWeight: "bold"}}>{location.state.title}</text>
      </Card.Header>
      {/* <p>
        
        Book Description: {location.state.descript}
      </p>
      <p> 
        Tracking Begin Date: <Moment format="MM-DD-YYYY">{location.state.start_date}</Moment>
      </p>
      <p>
        Tracking End Date: <Moment format="MM-DD-YYYY">{location.state.end_date}</Moment>
      </p> */}
      <Card.Body>
        <DayList bookId={location.state.id}/>
      </Card.Body>
      </Card>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit Book</Button>
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

      <Button variant="danger" onClick={() => deleteBook(match.params.id, history)}>Delete Book</Button>
    </CenterBookShow>
    </>
  )
}

const ConnectedBookShow = (props) => (
  <BookConsumer>
    { value => ( <BookShow {...props} {...value} /> )}
  </BookConsumer>
)
export default ConnectedBookShow;
