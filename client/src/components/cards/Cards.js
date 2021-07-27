import CardShow from './CardShow';
import { CardConsumer } from '../../providers/CardProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardForm from './CardForm';

const Cards = ({ ColId, cards, }) => {
  const [allcards, setCards] = useState([])
  
  useEffect( () => {
    axios.get(`/api/cols/${ColId}/cards`)
      .then( res => {
          setCards(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const deleteCard = (colId, id) => {
    axios.delete(`/api/cols/${colId}/cards/${id}`)
     .then( res => {
        setCards(cards.filter(c => c.id !== id))
        window.location.reload()
     })
     .catch( err => console.log(err) )
}

const addCard = (colId, card) => {
  axios.post(`/api/cols/${colId}/cards`, { card })
   .then( res => {
       setCards([...cards, res.data])
       window.location.reload()
   })
   .catch( err => console.log(err))
}

const updateCard = (colId, id, card) => {
  axios.put(`/api/cols/${colId}/cards/${id}`, { card })
   .then(res => {
       const updatedCards = cards.map( c => {
           if (c.id === id) {
               return res.data
           }
           return c
       })
       setCards(updatedCards)
       window.location.reload()
   })
   .catch( err => console.log(err) )
}
  
  return(
    <>
      {
        allcards.length <= 0 ? "No Cards"
        :
        allcards.map( c => 
          <CardShow {...c} 
          ColId={ColId} 
          deleteCard={deleteCard}
          updateCard={updateCard}
          />
        )
      }
      <CardForm ColId={ColId} addCard={addCard} />
    </>
  )
}

const ConnectedCards = (props) => (
  <CardConsumer>
    { value => ( <Cards {...props} {...value} /> )}
  </CardConsumer>
)

export default ConnectedCards;