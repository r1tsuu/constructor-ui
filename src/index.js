import { COMPONENT_KEYS } from "./utils/constants";
import { components } from "./components";

export { components };
export { parseArgs } from "./utils";
export { COMPONENT_KEYS };

if (process.env.mode !== "production") {
  (async () => {
    const React = await import("react");
    const { render } = await import("react-dom");
    const fieldUtils = await import("./utils/fields-utils");
    const Utils = await import("./utils/test-utils");

    const { Component } = components[COMPONENT_KEYS.PHOTO_TEXT_BUTTON];

    render(
      <Utils.EnvMocker>
        <Component
          title={Utils.createBaseField("Some Title")}
          subTitle={Utils.createBaseField("Some Subtitle")}
          description={Utils.createBaseField("Some Description")}
          // photoSource={Utils.createFileField()}
        />
      </Utils.EnvMocker>,
      document.querySelector("testing-container")
    );
  })();
}
