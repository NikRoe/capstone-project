import styled from "styled-components";

export function ClickButton({ handleButtonClick, series, defaultName }) {
  return (
    <>
      <StyledButton onClick={() => handleButtonClick(series)}>
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
