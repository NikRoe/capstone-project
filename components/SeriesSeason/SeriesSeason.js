import { useRouter } from "next/router";
import { useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import useSWR from "swr";
import { SeriesEpisode } from "../SeriesEpisode/SeriesEpisode";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function SeriesSeason({ season }) {
  const seasonNumber = season.name.split(" ")[1];
  const router = useRouter();
  const { id } = router.query;

  const [isWatched, setIsWatched] = useState([]);

  const { data, error } = useSWR(
    `/api/getSeriesById/${id}/${seasonNumber}`,
    fetcher
  );

  function handleChange(episode) {
    setIsWatched([...isWatched, episode]);
  }

  console.log(isWatched);

  return (
    <>
      {data ? (
        <Collapsible trigger={season.name} triggerTagName={styledCollapsible}>
          <StyledDiv>
            <input type="checkbox" id={season.name} name={season.name} />
            <label htmlFor={season.name}>Mark whole season as watched</label>
          </StyledDiv>
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
