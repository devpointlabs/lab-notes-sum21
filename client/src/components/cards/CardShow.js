import { Card, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Moment from 'react-moment'; 
import CardForm from './CardForm';
import { CardConsumer } from '../../providers/CardProvider';

const CardShow = ({ ColId, cards, getAllCards, location, match, deleteCard, history,}) => {
  const [card, setCard] = useState({})
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  useEffect( () => {
    getAllCards(ColId)
  }, [])

  return (
    <>
    { cards.map( (card) =>
      card <= 0 ? "No Cards => Create One"
      :
    <Card style={{ width: '18rem' }} key={card.id}>
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
const ConnectedCardShow = (props) => (
  <CardConsumer>
    { value => <CardShow {...props} {...value} /> }
  </CardConsumer>
)
export default ConnectedCardShow;