import React, {useState} from 'react';
import axios from 'axios';

export const DayContext = React.createContext();
export const DayConsumer = DayContext.Consumer;

const DayProvider = ({children}) => {
  const [days, setDays] = useState([])
  const getAllDays = () => {
    axios.get(`/api/books/${id}/days`)
      .then( res => {
        setDays(res.data)
      })
      .catch( err => console.log(err) )
  }
  
  const addDay = (day) => {
    axios.post(`/api/books/${id}/days`)
      .then( res => {
        setDays([...days, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateDay = (id, day, history) => {
    axios.put(`/api/books/${id}/days/${id}`)
      .then( res => {
        const updatedDays = days.map( d => {
          if (days.id == id) {
            return res.data
          }
          return d
        })
        setDays(updatedDays)
        history.push("/days")
      })
      .catch( err => console.log(err) )
  }

  const deleteDay = (id, history) => {
    axios.delete(`/api/books/${id}/days/${id}`)
      .then( res => {
        setDays(days.filter( d => d.id !== id))
        alert(res.data.message)
        history.push("/days")
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