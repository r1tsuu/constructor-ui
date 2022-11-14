import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext({
  globalFormIndex: null,
  id: null,
  formQueryParams: {},
  setFormQueryParams: () => {},
});

export const SectionProvider = ({ children, globalFormIndex, id }) => {
  const [formQueryParams, setFormQueryParams] = useState({});
  return (
    <SectionContext.Provider
      value={{ globalFormIndex, id, formQueryParams, setFormQueryParams }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
