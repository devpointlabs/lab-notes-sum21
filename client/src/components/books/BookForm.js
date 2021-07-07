import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BookConsumer } from '../../providers/BookProvider';
import { Colors } from './BookColorOpts';

const BookForm = ({ addBook }) => {
    // do we set up these date values to empty strings or to null?
    const [book, setBook] = useState({ title: "", descript: "", start_date: null, end_date: null, color: "" })

    
    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(book)
        setBook({ title: "", descript: "", start_date: null, end_date: null, color: "" })
    }
    return(
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
            <Form.Label>Name</Form.Label>
            <Form.Control 
                placeholder="Example: Build an App" 
                />
        </Form.Group>

        <Form.Group controlId="descript">
            <Form.Label>Goal</Form.Label>
            <Form.Control placeholder="Example: I want to build a native app in 20 weeks." />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="start_date">
            <Form.Label>Start Day</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="end_date">
            <Form.Label>End Day</Form.Label>
            <Form.Control />
            </Form.Group>

         </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
















        {/* <FormGroup controlId="date" bsSize="large">
        <ControlLabel>Birthday</ControlLabel>
        <FormControl
        type="date"
          /> */}

    <Form.Label>Color</Form.Label>
    <Form.Control as="select" htmlSize={3} custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>


        </Form>
    )
}

const ConnectedBookForm = (props) => (
    <BookConsumer>
        { value => (
            <BookForm {...props} {...value} />
        )}
    </BookConsumer>
)

export default ConnectedBookForm;
