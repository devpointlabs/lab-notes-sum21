import {Button, Modal} from 'react-bootstrap';
import { DayConsumer } from '../../providers/DayProvider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DayForm from './DayForm';

const DayShow = ({getAllDays, book_id, days, location, match, deleteDay, addDay, history }) => {

  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  useEffect( () => {
    getAllDays(book_id)
  }, [])
  
  
  let incId = parseInt(match.params.id) + 1;
  let decId = parseInt(match.params.id) - 1;

  return(
    <>
      <Link book_id={location.state.book_id} to={{pathname: "/books/" + location.state.book_id + "/days/" + decId, state: {...days}}}><ArrowBackIosIcon/></Link>
      <Link book_id={location.state.book_id} to={{pathname: "/books/" + location.state.book_id, state: {days}}}><CalendarTodayIcon/></Link>
      <Link book_id={location.state.book_id} to={{pathname: "/books/" + location.state.book_id + "/days/" + incId, state: {...days}}}><ArrowForwardIosIcon/></Link>
      {' '}
      {' '}
      {' '}
      <text style={{fontWeight: "bold"}}>{location.state.day_date}</text>
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
    <br/>
    <br/>
    <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
    {' '}
    <Button variant="danger" onClick={() => deleteDay(match.params.id, history)}>Delete</Button>
    {' '}
    <Modal show={editshow} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Day {location.state.id} Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <DayForm { ...location.state } handleEditClose={handleEditClose} />
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
      </Modal.Footer>
    </Modal>

    </>
  )
}

const ConnectedDayShow = (props) => (
  <DayConsumer>
    { value => ( <DayShow {...props} {...value} /> )}
  </DayConsumer>
)


export default ConnectedDayShow;