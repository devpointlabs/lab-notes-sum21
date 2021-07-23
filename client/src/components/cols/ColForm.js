import { Form, Modal, Button, } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ColConsumer } from '../../providers/ColProvider';


const ColForm = ({ addCol, id, title, history, location, updateCol, handleEditClose, dayId}) => {
  const [cols, setCols] = useState({title: "",})
  const [show, setShow] = useState(false);

  useEffect( () => {
    if (id) {
      setCols({ title, dayId})
    }
  }, [])

  const refreshpage = () => {
    window.location.reload(false);
    setShow(false);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCols({...cols})
    if (id) {
      updateCol( cols, dayId)
      handleEditClose()
    } else {
      addCol(dayId, cols)
    }
    setCols({ title: ""})
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Column
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create a new Column
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>
              Column Title
            </Form.Label>
            <Form.Control 
              type="text"
              placeholder="example: todos" 
              name="title"
              value={cols.title} 
              onChange={(e) => setCols({...cols, title: e.target.value})}
            />
            </Form.Group>
          <Button variant="primary" onClick={refreshpage} type='submit'>
            Submit
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedColForm = (props) => (
  <ColConsumer>
    { value => (
      <ColForm {...props} {...value} />
    )}
  </ColConsumer>
)

export default ConnectedColForm;