import styled from "styled-components";

export function ClickButton({
  handleButtonClick,
  series,
  defaultName,
  seriesIsEditing,
  isForEpisode,
}) {
  return (
    <>
      {isForEpisode ? (
        <StyledButtonInput
          onClick={() => handleButtonClick(series)}
          disabled={seriesIsEditing}
        >
          {defaultName}
        </StyledButtonInput>
      ) : (
        <StyledButton
          onClick={() => handleButtonClick(series)}
          disabled={seriesIsEditing}
        >
          {defaultName}
        </StyledButton>
      )}
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

const StyledButtonInput = styled(StyledButton)`
  background-color: white;
  border-radius: 0px;
  padding: 0.7rem;
  margin: 0.2rem;
`;
