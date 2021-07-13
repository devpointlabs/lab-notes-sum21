import {Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { DayConsumer } from '../../providers/DayProvider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useEffect } from 'react';

const DayForm = ({days, bookId, getAllDays, location}) => {
  useEffect( () => {
    getAllDays(bookId)
  }, [])
  return(
    <>

      <h1>date: {}</h1>
      <Container>
        <ArrowBackIosIcon/>
        <CalendarTodayIcon/>
        {' '}
        <ArrowForwardIosIcon/>
        <Row>
          <Col md={4}>
          <Card>
            <Card.Body>
            </Card.Body>
          </Card>
          </Col>   
        </Row>
      </Container>
    </>
  )
}

const ConnectedDayForm = (props) => (
  <DayConsumer>
    { value => <DayForm {...props} {...value}/> }
  </DayConsumer>
)
export default ConnectedDayForm;