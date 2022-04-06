import styled from "styled-components";

export function SeriesRating({ series }) {
  if (series.vote_average >= 7.5) {
    return (
      <StyledRatingDefault>
        ({series.vote_average} &frasl; 10)
      </StyledRatingDefault>
    );
  } else if (series.vote_average >= 5) {
    return (
      <StyledRatingDefault inputColor="orange">
        ({series.vote_average} &frasl; 10)
      </StyledRatingDefault>
    );
  } else {
    return (
      <StyledRatingDefault inputColor="red">
        ({series.vote_average} &frasl; 10)
      </StyledRatingDefault>
    );
  }
}

const StyledRatingDefault = styled.p`
  font-size: smaller;
  color: ${(props) => props.inputColor || "lightgreen"};
  margin: 0;
`;
