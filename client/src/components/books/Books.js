import { Jumbotron } from "react-bootstrap";
import BookList from './BookList';
import BookForm from './BookForm';

const Books = () => (
    <>
    <Jumbotron>
        <h1>MyBooks</h1>
    </Jumbotron>
    <BookList />
    <BookForm />
    </>
)

export default Books;