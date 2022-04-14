import { useRouter } from "next/router";
import { useState } from "react";
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
              mutate={mutate}
              isWatching={isWatching}
              addSeriesHandler={addSeriesHandler}
              series={series}
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
