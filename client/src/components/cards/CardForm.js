import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
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

  return (
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
  )
}
export default CardForm;