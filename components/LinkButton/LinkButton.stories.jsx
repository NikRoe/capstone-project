import React from "react";

import { LinkButton } from "./LinkButton";

export default {
  title: "Components/LinkButton",
  component: Button,
};

const exampleSeries = {
  name: "Game of Thrones",
  overview: "some long text",
  image: "",
  id: 222,
};

export const DefaultButton = () => (
  <LinkButton series={exampleSeries}></LinkButton>
);
