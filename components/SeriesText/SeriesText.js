import styled from "styled-components";

export function SeriesText({ series, clipTextLength }) {
  return (
    <StyledParagraph>
      {clipTextLength && series.overview.length > 0
        ? clipTextLength(series.overview, 100)
        : series.overview.length === 0
        ? "No further information has been added to this series as of yet."
        : series.overview}
    </StyledParagraph>
  );
}

const StyledParagraph = styled.p`
  text-align: start;
`;
