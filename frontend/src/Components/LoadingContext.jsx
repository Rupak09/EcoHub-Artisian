/* eslint-disable react-refresh/only-export-components */
// LoadingContext.js

import { createContext, useState, useContext } from 'react';

// Create a Context for the loading state
const LoadingContext = createContext();

// Hook for child components to get the loading object and re-render when it changes
export const useLoading = () => useContext(LoadingContext);

// Provider in your app that makes the loading object available to any child component that calls useLoading().
// eslint-disable-next-line react/prop-types
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
