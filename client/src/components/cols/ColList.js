import { useEffect } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';

const ColList = ({ dayId, cols, getAllCols }) => {
  useEffect( () => {
    getAllCols(dayId)
  }, [])

  return(
    <>
      { cols.map( (c) =>
      c >= 0 ? "No Columsn => Create One" 
      :
        <Container fluid="md">
          <Row>
            <Col>
              <h4>
                Goals
              </h4>
            </Col>
            <Col>
              <h4>
                In progress
              </h4>
            </Col>
            <Col>
              <h4>
                Done
              </h4>
            </Col>
            <Col>
              <h4>
                {c.title}
              </h4>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

const ConnectedColList = (props) => (
  <ColConsumer>
    { value => <ColList {...props} {...value} /> }
  </ColConsumer>
)

export default ConnectedColList;