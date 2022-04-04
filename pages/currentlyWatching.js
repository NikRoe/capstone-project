import styled from "styled-components";
import { LinkButton } from "../components/LinkButton/LinkButton";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";

export default function currentlyWatching({ isWatching }) {
  console.log(isWatching);
  return (
    <>
      <h1>Currently Watching</h1>
      {isWatching.length === 0 ? (
        <p>
          You did not add any series to your currently Watching List yet. To do
          so, go to any series and click on &#34;Add to currently Watching&#34;
          &#58;&#41;{" "}
        </p>
      ) : isWatching.length > 0 ? (
        <StyledDiv>
          {isWatching.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))}
        </StyledDiv>
      ) : (
        <div>loading</div>
      )}
      <LinkButton href={"/"} buttonText={"Back home"} />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
