import "./styles/index.scss";
export { UiKitContainer } from "./containers/UiKitContainer/UiKitContainer";
export { COMPONENT_KEYS } from "./utils/constants";
export { components } from "./components";
export { parseArgs } from "./utils";
export { EnvironmentProvider } from "./contexts/EnvironmentContext";

// if (process.env.NODE_ENV === "development") {
//   import("./test").then(({ run }) => run());
// }
