import React from 'react'

const PanelContext = React.createContext();

export const usePanelContext = () => {
  const context = React.useContext(PanelContext);
  if (!context) {
    throw new Error(
      `Panel compound components cannot be rendered outside the Panel component`
    );
  }
  return context;
};

export default PanelContext;