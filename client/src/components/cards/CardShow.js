import { Card, Button, Modal, } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Moment from 'react-moment'; 
import { CardConsumer } from '../../providers/CardProvider';

const CardShow = ({ ColId, location, match, deleteCard, history, id, title, notes, end_time, }) => {
  const [card, setCard] = useState({})
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }} key={id}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {notes}
          </Card.Text>
          <Card.Footer>
            <Moment format="hh A">
              {end_time}
            </Moment>
          </Card.Footer>
        </Card.Body>
        <Button variant="danger" onClick={() => deleteCard(ColId, id, history)}> Delete</Button>
      </Card>
    </>
  )
}

export default CardShow;