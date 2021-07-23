import React, { useState, useEffect, } from 'react';
import 'react-calendar/dist/Calendar.css';
import {DayConsumer} from '../../providers/DayProvider';
import DayList from './DayList';

const Days = ({ getAllDays, bookId, match, addDay }) => {
  useEffect( () => {
    getAllDays(bookId)
  }, [])
  

  return(
    <div>
      <DayList bookId={match.params.bookId}/>
      {/* <DayForm addDay={addDay}/> */}
    </div>
      
  )
}
const ConnectedDays = (props) => (
  <DayConsumer>
     { value => ( <Days {...props} {...value} /> )}
  </DayConsumer>

)

export default ConnectedDays;