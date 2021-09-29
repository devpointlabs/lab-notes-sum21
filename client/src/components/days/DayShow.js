import { DayConsumer } from '../../providers/DayProvider';
import {useState, useEffect} from 'react';
import DayPicker from './DayPicker';
import Cols from '../cols/Cols';

const DayShow = ({getDay, getAllDays, days, day, match, deleteDay, history }) => {
  const [current, setCurrentDay] = useState({});
  
  useEffect( () => {
    getAllDays(match.params.bookId)
    setCurrentDay(getDay(match.params.bookId, match.params.id))
  }, [])

  // const incDay = () => {
  //   days.map( d => {
  //       d.id
  //       setCurrentDay(d)
  //       history.push(`/books/${bookId}/days/${d.id}`)
  //       // window.location.reload()
  //   })
  // }
  
  return(
    <>
      {/* <Button onChange= {incDay}>
        <ArrowBackIosIcon/>
      </Button> */}
      {' '}
      {/* <CalendarTodayIcon/> */}
      <DayPicker 
        day={day}
        setCurrentDay={setCurrentDay}
        days={days}
        bookId={match.params.bookId}
        history={history}
      />
      {' '}
      {/* <Button onClick={incDay}>
        <ArrowForwardIosIcon/>
      </Button> */}
      {' '}
      <text style={{fontWeight: "bold"}}>{day.day_date}</text>
    <Cols dayId={match.params.id} />
    </>
  )
}

const ConnectedDayShow = (props) => (
  <DayConsumer>
    { value => ( <DayShow {...props} {...value} /> )}
  </DayConsumer>
)


export default ConnectedDayShow;