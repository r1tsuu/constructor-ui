import React, { createContext, useContext } from "react";

const SectionContext = createContext({
  globalFormIndex: null,
});

export const SectionProvider = ({ children, globalFormIndex }) => {
  return (
    <SectionContext.Provider value={{ globalFormIndex }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
