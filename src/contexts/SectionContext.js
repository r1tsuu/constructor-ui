import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext({
  globalFormIndex: null,
  id: null,
  formQueryParams: {},
  setFormQueryParams: () => {},
  css: null,
  cssModal: null,
});

export const SectionProvider = ({
  children,
  globalFormIndex,
  id,
  css,
  cssModal,
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
        cssModal,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
