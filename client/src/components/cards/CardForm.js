import { useState, useEffect } from 'react';
import { Form, Button, Modal, Image } from 'react-bootstrap';
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
 }, [] )
    
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <Image className="add" 
        src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1627152011/Screen_Shot_2021-07-24_at_12.38.51_PM_jc5dfm.png"
        roundedCircle
        align='right'
        width="30"
        height="30" 
        alt="add"/>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create a New Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
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
        </form>
      </Modal.Body>
    </Modal>
  </>
  )
}
export default CardForm;