import React from "react";

import { SeriesVoteCount } from "./SeriesVoteCount";

export default {
  title: "Components/SeriesVoteCount",
  component: SeriesVoteCount,
};

const exampleSeriesHighCount = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 8.3,
  vote_count: 20000,
};
const exampleSeriesLowCount = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 4.3,
  vote_count: 1,
};

export const DefaultCount = () => (
  <SeriesVoteCount series={exampleSeriesHighCount}></SeriesVoteCount>
);

export const OneCount = () => (
  <SeriesVoteCount series={exampleSeriesLowCount}></SeriesVoteCount>
);
