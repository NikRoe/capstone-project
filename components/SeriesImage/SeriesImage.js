import Image from "next/image";
import styled from "styled-components";

export function SeriesImage({ series }) {
  return (
    <StyledDiv>
      <Image
        src={
          series.poster_path !== null
            ? `https://image.tmdb.org/t/p/w300${series.poster_path}`
            : "/No_image_available.svg"
        }
        alt={`Image of series ${series.name}`}
        layout="fill"
        objectFit="scale-down"
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  max-width: 400px;
  position: relative;
`;
