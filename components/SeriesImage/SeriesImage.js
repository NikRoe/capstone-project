import Image from "next/image";

export function SeriesImage({ series }) {
  return (
    <Image
      src={
        series.poster_path !== null
          ? `https://image.tmdb.org/t/p/w300${series.poster_path}`
          : "/../assets/No_image_available.svg"
      }
      alt={`Image of series ${series.name}`}
      width="300"
      height="450"
    />
  );
}
