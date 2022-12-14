import React from "react";
import { Arrows, arrowsArgs } from "./UiKitSettings/Arrows";

import {
  PhotoTextButton,
  photoTextButtonArgs,
  photoTextButtonContentResolver,
} from "./sections/PhotoTextButton";

import {
  Advantages,
  advantagesArgs,
  advantagesContentResolver,
} from "./sections/Advantages";

import {
  Characteristics,
  characteristicsArgs,
  characteristicsContentResolver,
} from "./sections/Characteristics";

import { Terms, termsArgs, termsContentResolver } from "./sections/Terms";

import {
  Technologies,
  technologiesArgs,
  technologiesContentResolver,
} from "./sections/Technologies";

import {
  Documentation,
  documentationArgs,
  documentationContentResolver,
} from "./sections/Documentation";

import {
  PhotoQuote,
  photoQuoteArgs,
  photoQuoteContentResolver,
} from "./sections/PhotoQuote";

import { Video, videoArgs, videoContentResolver } from "./sections/Video";

import {
  FormFeedbackModalContainer,
  FormFeedbackSectionContainer,
  formFeedbackModalArgs,
  formFeedbackSectionArgs,
  formFeedbackContentResolver,
} from "./sections/FormFeedback";

import {
  WelcomeSlider,
  welcomeSliderArgs,
  welcomeSliderContentResolver,
} from "./sections/WelcomeSlider";

import {
  AdvantagesSlider,
  advantagesSliderArgs,
  advantagesSliderContentResolver,
} from "./sections/AdvantagesSlider";

import {
  FormSubscribeContainer,
  formSubscribeArgs,
  formSubscribeContentResolver,
} from "./sections/FormSubcribe";

import {
  CatalogTranslationsContainer,
  catalogArgs,
  catalogContentResolver,
} from "./sections/Catalog";

import {
  Location,
  locationArgs,
  locationContentResolver,
} from "./sections/Location";

import { Header, headerArgs, headerContentResolver } from "./layout/Header";

import { Footer, footerArgs, footerContentResolver } from "./layout/Footer";

import {
  WelcomeSliderText,
  welcomeSliderTextArgs,
  welcomeSliderTextContentResolver,
} from "./sections/WelcomeSliderText";

import { useEnvironment } from "../contexts/EnvironmentContext";

import { COMPONENT_KEYS } from "../utils/constants";
import { parseArgs } from "../utils";
import { Buttons, buttonsArgs } from "./UiKitSettings/Buttons";
import {
  CustomThemeColors,
  customThemeColorsArgs,
} from "./UiKitSettings/CustomThemeColors";
import { Typographies, typographiesArgs } from "./UiKitSettings/Typographies";

const section = (
  Component,
  allArgs,
  contentResolver,
  hook = () => ({
    isRender: true,
  })
) => {
  const defaultArgs = allArgs.args;
  return {
    defaultSettings: defaultArgs,
    Component({ settings, ...content }) {
      const { isRender, ...hookData } = hook(content);
      const env = useEnvironment();

      if (isRender)
        return (
          <Component
            settings={parseArgs(settings ?? defaultArgs).settings}
            {...contentResolver({
              ...content,
              env,
              defaultContent: defaultArgs,
            })}
            {...hookData}
          />
        );
      return null;
    },
    type: "section",
  };
};

export const setting = (Component, allArgs, isSpreadSettings = false) => {
  const defaultSettings = allArgs.args;
  return {
    defaultSettings,
    initSettings: (setSettings) => setSettings(defaultSettings),
    Component: ({ settings, ...spreadSettings }) => (
      <Component
        {...parseArgs(settings ?? defaultSettings)}
        {...parseArgs(spreadSettings)}
      />
    ),
    type: "setting",
  };
};

export const components = {
  [COMPONENT_KEYS.ARROWS]: setting(Arrows, arrowsArgs),
  [COMPONENT_KEYS.BUTTONS]: setting(Buttons, buttonsArgs),
  [COMPONENT_KEYS.CUSTOM_THEME_COLORS]: setting(
    CustomThemeColors,
    customThemeColorsArgs
  ),
  [COMPONENT_KEYS.TYPOGRAPHIES]: setting(Typographies, typographiesArgs),
  [COMPONENT_KEYS.PHOTO_TEXT_BUTTON]: section(
    PhotoTextButton,
    photoTextButtonArgs,
    photoTextButtonContentResolver
  ),
  [COMPONENT_KEYS.ADVANTAGES]: section(
    Advantages,
    advantagesArgs,
    advantagesContentResolver
  ),
  [COMPONENT_KEYS.CHARACTERISTICS]: section(
    Characteristics,
    characteristicsArgs,
    characteristicsContentResolver
  ),
  [COMPONENT_KEYS.TERMS]: section(Terms, termsArgs, termsContentResolver),
  [COMPONENT_KEYS.TECHNOLOGIES]: section(
    Technologies,
    technologiesArgs,
    technologiesContentResolver
  ),
  [COMPONENT_KEYS.DOCUMENTATION]: section(
    Documentation,
    documentationArgs,
    documentationContentResolver
  ),
  [COMPONENT_KEYS.PHOTO_QUOTE]: section(
    PhotoQuote,
    photoQuoteArgs,
    photoQuoteContentResolver
  ),
  [COMPONENT_KEYS.VIDEO]: section(Video, videoArgs, videoContentResolver),
  [COMPONENT_KEYS.FORM_SECTION]: section(
    FormFeedbackSectionContainer,
    formFeedbackSectionArgs,
    formFeedbackContentResolver
  ),
  [COMPONENT_KEYS.FORM_MODAL]: section(
    FormFeedbackModalContainer,
    formFeedbackModalArgs,
    formFeedbackContentResolver
  ),
  [COMPONENT_KEYS.WELCOME_SLIDER]: section(
    WelcomeSlider,
    welcomeSliderArgs,
    welcomeSliderContentResolver
  ),
  [COMPONENT_KEYS.ADVANTAGES_SLIDER]: section(
    AdvantagesSlider,
    advantagesSliderArgs,
    advantagesSliderContentResolver
  ),
  [COMPONENT_KEYS.FORM_SUBSCRIBE]: section(
    FormSubscribeContainer,
    formSubscribeArgs,
    formSubscribeContentResolver
  ),
  [COMPONENT_KEYS.HEADER]: section(Header, headerArgs, headerContentResolver),
  [COMPONENT_KEYS.FOOTER]: section(Footer, footerArgs, footerContentResolver),
  [COMPONENT_KEYS.CATALOG]: section(
    CatalogTranslationsContainer,
    catalogArgs,
    catalogContentResolver
  ),
  [COMPONENT_KEYS.WELCOME_SLIDER_TEXT]: section(
    WelcomeSliderText,
    welcomeSliderTextArgs,
    welcomeSliderTextContentResolver
  ),
  [COMPONENT_KEYS.LOCATION]: section(
    Location,
    locationArgs,
    locationContentResolver
  ),
};
