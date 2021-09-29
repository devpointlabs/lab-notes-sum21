import { useEffect, useState } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link } from 'react-router-dom';
import { Container, DropdownButton, Dropdown, Image, Card } from 'react-bootstrap';
import ColForm from './ColForm';
import { ColColor, OptButton, ColWrap, CardPageGrid } from '../styledComponents/ColStyles';
import Cards from '../cards/Cards';

const ColList = ({
  dayId,
  cols,
  getAllCols,
  deleteCol,
  history,
}) => {
  const [ setShow ] = useState(false);

  const handleShow = () => setShow(true);
  
  useEffect( () => {
    getAllCols(dayId)
  }, [])
  
    return(
      <>
      <Container fluid="md" >
    
      <CardPageGrid>
        { cols.map( (c) =>
        c >= 0 ? "No Columns => Create One" 
        :
              <ColWrap className="row-max" key={c.id}>
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
                  <h7>{c.title}</h7>
                  <Card className="item">
                    <ColColor>
                      <Card.Body>
                        <Cards ColId={c.id}/>
                      </Card.Body>
                    </ColColor>
                </Card>
              </ColWrap>
              )}
              <ColForm dayId={dayId}/>          
          </CardPageGrid>
        </Container>
    </>
  );
};

const ConnectedColList = (props) => (
  <ColConsumer>{(value) => <ColList {...props} {...value} />}</ColConsumer>
);

export default ConnectedColList;

// {/* <Link to={{
//   pathname: `/col/${c.id}`
// }}> */}
// {/* </Link> */}
