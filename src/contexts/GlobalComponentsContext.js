import React, { useState, createContext, useContext } from "react";

const GlobalComponentsContext = createContext({
  handleOpenForm: (index) => {},
  handleCloseForm: () => {},
  openedFormIndex: null,
});

export const GlobalComponentsProvider = ({ globalConstructor, children }) => {
  const [openedFormIndex, setOpenedFormIndex] = useState(null);

  const handleOpenForm = (index) => setOpenedFormIndex(index);

  const handleCloseForm = () => setOpenedFormIndex(null);

  return (
    <GlobalComponentsContext.Provider
      value={{ handleOpenForm, openedFormIndex, handleCloseForm }}
    >
      {children}
    </GlobalComponentsContext.Provider>
  );
};

export const useGlobalComponents = () => useContext(GlobalComponentsContext);
