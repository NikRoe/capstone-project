import React from "react";

import { SeriesEpisode } from "./SeriesEpisode";

export default {
  title: "Components/SeriesEpisode",
  component: SeriesEpisode,
};

const exampleEpisode = {
  name: "The Man Who Saved Central City",
  overview: "some long text",
  image: "",
  id: 222,
};

export const DefaultEpisode = () => (
  <SeriesEpisode episode={exampleEpisode}></SeriesEpisode>
);
