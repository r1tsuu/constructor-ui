import React from "react";
import { EnvironmentProvider } from "../contexts/EnvironmentContext";
import { ObjectID } from "bson";
import { UiKitContainerMocker } from "../stories-decorators/UiKitContainerDecorator";

export const baseField = (value) => ({
  value,
});

export const fileField = (length = 1) => ({
  value: Array(length).fill({
    _id: new ObjectID().toString(),
    compression: "./compression",
    preview: "./preview",
    path: "./path",
  }),
});

export const x1RepeatField = (dataFields = []) => ({
  data: dataFields.map((fields) => ({
    custom_fields: fields,
    _id: new ObjectID().toString(),
  })),
});

export const EnvUiKitMocker = (props) => (
  <EnvironmentProvider SITE_URL={"https://example.com"}>
    <UiKitContainerMocker>{props.children}</UiKitContainerMocker>
  </EnvironmentProvider>
);
