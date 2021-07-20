import { useEffect } from "react";
import { BookConsumer } from "../../providers/BookProvider";
import { Link } from "react-router-dom";
import { Card, Button, CardGroup, ProgressBar } from "react-bootstrap";
import { ColorStyles, ColorBoxes, SettingsCardContainer } from "../styledComponents/sharedStyles";


const BookList = ({books, getAllBooks}) => {
  // const bookContext = useContext(BookContext);
    

  useEffect(() => {
    getAllBooks()
    // bookContext?.getAllBooks();
  }, []);

  return (
    <>
    <CardGroup>
      <SettingsCardContainer>
      
        {/* {bookContext?.books?.length && bookContext?.books?.map((b,i) => {
        // { bookContext?.books?.map?.((b) => {
          console.log(b);
          // b <= 0 ? "No history": */}
  
            { books.map( b => 
            
            
            <Link 
              to={{
                pathname: `/books/${b.id}`,
                state: { ...b },
              }}
            >
              <ColorBoxes bg={b.color}>
              <Card style={{background: "transparent", border: "none", textAlign: "left", marginRight: "10px"}}>
                <Card.Body>
                  <Card.Title style= {{whiteSpace: "nowrap"}} >{b.title}</Card.Title>
                  <Card.Text>{b.descript}</Card.Text>
                </Card.Body>
                <Card.Footer><ProgressBar now={ 60 }/></Card.Footer>
              </Card>
              </ColorBoxes>
            </Link>
)};
            

      </SettingsCardContainer>
    </CardGroup>
    </>
  );
};
const ConnectedBookList = (props) => (
  <BookConsumer>
    { value => 
      <BookList {...props} {...value} />
    }
  </BookConsumer>
)
export default ConnectedBookList;

// export default BookList;

// import { useEffect } from 'react';
// import { BookConsumer } from '../../providers/BookProvider';
// import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';


// const BookList= ({ books, getAllBooks }) => {
//   useEffect( () => {
//     getAllBooks()
//   }, [])
//   return (
//     <>
//     <h1>My Cards</h1>
//     <Card>
//         { books.map( b => 
//           <Card.Link to={{
//             pathname: `./books/${b.id}`,
//             state: { ...b }
//           }}>
//             <Card.Title>
//               Book Title: {b.title} 
//               </Card.Title>
//               <Card.Text>

//               Description: {b.descript} 
//               </Card.Text>
            
//           </Card.Link>
//         )}
//       </Card>
    
//     </>
//   )
// }
// const ConnectedBookList = (props) => (
//   <BookConsumer>
//     { value => 
//       <BookList {...props} {...value} />
//     }
//   </BookConsumer>
// )
// export default ConnectedBookList;
