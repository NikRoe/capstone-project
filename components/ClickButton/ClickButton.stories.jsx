import React from "react";

import { ClickButton } from "./ClickButton";

export default {
  title: "Components/ClickButton",
  component: ClickButton,
};

export const DefaultClickButton = () => (
  <ClickButton
    onClick={() => console.log("hi")}
    defaultName={"test"}
  ></ClickButton>
);
