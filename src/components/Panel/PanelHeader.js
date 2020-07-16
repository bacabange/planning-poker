import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  padding: 1rem;
  border-top-left-radius: .8rem;
  flex-shrink: 0;
  border-top-right-radius: .8rem;

  ${({ withShadow }) => withShadow && `
    box-shadow:  0px 15px 15px -20px rgba(44,52,78,0.3);
  `}

  & h6 {
    margin: 0;
  }
`;

const PanelHeader = ({ children, withShadow }) => {
  return (
    <Container withShadow>
      {children}
    </Container>
  )
}

export default PanelHeader
