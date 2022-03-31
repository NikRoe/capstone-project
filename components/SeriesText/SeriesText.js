import styled from "styled-components";

export function SeriesText({ series, clipTextLength }) {
  return (
    <StyledParagraph>
      {clipTextLength ? clipTextLength(series.overview, 100) : series.overview}
    </StyledParagraph>
  );
}

const StyledParagraph = styled.p`
  text-align: start;
`;
