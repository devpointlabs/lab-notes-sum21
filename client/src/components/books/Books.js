import { Container, Modal } from "react-bootstrap";
import BookList from "./BookList";
import BookForm from "./BookForm";

const Books = () => (
  <>
    <Container fluid='md'>
      <p>My Books</p>
      <BookList />
      {/* <Modal> */}
        <BookForm />
      {/* </Modal> */}
    </Container>
  </>
);

export default Books;

