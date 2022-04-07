import { useState } from "react";
import styled from "styled-components";

export function SeriesEpisode({ episode, handleChange, isWatched }) {
  // function onChangeHandler(event) {
  //   handleChange(event);
  //   if (isWatched.some((entry) => entry === event)) {
  //     setIsActive(true);
  //     console.log(isActive);
  //   }
  // }
  // const findStuff = isWatched.find((entry) => entry);

  // console.log(findStuff, " i was found");

  // setIsOnList(findStuff === episode.name);
  // console.log("isonlist", isOnList);
  return (
    <StyledDiv>
      <input
        type="checkbox"
        id={episode.name}
        name={episode.name}
        onChange={(event) => handleChange(event.target.name)}
        checked={isWatched.some((entry) => entry === episode.name)}
        value={episode.name}
      />
      <label htmlFor={episode.name}>{episode.name}</label>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  padding: 0.4rem;
  align-items: center;
  font-size: smaller;

  > input {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
