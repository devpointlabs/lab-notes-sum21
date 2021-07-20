import React, {useState} from 'react';
import axios from 'axios';

export const DayContext = React.createContext();
export const DayConsumer = DayContext.Consumer;

const DayProvider = ({ children}) => {
  const [days, setDays] = useState([])
  const getAllDays = (bookId) => {
    axios.get(`/api/books/${bookId}/days`)
      .then( res => {
        setDays(res.data)
      })
      .catch( err => console.log(err) )
  }
  
  const addDay = (bookId, day) => {
    axios.post(`/api/books/${bookId}/days`, {day} )
      .then( res => {
        setDays([...days, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateDay = (bookId, id, day, history) => {
    axios.put(`/api/books/${bookId}/days/${id}`, {day})
      .then( res => {
        const updatedDays = days.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        setDays(updatedDays)
        history.push(`/books/${bookId}/days`)
      })
      .catch( err => console.log(err) )
  }

  const deleteDay = (bookId, id, history) => {
    axios.delete(`/api/books/${bookId}/days/${id}`)
      .then( res => {
        setDays(days.filter( d => d.id !== id))
        alert(res.data.message)
        history.push(`/books/${bookId}/days`)
      })
      .catch( err => console.log(err) )
  }

  return(
    <DayContext.Provider value={{
      days,
      getAllDays: getAllDays,
      addDay: addDay,
      updateDay: updateDay,
      deleteDay: deleteDay,
    }}>
      {children}
    </DayContext.Provider>
  )
}

export default DayProvider;