import React from "react";

import { SeriesDetail } from "./SeriesDetail";

export default {
  title: "Components/SeriesDetail",
  component: SeriesDetail,
};

const exampleSeries = {
  name: "The Man Who Saved Central City",
  overview: "some long text",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  seasons: [{ name: "Season 1", id: 1 }],
};

export const DefaultSeries = () => (
  <SeriesDetail series={exampleSeries}></SeriesDetail>
);
