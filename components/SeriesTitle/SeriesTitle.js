import styled from "styled-components";
import { SeriesRating } from "../SeriesRating/SeriesRating";

export function SeriesTitle({ series }) {
  return (
    <div>
      <StyledHeader>{series.name}</StyledHeader>
      <SeriesRating series={series} />
    </div>
  );
}

const StyledHeader = styled.h2`
  margin: 0;
`;
