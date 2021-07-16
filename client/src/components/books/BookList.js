import { useEffect, useContext } from "react";
import { BookContext } from "../../providers/BookProvider";
import { Link } from "react-router-dom";
import { Card, Button, CardGroup, ProgressBar } from "react-bootstrap";
import { ColorStyles, ColorBoxes, SettingsCardContainer } from "../styledComponents/sharedStyles";


const BookList = ({}) => {
  const bookContext = useContext(BookContext);
    

  useEffect(() => {
    bookContext?.getAllBooks();
  }, []);

  return (
    <CardGroup>
      <SettingsCardContainer>
        {bookContext?.books?.length && bookContext?.books?.map((b,i) => {
        // { bookContext?.books?.map?.((b) => {
          console.log(b);
          // b <= 0 ? "No history":
          return (
            
            
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
                <Card.Footer><ProgressBar now={ (i + 1 *20) }/></Card.Footer>
              </Card>
              </ColorBoxes>
            </Link>
           
           
          );
        })}

      </SettingsCardContainer>
    </CardGroup>
  );
};

export default BookList;
