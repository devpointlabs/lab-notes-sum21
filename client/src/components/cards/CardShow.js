import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import CardForm from './CardForm';
import { CardConsumer } from '../../providers/CardProvider';

const CardShow = ({ location, match, deleteCard, history }) => {
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <>
      <h1>Card Show: {location.state.id}</h1>
      <p>
        Title: {location.state.title}
      </p>
      <p>
        End time: {location.state.end_time}
      </p>
      <p>
        Notes: ${location.state.notes}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteCard(match.params.id, history)}>Delete</Button>
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Card Show # {location.state.id} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
const ConnectedCardShow = (props) => (
  <CardConsumer>
    { value => <CardShow {...props} {...value} /> }
  </CardConsumer>
)
export default ConnectedCardShow;