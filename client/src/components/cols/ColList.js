import { useEffect, useState } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link, } from 'react-router-dom';
import { Container, Row, Col, Button,} from 'react-bootstrap';
import ColUpdate from './ColUpdate';

const ColList = ({ dayId, cols, getAllCols, deleteCol, updateCol, match, history, id, handleEditClose}) => {
  const [col, setCols] = useState({title: "",})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect( () => {
    getAllCols(dayId)
  }, [])
  
    return(
      <>
      { cols.map( (c) =>
      c >= 0 ? "No Columns => Create One" 
      :
      <Container fluid="md" key={c.id}>
          <Row>
              <Col>
                  <h4>
                    {c.title}
                    <Link to={{
                      pathname: `/days/${dayId}/cols/${c.id}`, state:{c}
                    }}>
                    <Button variant="primary" onClick={handleShow}>
                      Edit
                    </Button>
                    </Link>
                    <Button variant="danger" onClick={() => deleteCol(dayId, c.id, history)}>
                      Delete
                    </Button>
                  </h4>
                  {/* <ColUpdate
                    getAllCols = {getAllCols}
                    dayId = {dayId}
                    id={c.id}
                    col= {c}
                    setCol = {setCols}
                    updateCol= {updateCol}
                    handleClose = {handleClose}
                    handleShow = {handleShow}
                    show = {show}
                    setShow = {setShow}
                    /> */}
              </Col>
          </Row>
        </Container>
      )}
    </>
  )
};

const ConnectedColList = (props) => (
  <ColConsumer>
    { value => <ColList {...props} {...value} /> }
  </ColConsumer>
)

export default ConnectedColList;

// {/* <Link to={{
//   pathname: `/col/${c.id}`
// }}> */}
// {/* </Link> */}