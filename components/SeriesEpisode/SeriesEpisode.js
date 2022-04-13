import { useSession } from "next-auth/react";
import styled from "styled-components";

export function SeriesEpisode({
  episode,
  isWatched,
  removeEpisodeHandler,
  addEpisodeHandler,
  isEditing,
}) {
  let isOnList = false;
  const { data: session } = useSession();

  if (session) {
    isWatched ? (isOnList = isWatched.includes(episode.id)) : null;
  }

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
        disabled={isEditing}
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
