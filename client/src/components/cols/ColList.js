import { useEffect } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link } from 'react-router-dom';

const ColList = ({ dayId, cols, getAllCols }) => {
  useEffect( () => {
    getAllCols(dayId)
  }, [])

  return(
    <>
      <p>ColList Page</p>
    </>
  )
}

const ConenctedColList = (props) => (
  <ColConsumer>
    { value => <ColList {...props} {...value} /> }
  </ColConsumer>
)

export default ConenctedColList;