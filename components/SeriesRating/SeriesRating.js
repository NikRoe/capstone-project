import styled from "styled-components";

export function SeriesRating({ series }) {
  if (series.vote_average >= 7.5) {
    return <StyledRatingDefault>({series.vote_average})</StyledRatingDefault>;
  } else if (series.vote_average >= 5) {
    return (
      <StyledRatingDefault inputColor="orange">
        ({series.vote_average})
      </StyledRatingDefault>
    );
  } else {
    return (
      <StyledRatingDefault inputColor="red">
        ({series.vote_average})
      </StyledRatingDefault>
    );
  }
}

const StyledRatingDefault = styled.p`
  font-size: smaller;
  color: ${(props) => props.inputColor || "green"};
`;
