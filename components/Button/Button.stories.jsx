import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const exampleSeries = {
  name: "Game of Thrones",
  overview: "some long text",
  image: "",
  id: 222,
};

export const DefaultButton = () => <Button series={exampleSeries}></Button>;
