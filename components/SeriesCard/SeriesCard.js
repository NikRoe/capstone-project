import styled from "styled-components";
import { LinkButton } from "../LinkButton/LinkButton";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesCard({ series }) {
  const seriesLink = `/series/${series.id}`;
  function clipTextLength(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <StyledSection>
      <SeriesImage series={series} />
      <StyledDiv>
        <SeriesTitle series={series} />
        <SeriesText series={series} clipTextLength={clipTextLength} />
        <LinkButton href={seriesLink} buttonText={"Read more"} />
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 14px;
  background-color: #414141;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-between;
  max-width: 800px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
