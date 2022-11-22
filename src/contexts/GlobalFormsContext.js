import React, { useState, createContext, useContext } from "react";

const GlobalFormsContext = createContext({
  handleOpenForm: ({ index, ...queryParams }) => {},
  handleCloseForm: () => {},
  openedForm: {
    index: null,
    queryParams: {},
  },
});

export const GlobalFormsProvider = ({ children }) => {
  const [openedForm, setOpenedForm] = useState({
    index: null,
    queryParams: {},
  });

  const handleOpenForm = ({ index, ...queryParams }) =>
    setOpenedForm({ index, queryParams });

  const handleCloseForm = () =>
    setOpenedForm({
      openedForm: index,
      queryParams: {},
    });

  return (
    <GlobalFormsContext.Provider
      value={{ handleOpenForm, openedForm, handleCloseForm }}
    >
      {children}
    </GlobalFormsContext.Provider>
  );
};

export const useGlobalForms = () => useContext(GlobalFormsContext);
