import React from "react";

import { SeriesCard } from "./SeriesCard";

export default {
  title: "Components/SeriesCard",
  component: SeriesCard,
};

const exampleSeries = {
  name: "The Man Who Saved Central City",
  overview: "some long text",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  id: 222,
  vote_average: 8.5,
};

export const DefaultCard = () => (
  <SeriesCard series={exampleSeries}></SeriesCard>
);
