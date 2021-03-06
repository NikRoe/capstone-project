import styled from "styled-components";
import useSWR from "swr";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";
import axios from "axios";
import { Navbar } from "../components/Navbar/Navbar";
import Head from "next/head";
import { getSession } from "next-auth/react";
import LoginButton from "../components/LoginButton/LoginButton";
import { InformationFooter } from "../components/InformationFooter/InformationFooter";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR("/api/getPopularSeries", fetcher);

  return (
    <>
      <Head>
        <title>Seriesly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div role={"main"}>
        <LoginButton
          buttonExtraText={
            "Log in to save your favourite series and track your progress"
          }
        />
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
        <InformationFooter />
        <Navbar />
      </div>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
