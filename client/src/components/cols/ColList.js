import { useEffect, useState } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link } from 'react-router-dom';
import { Container, Row, Col, DropdownButton, Dropdown, Image, Card} from 'react-bootstrap';
import ColUpdate from './ColUpdate';
import { Card } from '../cards/Cards';

const ColList = ({ dayId, cols, getAllCols, deleteCol, updateCol, match, history, id, handleEditClose, location }) => {
  const [col, setCols] = useState({title: "",})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect( () => {
    getAllCols(1)
  }, [])
  
    return(
      <>
      <Container fluid="md" >
      <Row>
        { cols.map( (c) =>
        c >= 0 ? "No Columns => Create One" 
        :
              <Col key={c.id}>
                <Card>
                  <Card.Header as="h5">{c.title}
                  <DropdownButton 
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
                      <Link to ={{pathname: `days/${dayId}/cols/${c.id}`, state:{c}}} onClick={handleShow}>Edit</Link>
                    </Dropdown.Item>
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey={2}>
                      <Link onClick={() => deleteCol(dayId, c.id, history)}>Delete</Link>
                    </Dropdown.Item>
                  </DropdownButton>
                  </Card.Header>
                  <Card.Text>(input cards here)</Card.Text>
                  
                </Card>
              </Col>
              )}
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
