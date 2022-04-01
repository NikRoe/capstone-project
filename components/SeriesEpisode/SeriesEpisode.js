import styled from "styled-components";

export function SeriesEpisode({ episode }) {
  return (
    <StyledDiv>
      <input type="checkbox" id={episode.name} name={episode.name} />
      <label htmlFor={episode.name}>{episode.name}</label>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;

  padding: 0.2rem;
`;
