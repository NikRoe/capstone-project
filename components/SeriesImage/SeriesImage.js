import Image from "next/image";

export function SeriesImage({ series }) {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w300${series.poster_path}`}
      alt="Series Post"
      width="300"
      height="450"
    />
  );
}
