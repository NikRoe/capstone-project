import React from "react";

import { SeriesVoteCount } from "./SeriesVoteCount";

// const exampleSeriesHighCount = {
//   name: "Arcane",
//   poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
//   vote_average: 8.3,
//   vote_count: 20000,
// };

export default {
  title: "Components/SeriesCard/SubElements/Votes",
  component: SeriesVoteCount,
};

const Template = (args) => <SeriesVoteCount {...args} />;

export const DefaultSeriesVoteCount = Template.bind({});
DefaultSeriesVoteCount.args = {
  primary: true,
  // name: "Arcane",
  // poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
  // vote_average: 8.3,
  series: { vote_count: 20000 },
};

// const exampleSeriesLowCount = {
//   name: "Arcane",
//   poster_path: "/ohGz4HDYGTite1GmRhRuBMVAn03.jpg",
//   vote_average: 4.3,
//   vote_count: 1,
// };

// export const ManyVotes = () => (
//   <SeriesVoteCount series={exampleSeriesHighCount}></SeriesVoteCount>
// );

// export const OneVote = () => (
//   <SeriesVoteCount series={exampleSeriesLowCount}></SeriesVoteCount>
// );
