import { BookConsumer } from '../../providers/BookProvider';
import {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const DayPicker = ({setCurrentDay, getBook, days, bookId, book, history, day}) => {
  useEffect( () => {
    getBook(bookId)
  }, [])

  const [startDate, setStartDate] = useState(new Date());

  const grabDayId = (clickDate) => {
    days.map( d => {
      if (d.day_date == moment(clickDate).format("YYYY-MM-DD") ){
        setCurrentDay(d)
        history.push(`/books/${bookId}/days/${d.id}`)
        window.location.reload()
      }
    })
  }

  return(
    <>
    <DatePicker 
      minDate={moment.utc(book.start_date).add(1,"days").valueOf()} 
      maxDate={moment.utc(book.end_date).add(1,"days").valueOf()} 
      onChange={(value) => grabDayId(value)}
      selected={moment.utc(day.day_date).add(1,"days").valueOf()}
      dateFormat="yyyy-MM-dd"/>
    </>
  )
}

const ConnectedDayPicker = (props) =>(
  <BookConsumer>
    {value => <DayPicker {...props} {...value} />}
  </BookConsumer>
)

export default ConnectedDayPicker;