import styled from "styled-components";
import { SeriesVoteCount } from "../SeriesVoteCount/SeriesVoteCount";

export function SeriesRating({ series }) {
  if (series.vote_average >= 7.5) {
    return (
      <StyledRating>
        ({series.vote_average} &frasl; 10)
        <SeriesVoteCount series={series} />
      </StyledRating>
    );
  } else if (series.vote_average >= 5) {
    return (
      <StyledRating inputColor="orange">
        ({series.vote_average} &frasl; 10)
        <SeriesVoteCount series={series} />
      </StyledRating>
    );
  } else {
    return (
      <>
        <StyledRating inputColor="#E65648">
          ({series.vote_average} &frasl; 10)
          <SeriesVoteCount series={series} />
        </StyledRating>
      </>
    );
  }
}

const StyledRating = styled.p`
  font-size: smaller;
  color: ${(props) => props.inputColor || "lightgreen"};
  margin: 0;
`;
