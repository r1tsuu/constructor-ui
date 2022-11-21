import React from "react";
import { COMPONENT_KEYS } from "../../utils/constants";
import { components } from "../../components";

export const GlobalComponentsContainer = ({
  globalComponents,
  onLanguageChange,
  menuList,
  languages,
  currentLanguage,
  children,
}) => {
  const header = globalComponents.find(
    ({ component }) => component === COMPONENT_KEYS.HEADER
  );
  const footer = globalComponents.find(
    ({ component }) => component === COMPONENT_KEYS.FOOTER
  );

  const { Component: Header } = components[COMPONENT_KEYS.HEADER];
  const { Component: Footer } = components[COMPONENT_KEYS.FOOTER];

  return (
    <>
      {header && (
        <Header
          {...header.content}
          menuList={menuList}
          languages={languages}
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      )}
      {children}
      {footer && <Footer {...footer.content} />}
    </>
  );
};
