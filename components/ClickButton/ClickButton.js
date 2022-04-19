import styled from "styled-components";

export function ClickButton({
  handleButtonClick,
  series,
  defaultName,
  seriesIsEditing,
}) {
  return (
    <>
      <StyledButton
        onClick={() => handleButtonClick(series)}
        disabled={seriesIsEditing}
      >
        {defaultName}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #00adb5;
  padding: 0.5rem;
  border-radius: 14px;
  cursor: pointer;
  color: black;
  border: none;
`;
