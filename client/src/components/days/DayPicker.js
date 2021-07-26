import {Button} from 'react-bootstrap';
import { BookConsumer } from '../../providers/BookProvider';
import {useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const DayPicker = ({setCurrentDay, getBook, days, bookId, book, history, day}) => {
  useEffect( () => {
    getBook(bookId)
  }, [])

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
    <Button>
      <ArrowBackIosIcon/>
    </Button>
    <DatePicker 
      minDate={moment.utc(book.start_date).add(1,"days").valueOf()} 
      maxDate={moment.utc(book.end_date).add(1,"days").valueOf()} 
      onChange={(value) => grabDayId(value)}
      selected={moment.utc(day.day_date).add(1,"days").valueOf()}
      dateFormat="yyyy-MM-dd"/>
    <Button>
      <ArrowForwardIosIcon/>
    </Button>
    </>
  )
}

const ConnectedDayPicker = (props) =>(
  <BookConsumer>
    {value => <DayPicker {...props} {...value} />}
  </BookConsumer>
)

export default ConnectedDayPicker;