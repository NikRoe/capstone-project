import React from "react";

import { SeriesImage } from "./SeriesImage";

export default {
  title: "Components/SeriesImage",
  component: SeriesImage,
};

const exampleSeries = {
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
};

export const DefaultImage = () => (
  <SeriesImage series={exampleSeries}></SeriesImage>
);
