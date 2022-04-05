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
}) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/getSeriesById/${id}`, fetcher);

  return (
    <>
      {data ? (
        <StyledDiv>
          <SeriesDetail
            series={data.data}
            addSeriesHandler={addSeriesHandler}
            removeSeriesHandler={removeSeriesHandler}
            isWatching={isWatching}
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
