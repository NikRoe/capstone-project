import React from "react";

import { SeriesVoteCount } from "./SeriesVoteCount";

export default {
  title: "Components/SeriesCard/SubElements",
  component: SeriesVoteCount,
};

const Template = (args) => <SeriesVoteCount {...args} />;

export const VoteCount = Template.bind({});
VoteCount.args = {
  voteCount: 20000,
};
