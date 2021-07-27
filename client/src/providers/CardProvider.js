import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const CardContext =  React.createContext();

export const CardConsumer = CardContext.Consumer;

const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    
    const getAllCards = (colId) => {
        axios.get(`/api/cols/${colId}/cards`)
            .then( res => {
                setCards(res.data)
            })
            .catch(err => console.log(err))
    }

   const addCard = (colId, card) => {
       axios.post(`/api/cols/${colId}/cards`, { card })
        .then( res => {
            setCards([...cards, res.data])
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
        })
        .catch( err => console.log(err) )
   }

   const deleteCard = (colId, id) => {
       axios.delete(`/api/cols/${colId}/cards/${id}`)
        .then( res => {
            setCards(cards.filter(c => c.id !== id))
            alert(res.data.message)
        })
        .catch( err => console.log(err) )

   }
   
    return (
        <CardContext.Provider value={{
            cards,
            getAllCards: getAllCards,
            addCard: addCard,
            updateCard: updateCard,
            deleteCard: deleteCard,


        }}>
            { children }
        </CardContext.Provider>
    )
}

export default CardProvider;