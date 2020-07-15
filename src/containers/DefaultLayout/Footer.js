import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 16px 0;
  font-size: 12px;
  color: ${props => props.theme.colors.gray1};
`;

const Footer = () => {
  return (
    <Container>
      By Meca
    </Container>
  )
}

export default Footer;
