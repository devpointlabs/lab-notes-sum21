import { Form, Modal, Button, } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ColConsumer } from '../../providers/ColProvider';

const ColForm = ({ addCol, id, title, history, updateCol, handleEditClose, dayId}) => {
  const [col, setCols] = useState({title: "",})
  const [show, setShow] = useState(false);

  useEffect( () => {
    if (id) {
      setCols({ title, dayId})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCols({...col})
    if (id) {
      updateCol(id, col, history)
      handleEditClose()
    } else {
      addCol(col)
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
              value={col.title} 
              onChange={(e) => setCols({...col, title: e.target.value})}
            />
            </Form.Group>
          <Button variant="primary" onClick={handleClose} type='submit'>
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