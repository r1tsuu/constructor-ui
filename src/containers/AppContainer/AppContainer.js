import React from "react";
import { EnvironmentProvider } from "../../contexts/EnvironmentContext";
import { GlobalFormsProvider } from "../../contexts/GlobalFormsContext";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { parseArgs } from "../../utils";
import { UiKitContainer } from "../UiKitContainer";

export const AppContainer = ({
  SITE_URL,
  translationsOvveride,
  currentLanguage,
  globalSettings,
  children,
}) => {
  return (
    <EnvironmentProvider SITE_URL={SITE_URL}>
      <GlobalFormsProvider>
        <LanguageProvider
          currentLanguage={currentLanguage}
          translationsOvverride={translationsOvveride}
        >
          <UiKitContainer
            buttons={parseArgs(globalSettings.buttons)}
            typographies={parseArgs(globalSettings.typographies)}
            customColors={globalSettings.customColors}
            arrowsCube={parseArgs(globalSettings.arrows).cube}
            arrowLong={parseArgs(globalSettings.arrows).long}
          >
            {children}
          </UiKitContainer>
        </LanguageProvider>
      </GlobalFormsProvider>
    </EnvironmentProvider>
  );
};
