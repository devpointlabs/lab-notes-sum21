import { useState, useEffect } from 'react';
// import { Form, Card, Button } from 'react-bootstrap';
import { CardConsumer } from '../../providers/CardProvider';


const CardForm = ({ addCard }) => {
  const [card, setCard] = useState({ title: "", end_time: "", notes: "" })
  const handleSubmit = (e) => {
    e.preventDefault()
    addCard(card)
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