import styled from "styled-components";

export function SeriesText({ series }) {
  return <StyledParagraph>{series.overview}</StyledParagraph>;
}

const StyledParagraph = styled.p`
  text-align: start;
`;
