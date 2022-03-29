import styled from "styled-components";

export function SeriesText({ series }) {
  return <StyledP>{series.overview}</StyledP>;
}

const StyledP = styled.p`
  text-align: start;
`;
