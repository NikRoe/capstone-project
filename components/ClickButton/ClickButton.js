import styled from "styled-components";

export function ClickButton({ clickHandler, series, defaultName, isActive }) {
  console.log(isActive);
  return (
    <>
      <StyledButton onClick={() => clickHandler(series)}>
        {defaultName}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #ca3e47;
  padding: 0.3rem;
  border-radius: 14px;
  cursor: pointer;
  color: black;
  border: 0.2rem solid #414141;
`;
