import { Form, Modal, Button, } from 'react-bootstrap';
import { useState, } from 'react';
// import { ColConsumer } from '../../providers/ColProvider';

const ColUpdate = ({ dayId, id, col, setCols, colUpdate, handleClose, handleShow, getAllCols }) => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    setCols({...col})
  }
  
  <>
    <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>
        Update Column({col.title})
      </Modal.Title>
    </Modal.Header>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
      <Form.Label>
        Pick a new name
      </Form.Label>
      <Form.Control 
        type="text"
        name="title"
        value= {col.title}
        onChange={(e) => setCols({...col, title: e.target.value})}
      />
      </Form.Group>
    </Form>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose} type='submit'>
      Submit
    </Button>
    </Modal.Footer>
  </Modal>
  </>
}

export default ColUpdate;