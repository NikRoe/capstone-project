import styled from "styled-components";

export function SeriesExtraInfo({ series }) {
  return (
    <StyledSection>
      <article>
        <strong>Air date last episode: </strong>
        {series.last_air_date}
      </article>
      <article>
        <strong>Number of seasons: </strong>
        {series.number_of_seasons}
      </article>
      <article>
        <strong>Number of episodes: </strong>
        {series.number_of_episodes}
      </article>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;
