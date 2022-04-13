import { useRouter } from "next/router";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import useSWR from "swr";
import { SeriesEpisode } from "../SeriesEpisode/SeriesEpisode";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function SeriesSeason({ season, isWatching, addSeriesHandler, series }) {
  const seasonNumber = season.name.split(" ")[1];
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `/api/getSeriesById/${id}/${seasonNumber}`,
    fetcher
  );

  const { data: isWatched, mutate } = useSWR(`/api/watchedEpisodes`, fetcher);

  async function addEpisodeHandler(episodeId) {
    handleEpisodeEdit(episodeId);
    if (isWatching.some((entry) => entry.id === series.id) === false) {
      addSeriesHandler(series);
    }
  }

  async function removeEpisodeHandler(episodeId) {
    handleEpisodeDelete(episodeId);
  }

  async function handleEpisodeEdit(episodeId) {
    const response = await fetch(`/api/watchedEpisodes/${episodeId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: episodeId }),
    });
    const createdSeries = await response.json();
    if (response.ok) {
      alert("it worked!");
      mutate();
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
      alert("it worked!");
      mutate();
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <>
      {data ? (
        <Collapsible
          trigger={`Season ${seasonNumber}`}
          triggerTagName={styledCollapsible}
        >
          {data.data.episodes.map((episode) => (
            <SeriesEpisode
              key={episode.id}
              episode={episode}
              isWatched={isWatched}
              addEpisodeHandler={addEpisodeHandler}
              removeEpisodeHandler={removeEpisodeHandler}
            />
          ))}
        </Collapsible>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

const styledCollapsible = styled.div`
  background-color: var(--main-callToAction-background-color);
  padding: 0.3rem;
  border-radius: 14px;
  cursor: pointer;
  color: var(--button-text-color);
`;
