import React from "react";

import { SeriesExtraInfo } from "./SeriesExtraInfo";

export default {
  title: "Components/SeriesExtraInfo",
  component: SeriesExtraInfo,
};

const exampleSeries = {
  last_air_date: "25-01-22",
  number_of_seasons: 3,
  number_of_episodes: 25,
};

export const DefaultExtraInfo = () => (
  <SeriesExtraInfo series={exampleSeries}></SeriesExtraInfo>
);
