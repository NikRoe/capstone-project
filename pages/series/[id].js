import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { Navbar } from "../../components/Navbar/Navbar";
import { SeriesDetail } from "../../components/SeriesDetail/SeriesDetail";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function DetailPage({
  addSeriesHandler,
  removeSeriesHandler,
  isWatching,
  seriesIsEditing,
}) {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query, "query");

  const { data, error } = useSWR(`/api/getSeriesById/${id}`, fetcher);

  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>{data ? data.data.name : null}</title>
      </Head>
      {session ? (
        <p>
          Signed in as <strong>{session.user.name}</strong>
        </p>
      ) : null}
      {data ? (
        <StyledDiv>
          <SeriesDetail
            series={data.data}
            addSeriesHandler={addSeriesHandler}
            removeSeriesHandler={removeSeriesHandler}
            isWatching={isWatching}
            seriesIsEditing={seriesIsEditing}
          />
        </StyledDiv>
      ) : (
        <div>Loading...</div>
      )}
      <Navbar />
    </>
  );
}

const StyledDiv = styled.div`
  margin-bottom: 3.5rem;
`;
