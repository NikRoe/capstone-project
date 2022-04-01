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
  padding: 0.4rem;
  align-items: center;
  font-size: smaller;

  > input {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
