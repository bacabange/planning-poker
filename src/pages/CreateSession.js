import React from 'react';
import Panel from '../components/Panel';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateSession = () => {
  return (
    <div>
      <Panel>
        <Panel.Header>
          <h6>Create new session</h6>
        </Panel.Header>

        <Panel.Body>
          <Form>
            <Row>
              <Col md={6}>

                <FormGroup>
                  <Label for="sessionTitle">Session Title</Label>
                  <Input type="text" name="sessionTitle" id="sessionTitle" placeholder="Enter your session title Ex: “Product system sprint”" />
                </FormGroup>

                <FormGroup>
                  <Label for="sessionDescription">Session Description</Label>
                  <Input type="text" name="sessionDescription" id="sessionDescription" placeholder="Enter your session description" />
                </FormGroup>

                <FormGroup>
                  <Label for="name">Your Display Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Enter your display name" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="stories">Stories</Label>
                  <Input type="textarea" name="stories" id="stories" rows={4} placeholder="One per line" />
                </FormGroup>

                <FormGroup>
                  <Label for="cards">Choose the set of estimate cards you want to use</Label>
                  <Input type="select" name="cards" id="cards">
                    <option>Scrum</option>
                    <option>Sequencial</option>
                    <option>T-shirt</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Panel.Body>

        <Panel.Footer>
          <div className="d-flex justify-content-end">
            <Button color="secondary">Create Session</Button>
          </div>
        </Panel.Footer>
      </Panel>
    </div>
  )
}

export default CreateSession
