import styled from "styled-components";
import { ClickButton } from "../ClickButton/ClickButton";
import { SeriesExtraInfo } from "../SeriesExtraInfo/SeriesExtraInfo";
import { SeriesImage } from "../SeriesImage/SeriesImage";
import { SeriesSeason } from "../SeriesSeason/SeriesSeason";
import { SeriesText } from "../SeriesText/SeriesText";
import { SeriesTitle } from "../SeriesTitle/SeriesTitle";

export function SeriesDetail({
  series,
  addSeriesHandler,
  removeSeriesHandler,
  isWatching,
}) {
  let isActive = false;

  function checkIfSeriesIsOnList(series) {
    if (isWatching.some((entry) => entry.id === series.id)) {
      isActive = true;
    } else {
      isActive = false;
    }
  }

  checkIfSeriesIsOnList(series);

  return (
    <StyledSection>
      <StyledTopWrap>
        <SeriesImage series={series} />
        <StyledLeftTopWrap>
          <SeriesTitle series={series} />
        </StyledLeftTopWrap>
      </StyledTopWrap>
      <StyledDiv>
        <SeriesText series={series} />
      </StyledDiv>
      <ClickButton
        handleButtonClick={isActive ? removeSeriesHandler : addSeriesHandler}
        series={series}
        defaultName={
          isActive
            ? "Remove from currently watching"
            : "Add to currently watching"
        }
      />
      <StyledSeasonWrapper>
        {series.seasons
          .filter((season) => season.name !== "Specials")
          .map((season) => (
            <SeriesSeason
              key={season.id}
              season={season}
              isWatching={isWatching}
              addSeriesHandler={addSeriesHandler}
              series={series}
            />
          ))}
      </StyledSeasonWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.main`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  padding: 1rem;
  background-color: var(--card-background-color);
  gap: 2rem;
  justify-content: space-between;
  max-width: 500px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledTopWrap = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const StyledLeftTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15rem;
  align-items: flex-start;
`;

const StyledSeasonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;
