import { useEffect } from 'react';
import { DayConsumer } from '../../providers/DayProvider';
import { Link } from 'react-router-dom';

const DayList = ({ bookId, days, getAllDays, location }) => {
  useEffect( () => {
    getAllDays(bookId)
  }, [])

  return (
    <>
      {days.length > 0 ?
        <ul>
          {days.map( d => 
            <li>
              <Link to={{
                pathname: "/books/" + bookId + "/days/" + d.id, state: {...d}
              }}>
                Days # {d.id}
              </Link>
            </li>
            )}
        </ul>  
        :
        <p>No Days</p>
      }
    </>
  )
}

const ConnectedDayList = (props) => (
  <DayConsumer>
    {value => ( <DayList {...props} {...value} /> )}
  </DayConsumer>
)

export default ConnectedDayList;