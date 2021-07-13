import { DayConsumer } from '../../providers/DayProvider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import moment from 'react-moment';
import axios from 'axios'

const DayShow = ({getAllDays, props, book_id, days, location, id, match}) => {
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
    </>
  )
}

const ConnectedDayShow = (props) => (
  <DayConsumer>
    { value => <DayShow {...props} {...value} />}
  </DayConsumer>
)


export default ConnectedDayShow;