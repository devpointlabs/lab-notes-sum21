import { Card, Button, Modal, } from 'react-bootstrap';
import CardForm from './CardForm';

const CardShow = ({ ColId,  deleteCard, history, id, title, notes, end_time, updateCard, }) => {

  return (
    <>
      <Card style={{ width: '18rem' }} key={id}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {notes}
          </Card.Text>
          <Card.Footer>
            {end_time}
          </Card.Footer>
        </Card.Body>
        <Button variant="danger" onClick={() => deleteCard(ColId, id, history)}> 
          Delete
        </Button>
        <CardForm
          ColId={ColId}
          id={id}
          title={title}
          notes={notes}
          end_time={end_time}
          history={history}
          updateCard={updateCard}
        />
      </Card>
    </>
  )
}

export default CardShow;