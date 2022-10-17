import React from "react";
import { uiKitContainerDecoratorProps } from "../../../.storybook/decorators";
import { Button, Typography } from "../../components";
import { Arrow } from "../../components/Arrow/Arrow";
import { UiKitContainer } from "./UiKitContainer";

export default {
  title: "UI KIT/UI KIT All",
  component: UiKitContainer,
  args: { ...uiKitContainerDecoratorProps, "data-theme": "dark" },
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
  },
};

const Wrapper = ({ children, dataTheme }) => {
  return (
    <div
      className="with-background"
      style={{
        padding: "0 50px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
      }}
      data-theme={dataTheme}
    >
      {children}
    </div>
  );
};

const ComponentsWrapper = ({ children, label }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography type={"h3"}>{label}</Typography>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </div>
);

const Arrows = ({ type }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography type={"h5"}>Arrows {type}</Typography>
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <Arrow type={type} isPrev />
      <Arrow type={type} />
    </div>
  </div>
);

export const Default = (args) => (
  <UiKitContainer {...args}>
    <Wrapper dataTheme={args["data-theme"]}>
      <ComponentsWrapper label={"Buttons"}>
        <Button type={"default"}>Button Default</Button>
        <Button type={"primary"}>Button Primary</Button>
        <Button type={"secondary"}>Button Secondary</Button>
        <Button type={"tertiary"}>Button Tertiary</Button>
      </ComponentsWrapper>
      <ComponentsWrapper label={"Arrows"}>
        <Arrows type={"cube-default"} />
        <Arrows type={"cube-primary"} />
        <Arrows type={"cube-secondary"} />
        <Arrows type={"long-default"} />
        <Arrows type={"long-custom"} />
      </ComponentsWrapper>
      <ComponentsWrapper label={"Typographies"}>
        <Typography type={"h2"}>Typography H2</Typography>
        <Typography type={"h3"}>Typography H3</Typography>
        <Typography type={"h4"}>Typography H4</Typography>
        <Typography type={"h5"}>Typography H5</Typography>
        <Typography type={"p1"}>Typography P1</Typography>
        <Typography type={"p2"}>Typography P2</Typography>
      </ComponentsWrapper>
    </Wrapper>
  </UiKitContainer>
);
