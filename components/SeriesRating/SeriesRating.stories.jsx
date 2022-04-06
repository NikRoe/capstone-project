import React from "react";

import { SeriesRating } from "./SeriesRating";

export default {
  title: "Components/SeriesRating",
  component: SeriesRating,
};

const exampleSeriesHighRating = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 8.3,
};

const exampleSeriesMediumRating = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 7.3,
};

const exampleSeriesLowRating = {
  name: "Arcane",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  vote_average: 4.3,
};

export const DefaultRating = () => (
  <SeriesRating series={exampleSeriesHighRating}></SeriesRating>
);

export const MediumRating = () => (
  <SeriesRating series={exampleSeriesMediumRating}></SeriesRating>
);

export const LowRating = () => (
  <SeriesRating series={exampleSeriesLowRating}></SeriesRating>
);
