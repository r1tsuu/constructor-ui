import React, { useContext } from "react";
import { createContext } from "react";

const EnvironmentContext = createContext(null);

export const EnvironmentProvider = ({ SITE_URL, children }) => {
  return (
    <EnvironmentContext.Provider value={{ SITE_URL }}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnvironment = () => {
  const context = useContext(EnvironmentContext);

  if (!context)
    throw Error("Use useEnvironment hook outside Environment Context.Provider");

  const { SITE_URL } = { context };

  const API_URL = `${SITE_URL}/api`;

  const API_FRONTEND = `${API_URL}/frontend`;

  return {
    SITE_URL,
    API_URL,
    API_FRONTEND,
  };
};
