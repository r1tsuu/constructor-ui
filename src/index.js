import "./styles/index.scss";
import "./styles/swiper.css";
export { UiKitContainer } from "./containers/UiKitContainer/UiKitContainer";
export { GlobalComponentsContainer } from "./containers/GlobalComponentsContainer";
export { COMPONENT_KEYS } from "./utils/constants";
export { components } from "./components";
export { parseArgs } from "./utils";
export { EnvironmentProvider } from "./contexts/EnvironmentContext";
export {
  GlobalFormsProvider,
  useGlobalForms,
} from "./contexts/GlobalFormsContext";
export { LanguageProvider } from "./contexts/LanguageContext";
export { SectionProvider } from "./contexts/SectionContext";

// import { run } from "./test";
// run();
