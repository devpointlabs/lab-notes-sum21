import React, { useState } from 'react';
import axios from 'axios';

export const ColContext = React.createContext();

export const ColConsumer = ColContext.Consumer;

const ColProvider = ({ children }) => {
  const [cols, setCols] = useState([])

  const getAllCols = (dayId) => {
    axios.get(`/api/days/${dayId}/cols`)
      .then( res => {
        setCols(res.data)
      })
      .catch( err => console.log(err) )
  }

  const addCol = (dayId, cols) => {
    axios.post(`/api/days/${dayId}/cols`, { cols })
      .then( res => {
        setCols([ ...cols, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateCol = (dayId, id, cols) => {
    axios.put(`/api/days/${dayId}/cols/${id}`, { cols })
      .then( res => {
        const updatedCol = cols.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCols(updatedCol)
      })
      .catch( err => console.log(err) )
  }

  const deleteCol = (dayId, id, history) => {
    axios.delete(`/api/days/${dayId}/cols/${id}`)
      .then( res => {
        setCols(cols.filter( c => c.id !== id))
        alert(res.data.message)
      })
      .catch(err => console.log(err) )
      history.push(`/days/${dayId}/cols`)
  }
  
  return(
    <ColContext.Provider value={{
      cols,
      getAllCols: getAllCols,
      addCol: addCol,
      updateCol: updateCol,
      deleteCol: deleteCol
    }}>
      { children }
      </ColContext.Provider>
  )
}

export default ColProvider;
