import { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BookConsumer } from '../../providers/BookProvider';
import { withRouter } from 'react-router-dom';

const BookForm = ({ addBook, id, title, descript, start_date, end_date, updateBook, handleEditClose, history }) => {
  const [book, setBook] = useState({ title:"", descript: "", start_date: "", end_date: "" })
  useEffect( () => {
    if (id) {
      setBook({ title, descript, start_date, end_date })
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setBook({...book})
    if (id) {
      updateBook(id, book, history)
      handleEditClose()
    } else {
      addBook(book)
    }
    setBook({ title:"", descript: "", start_date: "", end_date: ""})
  }
  
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicBookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Title of Goal" 
            name="title"
            value={book.title}
            onChange={(e) => setBook({...book, title: e.target.value})}
          />
        </Form.Group>
      <Form.Group controlId="formBasicBookDescript">
          <Form.Label>Book Description</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Description of Goal" 
            name="descript"
            value={book.descript}
            onChange={(e) => setBook({...book, descript: e.target.value})}
          />
        </Form.Group>
      <Form.Group controlId="formBasicBookDate">
          <Form.Label>Book Start Date</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="mm/dd/yyyy" 
            name="start_date"
            value={book.start_date}
            onChange={(e) => setBook({...book, start_date: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicBookEndDate">
          <Form.Label>Book End Date</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="mm/dd/yyyy" 
            name="end_date"
            value={book.end_date}
            onChange={(e) => setBook({...book, end_date: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}

const ConnectedBookForm = (props) => (
  <BookConsumer>
    { value => <BookForm {...props} {...value} /> }
  </BookConsumer>
)

export default withRouter(ConnectedBookForm);
