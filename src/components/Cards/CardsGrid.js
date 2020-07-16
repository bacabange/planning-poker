import React from 'react'
import styled from 'styled-components';
import CardsContext from './context';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: .8rem;
  row-gap: .8rem;
  justify-items: stretch;
  align-items: stretch;
`;

const CardsGrid = (props) => {
  return (
    <CardsContext.Provider value={props}>
      <Container>
        {props.children}
      </Container>
    </CardsContext.Provider>
  )
}

export default CardsGrid
