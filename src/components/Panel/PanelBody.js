import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 0 auto;
  padding: 1rem;
`;

const PanelBody = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PanelBody
