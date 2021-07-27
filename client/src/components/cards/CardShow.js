import { Card, Button, Modal, } from 'react-bootstrap';
import CardForm from './CardForm';
import { useState } from 'react';

const CardShow = ({ ColId,  deleteCard, history, id, title, notes, end_time, updateCard, }) => {
  const [show, setShow] = useState(false)

  return (
    <>
    { cards.map( (card) =>
      card <= 0 ? "No Cards => Create One"
      :
    <Card style={{ width: '10rem' }} key={card.id}>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.notes}
        </Card.Text>
        <Card.Footer>
          <Moment format="hh A">
            {card.end_time}
          </Moment>
        </Card.Footer>
      </Card.Body>
      <Button variant="danger" onClick={() => deleteCard(card.id, history, ColId)}> Delete</Button>
    </Card>
    )}
    </>
  )
}

export default CardShow;