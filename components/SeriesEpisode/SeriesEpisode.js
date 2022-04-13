import styled from "styled-components";

export function SeriesEpisode({
  episode,
  isWatched,
  removeEpisodeHandler,
  addEpisodeHandler,
}) {
  let isOnList;
  isWatched ? (isOnList = isWatched.includes(episode.id)) : null;

  return (
    <StyledDiv>
      <input
        type="checkbox"
        id={episode.name}
        name={episode.name}
        onChange={
          isOnList
            ? () => removeEpisodeHandler(episode.id)
            : () => addEpisodeHandler(episode.id)
        }
        checked={isOnList}
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
