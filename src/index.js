import "./styles/index.scss";

export { UiKitContainer } from "./containers/UiKitContainer/UiKitContainer";
export { GlobalComponentsContainer } from "./containers/GlobalComponentsContainer";
export { COMPONENT_KEYS } from "./utils/constants";
export { parseArgs, setting, section } from "./utils";
export { EnvironmentProvider } from "./contexts/EnvironmentContext";
export {
  GlobalFormsProvider,
  useGlobalForms,
} from "./contexts/GlobalFormsContext";
export { LanguageProvider } from "./contexts/LanguageContext";
export { SectionProvider } from "./contexts/SectionContext";

// import { run } from "./test";
// run();

export * from "./components/sections";
export * from "./components/layout";
export * from "./components/UiKitSettings";
