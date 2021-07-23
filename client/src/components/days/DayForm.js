import { useState, useEffect } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { DayConsumer } from '../../providers/DayProvider';
import { ColorStyles } from '../styledComponents/sharedStyles';
import { withRouter } from 'react-router-dom';

const DayForm = ({ addDay, match, getAvalItems, id, day_date, updateDay, handleEditClose, history}) => {
  const [day, setDay] = useState({ day_date: ""})

  useEffect( () => {
    if(id) {
      setDay({ day_date})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setDay({...day})
    if (id) {
      updateDay(id, day, history)
      handleEditClose()
    } else {
      addDay(day)
    }
    setDay({ day_date: ""})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Label>Date</Form.Label>
      <Form.Group controlId="formBasicDayDate">
        <Form.Control
          placeholder="YYYY-MM-DD"
          type="date"
          name="day_date"
          value={day.day_date}
          onChange={(e) => setDay({...day, day_date: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Done</Button>
    </Form>
  )
}

const ConnectedDayForm = (props) => (
  <DayConsumer>
    { value => (
      <DayForm {...props} {...value} /> 
    )}
  </DayConsumer>
)

export default withRouter(ConnectedDayForm);