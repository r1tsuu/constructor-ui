import React, { useState, createContext, useContext } from "react";

const GlobalFormsContext = createContext({
  handleOpenForm: (index) => {},
  handleCloseForm: () => {},
  openedFormIndex: null,
});

export const GlobalFormsProvider = ({ children }) => {
  const [openedFormIndex, setOpenedFormIndex] = useState(null);

  const handleOpenForm = (index) => setOpenedFormIndex(index);

  const handleCloseForm = () => setOpenedFormIndex(null);

  return (
    <GlobalFormsContext.Provider
      value={{ handleOpenForm, openedFormIndex, handleCloseForm }}
    >
      {children}
    </GlobalFormsContext.Provider>
  );
};

export const useGlobalForms = () => useContext(GlobalFormsContext);
