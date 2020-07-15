import React from 'react'
import { AiFillStar, AiFillRocket, AiOutlineBarChart } from "react-icons/ai";
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const Icon = ({ icon, ...props}) => {
  const IconContainer = styled(icon)`
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  `;

  return <IconContainer />
};

const IconList = () => {
  return (
    <List>
      <ListItem><Icon icon={AiFillStar} /> Estime como un Dios</ListItem>
      <ListItem><Icon icon={AiFillRocket} /> Completamente al gratin</ListItem>
      <ListItem><Icon icon={AiOutlineBarChart} /> Sea eficiente manito</ListItem>
    </List>
  )
}

export default IconList
