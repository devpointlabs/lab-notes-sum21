import {Button, Modal, Col, Form} from 'react-bootstrap';
import { DayConsumer } from '../../providers/DayProvider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState, useEffect} from 'react';
import DayPicker from './DayPicker';

const DayShow = ({getDay, getAllDays, days, bookId, day, location, match, deleteDay, history, day_date, start_date, end_date }) => {
  const [currentDay, setCurrentDay] = useState({});
  // const [editshow, setEditShow] = useState(false);
  // const handleEditClose = () => setEditShow(false);
  // const handleEditShow = () => setEditShow(true);

  // const [deleteShow, setDeleteShow] = useState(false);
  // const handleDeleteClose = () => setDeleteShow(false);
  // const handleDeleteShow = () => setDeleteShow(true);

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
    {/* <Container>
      <Row> 
        {
          items.map( i => 
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={i.pic} />
                <Card.Body>
                  <Card.Title>Title: {i.title}</Card.Title>
                  <Card.Text>
                    Author: {i.author}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Genre: {i.genre}</ListGroupItem>
                  <ListGroupItem>Item Type: {i.item_type}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>  
          )
        }
      </Row>
    </Container> */}
    {/* <br/>
    <br/>
    {' '} */}
    {/* <Button variant="danger" onClick={() => handleDeleteShow()}>Delete</Button>
    {' '}
    <Modal show={deleteShow} onHide={handleDeleteClose}>
      <Modal.Header closeButton/>
      <Modal.Body>
        <h1>WARNING!!</h1> <p>IF YOU DELETE THIS DAY, YOU WILL DELETE ALL GOALS AND NOTES ASSOCIATED WITH THIS DAY. THIS ACTION CANNOT BE UNDONE.</p><p>CLICK "Confirm" TO CONTINUE. TO GO BACK, CLICK "Close".</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => destroyDay()}>Delete</Button>
        <Button variant="secondary" onClick={handleDeleteClose}>Close</Button>
      </Modal.Footer>
    </Modal> */}

    </>
  )
}

const ConnectedDayShow = (props) => (
  <DayConsumer>
    { value => ( <DayShow {...props} {...value} /> )}
  </DayConsumer>
)


export default ConnectedDayShow;