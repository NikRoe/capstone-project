import styled from "styled-components";

export function SeriesRating({ series }) {
  return <StyledRating>({series.vote_average})</StyledRating>;
}

const StyledRating = styled.p`
  font-size: smaller;
`;
