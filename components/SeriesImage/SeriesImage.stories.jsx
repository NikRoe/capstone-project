import React from "react";

import { SeriesImage } from "./SeriesImage";

export default {
  title: "Components/SeriesImage",
  component: SeriesImage,
};

const exampleSeries = {
  name: "Game of Thrones",
  overview:
    "I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
};

export const DefaultSeriesImage = () => (
  <SeriesImage series={exampleSeries}></SeriesImage>
);
