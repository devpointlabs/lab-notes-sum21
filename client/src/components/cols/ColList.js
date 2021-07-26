import { useEffect, useState } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link } from 'react-router-dom';
import { Container, Row, Col, DropdownButton, Dropdown, Image, Card } from 'react-bootstrap';
import CardForm from '../cards/CardForm';
import CardShow from '../cards/CardShow';
import ColForm from './ColForm';
import { ColColor, OptButton, ColWrap } from '../styledComponents/ColStyles';
import { Cards } from '../cards/Cards';

const ColList = ({ dayId, cols, getAllCols, deleteCol, updateCol, match, history, id, handleEditClose, location }) => {
  const [col, setCols] = useState({title: "",})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect( () => {
    getAllCols(dayId)
  }, [])
  
    return(
      <>
      <Container fluid="md" >
      <Row>
        { cols.map( (c) =>
        c >= 0 ? "No Columns => Create One" 
        :
              <Col key={c.id}>
                  <OptButton color="white">
                  <DropdownButton
                      variant="light" 
                      align="end"
                      title={
                        <Image className="options" 
                          src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1626999816/Options_tvohvn.png"
                          width="30"
                          height="12" 
                          alt="options button"
                        />
                        }
                        id="dropdown-basic-button">
                    <Dropdown.Item eventKey={1}>
                      <Link to ={{pathname: `/days/${dayId}/cols/${c.id}`, state:{c}}} onClick={handleShow}>Edit</Link>
                    </Dropdown.Item>
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey={2}>
                      <Link onClick={() => deleteCol(dayId, c.id, history)}>Delete</Link>
                    </Dropdown.Item>
                  </DropdownButton>
                  </OptButton>
                  <h5>{c.title}</h5>
                <ColWrap>
                  <Card>
                    <ColColor>
                      <Card.Body><Cards ColId={c.id}/></Card.Body>
                      <CardForm/>
                    </ColColor>
                </Card>
                </ColWrap>
              </Col>
              )}
            <ColForm dayId={dayId} />
          </Row>
        </Container>
    </>
  )
};

const ConnectedColList = (props) => (
  <ColConsumer>
    { value => <ColList {...props} {...value} /> }
  </ColConsumer>
)

export default ConnectedColList;

// {/* <Link to={{
//   pathname: `/col/${c.id}`
// }}> */}
// {/* </Link> */}
