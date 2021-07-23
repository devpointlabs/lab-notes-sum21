import { useState, useEffect } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { BookConsumer } from '../../providers/BookProvider';
import { ColorStyles } from '../styledComponents/sharedStyles';
import { withRouter } from 'react-router-dom';


const BookEdit = ({ addBook, id, title, descript, start_date, end_date, color, updateBook, handleEditClose, history }) => {
    // do we set up these date values to empty strings or to null?
    const [book, setBook] = useState({ title: "", descript: "", color: "" })

 useEffect( ()  => {
     if (id) {
         setBook({ title, descript, color })
     }
 }, [] )
    
 const handleSubmit = (e) => {
    e.preventDefault()
    setBook({...book})
    if (id) {
      updateBook(id, book, history)
      handleEditClose()
    } else {
      addBook(book, history)
    }
    setBook({ title: "", descript: "", color: "" })
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

            {/* <Form.Row>
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

            </Form.Row>   */}
            
            <Form.Row>
                
                    <Form.Label>Color</Form.Label>              
                             
                    
                        <ColorStyles
                            bg="#9848FF"
                            onClick={() => setBook({...book, color: "linear-gradient(to right, rgba(152, 72, 150, 1), rgba(152, 72, 255, .73))"})}
                        ></ColorStyles>
                        <ColorStyles 
                            bg="#407D60" 
                            onClick={() => setBook({...book, color: "linear-gradient(to right, rgba(64, 125, 96, 1), rgba(64, 125, 96, 0.75))"})}
                        ></ColorStyles>
                        <ColorStyles
                            bg="#D66E33" 
                            onClick={() => setBook({...book, color: "linear-gradient(to right, rgba(215, 110, 51, 0.9), rgba(215, 110, 51, 0.63))"})}
                        ></ColorStyles>
                        <ColorStyles
                            bg="#44BCE0" 
                            onClick={() => setBook({...book, color: "linear-gradient(to right, rgba(68, 188, 224, 0.9), rgba(68, 188, 224, 0.55))"})}
                        ></ColorStyles>
                        <ColorStyles 
                            bg="#42487E" 
                            onClick={() => setBook({...book, color: "linear-gradient(to right, rgba(66, 72, 127, 1), rgba(66, 72, 127, 0.75))"})}
                        ></ColorStyles>
                    
            </Form.Row>
              
            <Button variant="primary" type="submit">
                Done
            </Button>
        </Form>
    )
}
// , linear-gradient(to right, rgba(152, 72, 255, 100),rgba(152, 72, 255, 73)
const ConnectedBookEdit = (props) => (
    <BookConsumer>
        { value => (
            <BookEdit {...props} {...value} />
        )}
    </BookConsumer>
)

export default withRouter(ConnectedBookEdit);

//     { key: "p", text: "purple", value: "#9848FF", },
//     { key: "g", text: "green", value: "#407D60", },
//     { key: "o", text: "orange", value: "#D66E33", },
//     { key: "a", text: "aqua", value: "#44BCE0", },
//     { key: "n", text: "bluepurple", value: "#42487E"
