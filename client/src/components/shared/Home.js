import { Jumbotron } from 'react-bootstrap';
import BookList from '../books/BookList';
import BookForm from '../books/BookForm';

const Home = () => (
  <>
    <Jumbotron>
      <h1>My Books:</h1>
    </Jumbotron>
    <BookForm/>
    <BookList/>
  </>
)

export default Home;