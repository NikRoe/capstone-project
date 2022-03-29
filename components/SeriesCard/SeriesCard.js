import styled from "styled-components";
import { Button } from "../Button/Button";
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
        <Button series={series} />
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
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 400px;
`;
