import React, { useContext } from "react";
import { createContext } from "react";

const DefaultLink = ({ children, ...elementProps }) => {
  return children;
};

const DefaultImage = (props) => <img {...props} />;

const EnvironmentContext = createContext({
  Link: DefaultLink,
  Image: DefaultImage,
});

export const EnvironmentProvider = ({
  SITE_URL,
  children,
  Link = DefaultLink,
  Image = DefaultImage,
}) => {
  return (
    <EnvironmentContext.Provider value={{ SITE_URL, Image, Link }}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnvironment = () => {
  const context = useContext(EnvironmentContext) ?? {
    SITE_URL: "http://example.com",
  };

  const { SITE_URL, Link, Image } = context;

  const API_URL = `${SITE_URL}/api`;

  const API_FRONTEND = `${API_URL}/frontend`;

  return {
    SITE_URL,
    API_URL,
    API_FRONTEND,
    Link,
    Image,
  };
};
