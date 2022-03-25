import styled from "styled-components";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesCard({ series }) {
  return (
    <StyledSection>
      <SeriesImage series={series} />
      <StyledDiv>
        <SeriesTitle series={series} />
        <SeriesText series={series} />
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  border-radius: 14px;
  padding: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
