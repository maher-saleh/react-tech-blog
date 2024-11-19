import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Global provider component
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState([]);

  // Providing state and setter function via context
  return React.createElement(
    GlobalContext.Provider,
    { value: { globalVariable, setGlobalVariable } },
    children
  );
};

// Custom hook to use the Global Context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
