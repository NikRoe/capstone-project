import { useRouter } from "next/router";
import useSWR from "swr";
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
        <>
          <SeriesDetail
            series={data.data}
            addSeriesHandler={addSeriesHandler}
            removeSeriesHandler={removeSeriesHandler}
            isWatching={isWatching}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
