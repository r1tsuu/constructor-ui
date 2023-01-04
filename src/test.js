/* eslint-disable  */
//
import React from "react";
import { render } from "react-dom";
import {
  components,
  MapSection,
  mapSectionArgs,
  photoTextButtonArgs,
  PhotoTextButton,
} from "./components";
import { parseArgs } from "./utils";
import { COMPONENT_KEYS } from "./utils/constants";
import * as testUtils from "./utils/test-utils";
import img from "./components/sections/MapSection/map_estate.png";

function renderToContainer(element) {
  render(element, document.querySelector("testing-container"));
}

function renderSecions() {
  renderToContainer(
    <testUtils.EnvUiKitMocker>
      {/* <MapSection {...parseArgs(mapSectionArgs.args)} mainLocationIcon={img} /> */}
      {/* <PhotoTextButton /> */}
      <PhotoTextButton {...parseArgs(photoTextButtonArgs.args)} />
      <PhotoTextButton {...parseArgs(photoTextButtonArgs.args)} />
      <PhotoTextButton {...parseArgs(photoTextButtonArgs.args)} />
      <PhotoTextButton {...parseArgs(photoTextButtonArgs.args)} />

      {/* <PhotoTextButton /> */}
    </testUtils.EnvUiKitMocker>
  );
}

export function run() {
  renderSecions();
}

//
