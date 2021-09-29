import { Container, } from 'react-bootstrap';
// import { useState, } from 'react';
// import { Link } from 'react-router-dom';
import ColList from './ColList';

export const Cols = ({ dayId, id}) => {
  // const[show, setShow] = useState(false);
  
  // const handleClose = () => setShow(false);
  // const handleShow = () => handleShow(true);
  return(
    <>
      <Container>
        {/* <Link to={{
            pathname:  "/days/" + dayId + "/cols/" + id 
          }}>
          <Button variant="primary" onClick={handleShow}>
          Launch demo modal
          </Button>
        </Link> */}
        <ColList dayId={dayId} />
        {/* <ColForm dayId={dayId} /> */}
      </Container>
    </>
  )
}

export default Cols; 