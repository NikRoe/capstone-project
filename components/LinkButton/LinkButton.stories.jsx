import React from "react";

import { LinkButton } from "./LinkButton";

export default {
  title: "Components/LinkButton",
  component: LinkButton,
};

export const DefaultButton = () => (
  <LinkButton href="/" buttonText="Read more"></LinkButton>
);
