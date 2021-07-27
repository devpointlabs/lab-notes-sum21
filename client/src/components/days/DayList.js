import { useEffect } from 'react';
import { DayConsumer } from '../../providers/DayProvider';
import { Link } from 'react-router-dom';
import {Card, ListGroup} from 'react-bootstrap';

const DayList = ({ bookId, days, getAllDays, }) => {
  useEffect( () => {
    getAllDays(bookId)
  }, [])
  
  

  return (
    <Card>
      <ListGroup>
        {days.length > 0 ?
          <>
            {days.map( d => 
              <ListGroup.Item>
                <Link to={{
                  pathname: "/books/" + bookId + "/days/" + d.id, state: {...d}
                }}>
                  {d.day_date}
                </Link>
              </ListGroup.Item>
              )}
          </>  
          :
          <p>No Days</p>
        }
      </ListGroup>
    </Card>
  )
}

const ConnectedDayList = (props) => (
  <DayConsumer>
    {value =>  <DayList {...props} {...value} /> }
  </DayConsumer>
)

export default ConnectedDayList;