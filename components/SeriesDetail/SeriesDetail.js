import styled from "styled-components";
import { LinkButton } from "../LinkButton/LinkButton";
import { SeriesExtraInfo } from "../SeriesExtraInfo/SeriesExtraInfo";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesDetail({ series }) {
  return (
    <StyledSection>
      <StyledTopWrap>
        <StyledLeftTopWrap>
          <LinkButton href={"/"} buttonText={"Back Home"} />
          <SeriesTitle series={series} />
        </StyledLeftTopWrap>
        <SeriesImage series={series} />
      </StyledTopWrap>
      <StyledDiv>
        <SeriesText series={series} />
        <SeriesExtraInfo series={series} />
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  padding: 1rem;
  background-color: #026773;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 400px;
`;

const StyledTopWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;
  justify-content: flex-end;
`;

const StyledLeftTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
