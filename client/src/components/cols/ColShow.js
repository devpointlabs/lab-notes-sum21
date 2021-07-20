import { Modal, } from 'react-bootstrap'
import { useState } from 'react';
import ColForm from './ColForm';
import { ColConsumer } from '../../providers/ColProvider';

const ColShow = ({ location, deleteCol, match, history }) => {
  const [editshow, setEditShow] = useState(false);
  
  return(
    <>
      <h4>Col {location}</h4>
    </>
  )
}

const ConnectedColShow = (props) => (
  <ColConsumer>
    { value => ( <ColShow {...props} {...value} /> )}
  </ColConsumer>
)

export default ColShow;