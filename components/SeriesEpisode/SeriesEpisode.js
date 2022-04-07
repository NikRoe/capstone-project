import styled from "styled-components";

export function SeriesEpisode({ episode, handleChange, isWatched }) {
  return (
    <StyledDiv>
      <input
        type="checkbox"
        id={episode.name}
        name={episode.name}
        onChange={(event) => handleChange(event.target.name, episode.id)}
        checked={isWatched.some(
          (entry) => entry === `${episode.name}${episode.id}`
        )}
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
