import React from "react";

import { SeriesTitle } from "./SeriesTitle";

export default {
  title: "Components/SeriesTitle",
  component: SeriesTitle,
};

const exampleSeries = {
  name: "Game of Thrones",
  overview: "some long text",
  image: "",
};

export const DefaultSeriesTitle = () => (
  <SeriesTitle series={exampleSeries}></SeriesTitle>
);
