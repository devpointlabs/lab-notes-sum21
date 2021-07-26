import CardForm from './CardForm';
import CardShow from './CardShow';

export const Cards = ({ ColId }) => (
  <>
    <CardShow ColId={ColId} />
    <CardForm ColId={ColId} />
  </>
)

export default Cards;