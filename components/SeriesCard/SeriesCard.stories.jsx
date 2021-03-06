import React from "react";

import { SeriesCard } from "./SeriesCard";

const exampleSeries = {
  name: "Arcane",
  overview:
    "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
  poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  id: 222,
  vote_average: 8.5,
  vote_count: 20,
};

export default {
  title: "Components/SeriesCard",
  component: SeriesCard,
  args: exampleSeries,
};

const Template = (args) => <SeriesCard {...args} />;

export const DefaultSeriesCard = Template.bind({});
DefaultSeriesCard.args = {
  series: exampleSeries,
};
