import styled from "styled-components";
import { ClickButton } from "../ClickButton/ClickButton";
import { LinkButton } from "../LinkButton/LinkButton";
import { SeriesExtraInfo } from "../SeriesExtraInfo/SeriesExtraInfo";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesSeason } from "../SeriesSeason/SeriesSeason";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesDetail({ series, clickHandler, isActive }) {
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
      <ClickButton
        clickHandler={clickHandler}
        series={series}
        defaultName={
          isActive
            ? "Remove from currently watching"
            : "Add to currently watching"
        }
        isActive={isActive}
      />
      <div>
        {series.seasons
          .filter((season) => season.name != "Specials")
          .map((season) => (
            <SeriesSeason key={season.id} season={season} />
          ))}
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  padding: 1rem;
  background-color: #414141;
  gap: 2rem;
  justify-content: space-between;
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
`;

const StyledLeftTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15rem;
  align-items: flex-start;
`;
