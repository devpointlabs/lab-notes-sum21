import { Card, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import { CardConsumer } from "../../providers/CardProvider";

const CardShow = ({
  ColId,
  cards,
  getAllCards,
  location,
  match,
  deleteCard,
  history,
}) => {
  const [card, setCard] = useState({});
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  useEffect(() => {
    getAllCards(ColId);
  }, []);
  console.log('cards', cards)

  return (
    <>
      {/* {cards?.[ColId]?.map((card) => { */}
      {(cards?.length &&
        cards?.map((card) => {
          return (
            <Card style={{ width: "18rem" }} key={card.id}>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.notes}</Card.Text>
                <Card.Footer>
                  <Moment format="hh A">{card.end_time}</Moment>
                </Card.Footer>
              </Card.Body>
              <Button
                variant="danger"
                onClick={() => deleteCard(card.id, history, ColId)}
              >
                {" "}
                Delete
              </Button>
            </Card>
          );
        })) ||
        "No Cards => Create One"}
    </>
  );
};
const ConnectedCardShow = (props) => (
  <CardConsumer>{(value) => <CardShow {...props} {...value} />}</CardConsumer>
);
export default ConnectedCardShow;
