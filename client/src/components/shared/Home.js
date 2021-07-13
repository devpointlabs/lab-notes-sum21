import { Jumbotron } from 'react-bootstrap';
<<<<<<< HEAD
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
=======
import React from 'react';

const Home = () => {

  return(
    <>
      <Jumbotron>
        <p>Home Page</p>
      </Jumbotron>

    </>
  )

}
>>>>>>> 6ce745f (tweaked day provider afafter lecture.)

export default Home;