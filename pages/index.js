import styled from "styled-components";
import useSWR from "swr";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";
import axios from "axios";
import { Navbar } from "../components/Navbar/Navbar";
import Head from "next/head";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR("/api/getPopularSeries", fetcher);

  return (
    <>
      <Head>
        <title>Seriesly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Seriesly</h1>
      {data ? (
        <StyledDiv>
          {data.data.results.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))}
        </StyledDiv>
      ) : (
        <div>loading</div>
      )}
      <Navbar />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
`;
