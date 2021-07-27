import { Container } from "react-bootstrap";
// import { useState, } from 'react';
// import { Link } from 'react-router-dom';
import ColList from "./ColList";
import ColForm from "./ColForm";
import {
  NewColumnContainer,
  CardPageGrid,
} from "../styledComponents/ColStyles";

export const Cols = ({ dayId, id }) => {
  // const[show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => handleShow(true);
  return (
    <>
      <CardPageGrid>
        {/* <Link to={{
            pathname:  "/days/" + dayId + "/cols/" + id 
          }}>
          <Button variant="primary" onClick={handleShow}>
          Launch demo modal
          </Button>
        </Link> */}
        <ColList dayId={dayId} />
        {/* <ColForm dayId={dayId} /> */}
      </CardPageGrid>
    </>
  );
};

export default Cols;
