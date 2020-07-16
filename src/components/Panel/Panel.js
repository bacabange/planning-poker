import React from 'react';
import styled from 'styled-components';
import PanelContext from './context';

const Container = styled.div`
  background: white;
  border-radius: .8rem;
  border: 1px solid ${props => props.theme.colors.borderCardColor};
  box-shadow: 0px 2px 80px -40px rgba(44, 52, 78, 0.2);
  min-height: 480px;
  display: flex;
  flex-direction: column;
`;

const Panel = (props) => {
  return (
    <PanelContext.Provider value={props}>
      <Container>
        {props.children}
      </Container>
    </PanelContext.Provider>
  )
}

export default Panel
