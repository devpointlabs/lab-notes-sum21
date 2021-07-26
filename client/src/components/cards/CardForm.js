import { useState, useEffect } from 'react';
import { Form, Button, Modal, } from 'react-bootstrap';
import { CardConsumer } from '../../providers/CardProvider';

// const CardForm = ({ addCard, history }) => {
//   const [card, setCard] = useState({ title: "", end_time: "", notes: "" })
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     addCard(card, history)
//     setCard({ title: "", end_time: "", notes: "" })
//   }

  const CardForm = ({ addCard, id, title, end_time, notes, updateCard, handleEditClose, history }) => {
    const [card, setCard] = useState({ title: "", end_time: "", notes: "" })
    const [show, setShow] = useState(false);
    
 useEffect( ()  => {
  if (id) {
    setCard({ title, end_time, notes, })
  }
 }, [])
    
 const handleSubmit = (e) => {
    e.preventDefault()
    setCard({...card})
    if (id) {
      updateCard(id, card, history)
      handleEditClose()
    } 
    else {
      addCard(card, history)
    }
    setCard({ title: "", end_time: "", notes: "" })
  }


  const refreshpage = () => {
    window.location.reload(false);
    setShow(false);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      +  New Card
    </Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>
       Create a New Card
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>
          Card Title
        </Form.Label>
        <Form.Control size="md"
          name="title"
          value={card.title}
          onChange={(e) => setCard({ ...card, title: e.target.value })}
          placeholder="title"
          required
          type="text"
        />
        <Form.Label>
          Notes
        </Form.Label>
        <Form.Control
          name="notes"
          value={card.notes}
          onChange={(e) => setCard({ ...card, notes: e.target.value })}
          placeholder="notes"
          required
          as="textarea" rows={3}
        />
        <Form.Label>
          What Time?
        </Form.Label>
        <Form.Control
          name="end_time"
          value={card.end_time}
          onChange={(e) => setCard({ ...card, end_time: e.target.value })}
          placeholder="end_time"
          required
          type= "time"
        />
        </Form.Group>
      <Button variant="primary" onClick={refreshpage} type='submit'>
        Submit
      </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
    {/* <Form onSubmit={handleSubmit}>
      <input
        name="title"
        value={card.title}
        onChange={(e) => setCard({ ...card, title: e.target.value })}
        placeholder="title"
        required
      />

      <input
        name="end_time"
        value={card.end_time}
        onChange={(e) => setCard({ ...card, end_time: e.target.value })}
        placeholder="end_time"
        required
      />

      <input
        name="notes"
        value={card.notes}
        onChange={(e) => setCard({ ...card, notes: e.target.value })}
        placeholder="notes"
        required
      />
      <button type="submit">Submit</button>
    </Form> */}
    </>
  )
}

const ConnectedCardForm = (props) => (
  <CardConsumer>
    { value => ( <CardForm {...props} {...value} /> )}
  </CardConsumer>
)
export default ConnectedCardForm;