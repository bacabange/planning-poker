import React from 'react'
import { useCardContext } from './context';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  border: 1px solid ${({theme}) => theme.colors.borderCardColor};
  border-radius: .4rem;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all .2s ease;
  ${({active, theme}) => active ?
    `background: ${theme.colors.primary};` : `background: white;`}

  &:hover {
    transform: scale(0.9);
  }

  & .value-top {
    text-align: left;
    ${({active, theme}) => active ?
      `color: white;` : `color: ${theme.colors.gray1};`}
  }

  & .body {
    text-align: center;
    position: relative;
    font-size: 22px;
    padding: 1rem 0;

    & .value-middle {
      border: 1px solid ${({theme}) => theme.colors.borderCardColor};
      ${({active, theme}) => active &&
        `
          background: white;
          color: ${theme.colors.primary};
        `}
      width: 50px;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: center;
      align-content: center;
      margin: auto;
      border-radius: 50%;
    }
  }

  & .value-bottom {
    text-align: right;
    ${({active, theme}) => active ?
      `color: white;` : `color: ${theme.colors.gray1};`}
  }
`;

const Card = (props) => {
  const { id, value, onClick } = useCardContext();
  return (
    <Container onClick={(e) => onClick(e)} {...props}>
      <span className="value-top">0</span>
      <div className="body">
        <span className="value-middle">0</span>
      </div>
      <span className="value-bottom">0</span>
    </Container>
  )
}

export default Card
