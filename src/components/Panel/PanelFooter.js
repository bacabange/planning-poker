import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  padding: 1rem;
  border-bottom-left-radius: .8rem;
  border-bottom-right-radius: .8rem;

  flex-shrink: 0;
`;

const Footer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Footer
