import React from "react";

import { SeriesTitle } from "./SeriesTitle";

export default {
  title: "Components/SeriesCard/SubElements",
  component: SeriesTitle,
};

const exampleSeries = {
  name: "Game of Thrones",
  overview: "some long text",
  image: "",
  vote_average: 8.3,
  vote_count: 200,
};

export const DefaultSeriesTitle = () => (
  <SeriesTitle series={exampleSeries}></SeriesTitle>
);
