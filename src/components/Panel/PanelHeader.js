import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  padding: 1rem;
  border-top-left-radius: .8rem;
  flex-shrink: 0;
  border-top-right-radius: .8rem;

  & h6 {
    margin: 0;
  }
`;

const PanelHeader = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PanelHeader
