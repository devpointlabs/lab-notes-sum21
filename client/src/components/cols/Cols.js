import { Container, } from 'react-bootstrap';
// import { useState, } from 'react';
// import { Link } from 'react-router-dom';
import ColList from './ColList';
import ColForm from './ColForm';

const Cols = ({ dayId, id}) => {
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
        <ColForm />
        <ColList />
      </Container>
    </>
  )
}

export default Cols; 