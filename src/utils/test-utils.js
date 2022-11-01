import React from "react";
import { EnvironmentProvider } from "../contexts/EnvironmentContext";

export const createBaseField = (value) => ({
  value,
});

export const createFileField = (length = 1) => ({
  value: Array(length).fill({
    compression: "compression",
    preview: "preview",
    path: "path",
  }),
});

export const EnvMocker = (props) => (
  <EnvironmentProvider SITE_URL={"https://example.com"}>
    {props.children}
  </EnvironmentProvider>
);
