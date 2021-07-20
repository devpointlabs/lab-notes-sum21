import { useEffect } from 'react';
import { ColConsumer } from '../../providers/ColProvider';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import styled from '../styledComponents/ColListPage';

const ColList = ({ dayId, cols, getAllCols }) => {
  useEffect( () => {
    getAllCols(dayId)
  }, [])

  return(
    <>
      { cols.map( (c) =>
      c >= 0 ? "No Columns => Create One" 
      :
      <styled>
        <Container fluid="md">
          <Row>
              <Col>
                <Link to={{
                  pathname: `/col/${c.id}`
                }}>
                  <h4>
                    {c.title}
                  </h4>
                </Link>
              </Col>
          </Row>
        </Container>
      </styled>
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