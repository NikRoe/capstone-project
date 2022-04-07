import styled from "styled-components";

export function SeriesVoteCount({ series }) {
  return (
    <StyledSpan>
      {" "}
      Based on {series.vote_count} {series.vote_count === 1 ? "Vote" : "Votes"}
    </StyledSpan>
  );
}

const StyledSpan = styled.span`
  color: #eee;
  font-size: x-small;
`;
