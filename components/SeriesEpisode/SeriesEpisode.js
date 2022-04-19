import { useSession } from "next-auth/react";
import { useState } from "react";
import styled from "styled-components";

export function SeriesEpisode({
  episode,
  isWatched,
  mutate,
  isWatching,
  addSeriesHandler,
  series,
}) {
  const [isEditing, setIsEditing] = useState(false);

  let isOnList = false;
  const { data: session } = useSession();

  if (session) {
    isWatched ? (isOnList = isWatched.includes(episode.id)) : null;
  }

  async function addEpisodeHandler(episodeId) {
    handleEpisodeEdit(episodeId);
    if (isWatching.some((entry) => entry.id === series.id) === false) {
      addSeriesHandler(series);
    }
    setIsEditing(true);
  }

  async function removeEpisodeHandler(episodeId) {
    handleEpisodeDelete(episodeId);
    setIsEditing(true);
  }

  async function handleEpisodeEdit(episodeId) {
    const response = await fetch(`/api/watchedEpisodes/${episodeId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: episodeId }),
    });
    const createdSeries = await response.json();
    if (response.ok) {
      mutate();
      setIsEditing(false);
    } else {
      alert("Something went wrong");
    }
  }

  async function handleEpisodeDelete(episodeId) {
    const response = await fetch(`/api/watchedEpisodes/${episodeId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: episodeId }),
    });
    if (response.ok) {
      mutate();
      setIsEditing(false);
    } else {
      alert("Something went wrong");
    }
  }

  function handleEpisodeButtonClickNotLoggedIn() {
    alert("Log in to save episode ");
  }

  if (session) {
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
  } else {
    return (
      <StyledDiv>
        <input
          type="checkbox"
          id={episode.name}
          name={episode.name}
          onChange={handleEpisodeButtonClickNotLoggedIn}
          checked={isOnList}
          value={episode.name}
          disabled={isEditing}
        />
        <label htmlFor={episode.name}>{episode.name}</label>
      </StyledDiv>
    );
  }
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
