import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

const Header = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <NavBar onEnter={() => setModal(true)} />

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Enter to Session</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="sessionId">Session ID</Label>
              <Input type="text" name="sessionId" id="sessionId" placeholder="821j27" />
            </FormGroup>

            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Charles Music" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Enter</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Header;
