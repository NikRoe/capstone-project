import styled from "styled-components";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";

export default function currentlyWatching({ isWatching }) {
  console.log(isWatching);
  return (
    <>
      <h1>Currently Watching</h1>
      {isWatching ? (
        <StyledDiv>
          {isWatching.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))}
        </StyledDiv>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
