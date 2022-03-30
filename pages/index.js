import styled from "styled-components";
import useSWR from "swr";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR("/api/getPopularSeries", fetcher);

  return (
    <>
      <h1>Have you seen...?</h1>
      {data ? (
        <StyledDiv>
          {data.data.results.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))}
        </StyledDiv>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
