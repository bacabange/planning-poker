import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import Panel from '../components/Panel';
import CardsGrid from '../components/Cards/CardsGrid';
import Card from '../components/Cards/Card';

const Board = () => {
  return (
    <Row>
      <Col md={3}>
        <Panel>
          <Panel.Header withShadow>
            <h6>Stories</h6>
          </Panel.Header>

          <Panel.Body>
            <p>Stories List</p>
          </Panel.Body>

          <Panel.Footer>
            <div className="d-flex justify-content-end">
              <Button color="link" size="sm">Add</Button>
            </div>
          </Panel.Footer>
        </Panel>
      </Col>

      <Col md={6}>
        <Panel>
          <Panel.Header withShadow>
            <div className="d-flex justify-content-between">
              <h6>Session_name</h6>
              <span className="text-secondary">12:00:22</span>
            </div>
          </Panel.Header>

          <Panel.Body>
            <CardsGrid onClick={(e) => console.log('putos', e)}>
              {
                [1,2,3,4,5,6,7,8,9,10].map(item => (<Card key={`it${item}`} />))
              }
            </CardsGrid>
          </Panel.Body>

          <Panel.Footer>
            <div className="d-flex justify-content-end">
              <Button className="pl-2 pr-2" color="link" size="sm">Clear Votes</Button>
              <Button className="pl-2 pr-2 ml-1" color="primary" size="sm">Finalize</Button>
            </div>
          </Panel.Footer>
        </Panel>
      </Col>
      <Col md={3}>
      <Panel>
          <Panel.Header withShadow>
            <h6>Players</h6>
          </Panel.Header>

          <Panel.Body>
            <p>Users</p>
          </Panel.Body>
        </Panel>
      </Col>
    </Row>
  )
}

export default Board;
