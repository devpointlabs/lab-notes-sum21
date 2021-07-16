<<<<<<< HEAD
import { Container, Modal } from "react-bootstrap";
import BookList from "./BookList";
import BookForm from "./BookForm";

const Books = () => (
  <>
    <Container fluid='md'>
      <p>My Books</p>
      <BookList />
      <BookForm />
    </Container>
  </>
);

export default Books;
=======
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => (
    <>
    <h1>My Books:</h1>
    <BookForm />
    <BookList/>
    </>
)
>>>>>>> f45cbfe3e9e0bc363b384402259a975a2c9a8b68

