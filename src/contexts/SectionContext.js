import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext({
  globalFormIndex: null,
  id: null,
  formQueryParams: {},
  setFormQueryParams: () => {},
  css: null,
  componentName: null,
});

export const SectionProvider = ({
  children,
  globalFormIndex,
  id,
  css,
  componentName,
}) => {
  const [formQueryParams, setFormQueryParams] = useState({});
  return (
    <SectionContext.Provider
      value={{
        globalFormIndex,
        id,
        formQueryParams,
        setFormQueryParams,
        css,
        componentName,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
