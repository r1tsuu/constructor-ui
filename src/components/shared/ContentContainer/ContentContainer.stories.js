import React from "react";

import { ContentContainer } from ".";

export default {
  title: "UI KIT/Content Container",
  component: ContentContainer,
};

export const Default = () => (
  <div
    style={{
      background: "red",
    }}
  >
    <ContentContainer>
      <div
        style={{
          background: "blue",
          color: "white",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "35px",
          textTransform: "uppercase",
        }}
      >
        Content here
      </div>
    </ContentContainer>
  </div>
);
