import { Card, Button, Modal, } from 'react-bootstrap';
import CardForm from './CardForm';
import { useState } from 'react';

const CardShow = ({ ColId,  deleteCard, history, id, title, notes, end_time, updateCard, }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '18rem' }} key={id}>
        <Card.Body onClick={() => setShow(true)}>
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
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title} {end_time}
          </Modal.Title>
          <Modal.Body>
            {notes}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  )
}

export default CardShow;