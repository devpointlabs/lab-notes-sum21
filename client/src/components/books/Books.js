import { Container, Modal, Card } from "react-bootstrap";
import BookList from "./BookList";
import BookForm from "./BookForm";
import {
  QuoteContainer,
  CardPageGrid,
  ListContainer,
  QuoteCard,
} from "../../components/styledComponents/sharedStyles";

const quotes = [


  {
    q: "If the path before you is clear, you’re probably on someone else’s.",
    auth: "Carl Jung",
  },
  {
    q: "If I knew for a certainty that a man was coming to my house with the conscious design of doing me good, I should run for my life.",
    auth: "Will Rogers",
  },
  {
    q: "The mass of men lead lives of quiet desperation.",
    auth: "Thoreau",
  },
  {
    q: "Nothing is more powerful than an idea whose time has come.",
    auth: "Victor Hugo",
  },
  {
    q: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    auth: "Marie Curie",
  },
  {
    q: "You have forgotten who you are and so have forgotten me. Look inside yourself... You are more than what you have become.",
    auth: "Mufasa",
    },

  {
    q: "What you do speaks so loud that I cannot hear what you say.", auth: "Emerson",
  },
];

const Books = () => {
  const updatedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <CardPageGrid>
      <ListContainer>
        <p>My Books</p>

        <BookList />
      </ListContainer>
<QuoteContainer>
      <QuoteCard>
        <Card.Body>
          <Card.Title>{updatedQuote.q}</Card.Title>
          <Card.Text>{updatedQuote.auth}</Card.Text>
        </Card.Body>
      </QuoteCard>
      </QuoteContainer>
    </CardPageGrid>
  );
};

export default Books;
