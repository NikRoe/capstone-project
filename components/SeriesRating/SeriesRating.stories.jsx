import React from "react";

import { SeriesRating } from "./SeriesRating";

export default {
  title: "Components/SeriesCard/SubElements",
  component: SeriesRating,
};

const exampleSeriesHighRating = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 8.3,
  vote_count: 20000,
};

const exampleSeriesMediumRating = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 7.3,
  vote_count: 20000,
};

const exampleSeriesLowRating = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 4.3,
  vote_count: 20000,
};

export const HighRating = () => (
  <SeriesRating series={exampleSeriesHighRating}></SeriesRating>
);

export const MediumRating = () => (
  <SeriesRating series={exampleSeriesMediumRating}></SeriesRating>
);

export const LowRating = () => (
  <SeriesRating series={exampleSeriesLowRating}></SeriesRating>
);
