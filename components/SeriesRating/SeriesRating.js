import styled from "styled-components";
import { SeriesVoteCount } from "../SeriesVoteCount/SeriesVoteCount";

export function SeriesRating({ series }) {
  if (series.vote_count !== 0) {
    if (series.vote_average >= 7.5) {
      return (
        <>
          <StyledRating>({series.vote_average} &frasl; 10)</StyledRating>
          <SeriesVoteCount voteCount={series.vote_count} />
        </>
      );
    } else if (series.vote_average >= 5) {
      return (
        <>
          <StyledRating inputColor="orange">
            ({series.vote_average} &frasl; 10)
          </StyledRating>
          <SeriesVoteCount voteCount={series.vote_count} />
        </>
      );
    } else {
      return (
        <>
          <StyledRating inputColor="#FF5E4F">
            ({series.vote_average} &frasl; 10)
          </StyledRating>
          <SeriesVoteCount voteCount={series.vote_count} />
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
