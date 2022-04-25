import styled from "styled-components";
import { SeriesVoteCount } from "../SeriesVoteCount/SeriesVoteCount";

export function SeriesRating({ series }) {
  const voteCount = series.vote_count;
  const voteAverage = series.vote_average;
  if (voteCount !== 0) {
    if (voteAverage >= 7.5) {
      return (
        <>
          <StyledRating>({voteAverage} &frasl; 10)</StyledRating>
          <SeriesVoteCount voteCount={voteCount} />
        </>
      );
    } else if (voteAverage >= 5) {
      return (
        <>
          <StyledRating inputColor="orange">
            ({voteAverage} &frasl; 10)
          </StyledRating>
          <SeriesVoteCount voteCount={voteCount} />
        </>
      );
    } else {
      return (
        <>
          <StyledRating inputColor="#FF5E4F">
            ({voteAverage} &frasl; 10)
          </StyledRating>
          <SeriesVoteCount voteCount={voteCount} />
        </>
      );
    }
  } else {
    return <StyledDiv>No ratings yet</StyledDiv>;
  }
}

const StyledRating = styled.p`
  font-size: smaller;
  color: ${(props) => props.inputColor || "lightgreen"};
  margin: 0;
`;

const StyledDiv = styled.div`
  font-size: x-small;
`;
