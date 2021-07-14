import { Container, } from 'react-bootstrap';
import ColForm from './ColForm';
import ColList from './ColList';

const Cols = ({ dayId }) => {
  
  return(
    <>
      <Container>
        <ColForm />
        <ColList />
      </Container>
    </>
  )
}

export default Cols;