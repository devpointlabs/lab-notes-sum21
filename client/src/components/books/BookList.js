import { useEffect } from "react";
import { BookConsumer } from "../../providers/BookProvider";
import { Link } from "react-router-dom";
import moment from "moment";
import { Card, Button, CardGroup, ProgressBar } from "react-bootstrap";
import {
  ColorStyles,
  ColorBoxes,
  SettingsCardContainer,
} from "../styledComponents/sharedStyles";
import { end } from "@popperjs/core";

const BookList = ({ books, getAllBooks, end_date, start_date }) => {
  // const bookContext = useContext(BookContext);

  useEffect(() => {
    getAllBooks();

    // bookContext?.getAllBooks();
  }, []);

  const calculatePercent = (start_date, end_date) => {
    const goal_start_date = moment(`${start_date}`) 
    const goal_end_date = moment(`${end_date}`)
    const goal_total_days = moment.duration(goal_end_date.diff(goal_start_date)).asDays()

    const today = moment()
    const goal_days_so_far = moment.duration(today.diff(goal_start_date)).asDays()

    let percentDaysComplete = (goal_days_so_far / goal_total_days) * 100 ;
      if (percentDaysComplete >= 100.00 ) {
        percentDaysComplete = 100
      }


    return percentDaysComplete
    
  };
  return (
    <>
      <CardGroup>
        <SettingsCardContainer>
          {/* {bookContext?.books?.length && bookContext?.books?.map((b,i) => {
        // { bookContext?.books?.map?.((b) => {
          console.log(b);
          // b <= 0 ? "No history": */}
          {books.map((b) => (
            <Link
              to={{
                pathname: `/books/${b.id}`,
                state: { ...b },
              }}
            >
              <ColorBoxes bg={b.color}>
                <Card
                  style={{
                    background: "transparent",
                    border: "none",
                    textAlign: "left",
                    marginRight: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ whiteSpace: "nowrap" }}>
                      {b.title}
                    </Card.Title>
                    <Card.Text>{b.descript}</Card.Text>
                  </Card.Body>
                  <Card.Footer><ProgressBar now={ calculatePercent(b.start_date, b.end_date) } /></Card.Footer>
                </Card>
              </ColorBoxes>
            </Link>
          ))}
          ;
        </SettingsCardContainer>
      </CardGroup>
    </>
  );
};

const ConnectedBookList = (props) => (
  <BookConsumer>{(value) => <BookList {...props} {...value} />}</BookConsumer>
);
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
