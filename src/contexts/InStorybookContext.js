import React, { useContext } from "react";
import { createContext } from "react";

const InStorybookContext = createContext(false);

export const InStorybookProvider = ({ children }) => {
  return (
    <InStorybookContext.Provider value={true}>
      {children}
    </InStorybookContext.Provider>
  );
};

export const useInStorybook = () => useContext(InStorybookContext);
