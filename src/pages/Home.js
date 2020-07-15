import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import HeroImage from '../assets/images/Hero-image.png';
import styled from 'styled-components';
import IconList from '../components/IconList';

const Title = styled.h1`
  margin-top: 1rem;
`;

const Home = () => {
  return (
    <>
      <Row xs="1" md="2">
        <Col>
          <Title>Planning Poker</Title>
          <p>Tire su Plaining Poker brevelan con este vuelto</p>

          <IconList />

          <Button color="secondary">Create Session</Button>
        </Col>
        <Col className="d-none d-lg-block d-md-block">
          <img src={HeroImage} className="img-fluid" alt="Responsive" />
        </Col>
      </Row>
    </>
  )
}

export default Home
