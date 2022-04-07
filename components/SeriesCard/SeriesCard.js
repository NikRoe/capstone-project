import styled from "styled-components";
import { LinkButton } from "../LinkButton/LinkButton";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesCard({ series }) {
  const seriesLink = `/series/${series.id}`;
  function clipTextLength(str, n) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <StyledSection>
      <SeriesImage series={series} />
      <StyledTopRightWrapper>
        <SeriesTitle series={series} />
        <SeriesText series={series} clipTextLength={clipTextLength} />
        <LinkButton href={seriesLink} buttonText={"Read more"} />
      </StyledTopRightWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 14px;
  background-color: var(--card-background-color);
  gap: 1rem;
  padding: 1rem;
  justify-content: space-between;
  max-width: 400px;
  margin: 1rem 0.5rem 0;
`;

const StyledTopRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
