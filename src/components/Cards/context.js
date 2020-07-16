import React from 'react'

const CardContext = React.createContext();

export const useCardContext = () => {
  const context = React.useContext(CardContext);
  if (!context) {
    throw new Error(
      `Card compound components cannot be rendered outside the Card component`
    );
  }
  return context;
};

export default CardContext;