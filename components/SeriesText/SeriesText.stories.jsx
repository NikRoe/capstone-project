import React from "react";

import { SeriesText } from "./SeriesText";

export default {
  title: "Components/SeriesText",
  component: SeriesText,
};

const exampleSeries = {
  name: "Game of Thrones",
  overview:
    "I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.",
  image: "",
};

export const DefaultSeriesText = () => (
  <SeriesText series={exampleSeries}></SeriesText>
);
