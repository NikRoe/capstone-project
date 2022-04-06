import React from "react";

import { Searchbar } from "./Searchbar";

export default {
  title: "Components/Searchbar",
  component: Searchbar,
};

export const DefaultSearchbar = () => (
  <Searchbar searchTermHandler={() => console.log("Hi")}></Searchbar>
);
