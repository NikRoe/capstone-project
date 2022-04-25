import styled from "styled-components";

export function SeriesVoteCount({ voteCount }) {
  return (
    <StyledSpan>
      {" "}
      Based on {voteCount} {voteCount === 1 ? "Vote" : "Votes"}
    </StyledSpan>
  );
}

const StyledSpan = styled.span`
  color: #eee;
  font-size: x-small;
`;
