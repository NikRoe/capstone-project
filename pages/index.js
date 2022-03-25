import styled from "styled-components";
import useSWR from "swr";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetcher
  );

  return (
    <>
      <h1>Have you seen...?</h1>
      <StyledDiv>
        {data ? (
          data.results.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))
        ) : (
          <div>loading</div>
        )}
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
