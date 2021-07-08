import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { BookConsumer } from '../../providers/BookProvider';
import BookColorOpts, { MyPurpleButton, MyGreenButton } from './BookColorOpts.js';





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
                    placeholder="Build an app" 
                    type="text" 
                    name="title"
                    value={book.title}
                    onChange={(e) => setBook({...book, title: e.target.value})}
                />   
            </Form.Group>

            <Form.Group controlId="descript">
                <Form.Label>Goal</Form.Label>
                <Form.Control 
                    placeholder="I want to build a native app in 20 weeks." 
                    type="text" 
                    name="descript"
                    value={book.descript}
                    onChange={(e) => setBook({...book, descript: e.target.value})}
                />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="start_date">
                <Form.Label>Start Day</Form.Label>
                <Form.Control 
                    placeholder="mm/dd/yyyy"
                    type="date" 
                    name="title"
                    value={book.start_date}
                    onChange={(e) => setBook({...book, start_date: e.target.value})}
                />             
                </Form.Group>

                <Form.Group as={Col} controlId="end_date">
                <Form.Label>End Day</Form.Label>
                <Form.Control 
                    placeholder="mm/dd/yyyy"
                    type="date" 
                    name="title"
                    value={book.end_date}
                    onChange={(e) => setBook({...book, end_date: e.target.value})}
                />             
                </Form.Group>

            </Form.Row>  
{/* 
                // <Form.Group>
                //     <Form.Label>Colors</Form.Label>

                //     <MyPurpleButton></MyPurpleButton>
                //     <MyGreenButton></MyGreenButton>
                        
                //             {/* <Button variant="purple-btn"></Button>{' '}
                //             <Button variant="green-btn"></Button>{' '}
                //             <Button variant="orange-btn"></Button>{' '}
                //             <Button variant="aqua-btn"></Button>{' '}
                //             <Button variant="bluepurple-btn"></Button>{' '}    */}
                        
                {/* // </Form.Group> */} 




            <Button variant="primary" type="submit">
                Done
            </Button>
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





