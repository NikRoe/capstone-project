import styled from "styled-components";
import { LinkButton } from "../LinkButton/LinkButton";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesCard({ series }) {
  const seriesLink = `/series/${series.id}`;
  return (
    <StyledSection>
      <SeriesImage series={series} />
      <StyledDiv>
        <SeriesTitle series={series} />
        <SeriesText series={series} />
        <LinkButton href={seriesLink} />
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 14px;
  background-color: #026773;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 400px;
`;
