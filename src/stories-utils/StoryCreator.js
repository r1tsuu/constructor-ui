import imgPlaceholder from "./assets/img-placeholder.png";

export default class StoryCreator {
  static textArg({ color = "text-primary", typography = "h3", defaultValue }) {
    return {
      color,
      typography,
      defaultValue,
      type: "text",
    };
  }

  static cardArg() {
    return {
      type: "card",
    };
  }

  static buttonArg() {
    return {
      type: "button",
    };
  }

  static arrowArg() {
    return {
      type: "arrow",
    };
  }

  static radioArg({ options, defaultValue }) {
    return {
      options,
      defaultValue,
      type: "radio",
    };
  }

  static colorArg({ defaultValue }) {
    return { defaultValue, type: "color" };
  }

  argsCopyWithBase(args) {
    return {
      ...args,
      "section.theme": StoryCreator.radioArg({
        options: ["dark", "light", "custom"],
        defaultValue: "dark",
      }),
      "section.bg": StoryCreator.colorArg({
        defaultValue: "background",
      }),
    };
  }

  sectionArgResolver(argKey, arg) {
    if (typeof arg !== "object" || Array.isArray(arg))
      return {
        args: {
          [argKey]: arg,
        },
      };
  }

  sectionArgsResolver(args) {
    const withBase = this.argsCopyWithBase(args);

    return Object.entries(withBase).reduce((acc, [key, arg]) => {}, {
      args: {},
      argTypes: {},
    });
  }
}
