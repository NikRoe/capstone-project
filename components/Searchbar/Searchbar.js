import styled from "styled-components";
import { MagnifyingGlass } from "../../lib/MagnifyingGlass";

export function Searchbar({ searchTermHandler, placeholder }) {
  return (
    <StyledSearchbarWrapper>
      <MagnifyingGlass />
      <StyledInput
        id="searchInput"
        onChange={(event) => searchTermHandler(event.target.value)}
        placeholder={placeholder}
      ></StyledInput>
      <label htmlFor="searchInput"></label>
    </StyledSearchbarWrapper>
  );
}

const StyledSearchbarWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  border-radius: 14px;
  height: 2rem;
  width: 20rem;
  text-align: center;
`;
