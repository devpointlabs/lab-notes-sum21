import {Button, Modal, Col, Form} from 'react-bootstrap';
import { DayConsumer } from '../../providers/DayProvider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState, useEffect} from 'react';
import DayPicker from './DayPicker';
import Cols from '../cols/Cols';

const DayShow = ({getDay, getAllDays, days, bookId, day, location, match, deleteDay, history, day_date, start_date, end_date }) => {
  const [currentDay, setCurrentDay] = useState({});
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const destroyDay = () => { deleteDay(match.params.bookId, match.params.id, history);}

  useEffect( () => {
    getAllDays(match.params.bookId)
    setCurrentDay(getDay(match.params.bookId, match.params.id))
  }, [])
  
  return(
    <>
      <ArrowBackIosIcon/>
      {' '}
      <CalendarTodayIcon/>
      <DayPicker 
      day={day}
      setCurrentDay={setCurrentDay}
      days={days}
      bookId={match.params.bookId}
      history={history}/>
      {' '}
      <ArrowForwardIosIcon/>
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