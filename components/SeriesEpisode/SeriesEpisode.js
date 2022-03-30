import styled from "styled-components";

export function SeriesEpisode({ episode }) {
  return <StyledListItem>{episode.name}</StyledListItem>;
}

const StyledListItem = styled.li`
  list-style-type: none;
  text-align: left;
`;
