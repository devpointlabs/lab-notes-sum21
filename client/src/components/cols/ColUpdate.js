import { Form, Button, } from 'react-bootstrap';
import { useState, } from 'react';
import { ColConsumer } from '../../providers/ColProvider';

const ColUpdate = ({ location, match, updateCol }) => {
  const[col, setCol] = useState({title: location.state.c.title})
  const{dayId, id } = match.params
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setCol({...col})
    updateCol(dayId, id, col)
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
        <Button type="submit">Submit</Button>
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