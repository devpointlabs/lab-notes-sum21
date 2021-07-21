// import React, { useState, useEffect, } from 'react';
// import {Link} from 'react-router-dom';
// import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';
// import {DayConsumer} from '../../providers/DayProvider';
// import DayForm from './DayForm';
// import DayList from './DayList';
// import moment from 'moment';

// const Days = ({ bookId, getAllDays, days, match, addDay }) => {

//   // const tileContent = ({ date, view }) => {
//   //   // let allDays = days
//   //   let formattedDay = moment(date).format("YYYY-MM-DD")
//   //   days.map( d =>
//   //     {if (d.day_date == formattedDay) {
//   //       return(
//   //         <Link to={{
//   //           pathname: `/books/${bookId}/days/${d.id}`
//   //         }}>
//   //           click
//   //         </Link>
//   //         )
//   //     }}
//   //   )
//   //   return(
//   //   view === 'month' && isInDaysArray(date) ? <Link to='/books/6/days/1'>Click</Link> : null )
//   // }

//   // const isInDaysArray = (date) => {
//   //   let formattedDay = moment(date).format("YYYY-MM-DD")
//   //     days.map( d => {
//   //       if (d.day_date = formattedDay ) {
//   //         return true
//   //       }
//   //       else{ return false }
//   //     })
//   // }

//   return(
//     <div>
//       {/* <Calendar
//       // {...days}
//       tileContent={tileContent}
//       // value={['2017-01-01', '2017-08-01']}
//       // onClickDay= "/books/book_id"
//       /> */}
//       <DayList bookId={match.params.bookId}/>
//       <DayForm addDay={addDay}/>
//       </div>
      
//   )
// }
// const ConnectedDays = (props) => (
//   <DayConsumer>
//      { value => ( <Days {...props} {...value} /> )}
//   </DayConsumer>

// )

// export default ConnectedDays;