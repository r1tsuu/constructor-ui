/* eslint-disable  */
import React from "react";
import { render } from "react-dom";
import { components } from "./components";
import { COMPONENT_KEYS } from "./utils/constants";
import * as testUtils from "./utils/test-utils";

function Advantages() {
  const { Component } = components[COMPONENT_KEYS.ADVANTAGES];
  return (
    <Component
      title={testUtils.baseField("Some Title")}
      subTitle={testUtils.baseField("Some Subtitle")}
      items={testUtils.x1RepeatField([
        {
          title: testUtils.baseField("title in repeat"),
          subTitle: testUtils.baseField("subtitle in repeat"),
        },
        {
          title: testUtils.baseField("title in repeat"),
          subTitle: testUtils.baseField("subtitle in repeat"),
        },
      ])}
    />
  );
}

function PhotoTextButton() {
  const { Component } = components[COMPONENT_KEYS.PHOTO_TEXT_BUTTON];
  return (
    <Component
      title={testUtils.baseField("Some Title")}
      subTitle={testUtils.baseField("Some Subtitle")}
      description={testUtils.baseField("Some Description")}
      photoSource={testUtils.fileField()}
      buttonName={testUtils.baseField("Button Name")}
    />
  );
}

function renderToContainer(element) {
  render(element, document.querySelector("testing-container"));
}

function renderSecions() {
  renderToContainer(
    <testUtils.EnvUiKitMocker>
      <PhotoTextButton />
      <Advantages />
    </testUtils.EnvUiKitMocker>
  );
}

function renderSettings() {
  const arrows = components[COMPONENT_KEYS.ARROWS];
  const buttons = components[COMPONENT_KEYS.BUTTONS];
  const customThemeColors = components[COMPONENT_KEYS.CUSTOM_THEME_COLORS];
  const typographies = components[COMPONENT_KEYS.TYPOGRAPHIES];
  renderToContainer(
    <>
      <arrows.Component />
      <buttons.Component />
      <customThemeColors.Component />
      <typographies.Component />
    </>
  );
}

export function run() {
  renderSettings();
}

//
