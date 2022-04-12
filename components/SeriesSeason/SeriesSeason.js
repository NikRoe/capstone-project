import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import useSWR from "swr";
import { SeriesEpisode } from "../SeriesEpisode/SeriesEpisode";

const fetcher = (url) => fetch(url).then((response) => response.json());

function getLocalStorage(key) {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return JSON.parse(localStorage.getItem(key));
  }
}

function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function SeriesSeason({ season, isWatching, addSeriesHandler, series }) {
  const seasonNumber = season.name.split(" ")[1];
  const router = useRouter();
  const { id } = router.query;

  const [isWatched, setIsWatched] = useState(
    () => getLocalStorage("isWatched") ?? []
  );

  const { data, error } = useSWR(
    `/api/getSeriesById/${id}/${seasonNumber}`,
    fetcher
  );

  useEffect(() => {
    setLocalStorage("isWatched", isWatched);
  }, [isWatched]);

  function handleChange(episodeId) {
    if (isWatched.some((entry) => entry === episodeId)) {
      setIsWatched(isWatched.filter((entry) => entry !== episodeId));
    } else {
      setIsWatched([...isWatched, episodeId]);
      if (isWatching.some((entry) => entry.id === series.id) === false) {
        addSeriesHandler(series);
      }
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
              handleChange={handleChange}
              isWatched={isWatched}
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
