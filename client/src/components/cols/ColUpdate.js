import { Form, Button, } from 'react-bootstrap';
import { useState, } from 'react';
import { useHistory } from 'react-router-dom';
import { ColConsumer } from '../../providers/ColProvider';

const ColUpdate = ({ location, match, updateCol, history }) => {
  const histore = useHistory();
  const[col, setCol] = useState({title: history.location.state.c.title})
  const{dayId, id } = match.params
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setCol({...col})
    updateCol(dayId, id, col, history)
  }
  
  return(
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>
          Pick a new name
        </Form.Label>
        <Form.Control 
          type="text"
          name="title"
          value= {col.title}
          onChange={(e) => setCol({...col, title: e.target.value})}
        />
        </Form.Group>
        <Button type="submit"  onClick={() => histore.goBack()}>Submit</Button>
      </Form>
    </>
  )
}

const ConnectedColUpdate = (props) => (
  <ColConsumer>
    { value => <ColUpdate {...props} {...value} /> }
  </ColConsumer>
)

export default ConnectedColUpdate;