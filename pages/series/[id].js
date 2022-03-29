import { useRouter } from "next/router";
import useSWR from "swr";
import { SeriesDetail } from "../../components/SeriesDetail/SeriesDetail";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    fetcher
  );

  return (
    <>
      {data ? (
        <>
          <SeriesDetail series={data} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
