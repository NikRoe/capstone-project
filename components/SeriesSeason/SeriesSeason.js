import { useRouter } from "next/router";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import useSWR from "swr";
import { SeriesEpisode } from "../SeriesEpisode/SeriesEpisode";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function SeriesSeason({ season }) {
  const seasonNumber = season.name.split(" ")[1];
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `/api/getSeriesById/${id}/${seasonNumber}`,
    fetcher
  );

  return (
    <>
      <Collapsible trigger={season.name} triggerTagName={styledCollapsible}>
        {data ? (
          data.data.episodes.map((episode) => (
            <SeriesEpisode key={episode.id} episode={episode} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </Collapsible>
    </>
  );
}

const styledCollapsible = styled.div`
  background-color: #f2e3d5;
  padding: 0.3rem;
  border-radius: 14px;
  cursor: pointer;
  color: black;
  border: 0.2rem solid #026773;
`;
