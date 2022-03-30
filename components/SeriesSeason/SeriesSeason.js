import { useRouter } from "next/router";
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

  console.log(data);

  return (
    <>
      <StyledUnorderedList>
        <strong>{season.name}</strong>
      </StyledUnorderedList>
      {data ? (
        data.data.episodes.map((episode) => (
          <SeriesEpisode key={episode.id} episode={episode} />
        ))
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  text-align: left;
`;
