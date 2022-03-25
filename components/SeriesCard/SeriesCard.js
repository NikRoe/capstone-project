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
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 450px;
  border-radius: 14px;
  padding: 1rem;
  background-color: #026773;
  gap: 2rem;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
`;
