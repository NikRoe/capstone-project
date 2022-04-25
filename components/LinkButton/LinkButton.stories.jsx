import React from "react";

import { LinkButton } from "./LinkButton";

export default {
  title: "Components/SeriesCard/SubElements",
  component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;

export const DefaultLinkButton = Template.bind({});
DefaultLinkButton.args = {
  primary: true,
  href: "/",
};
