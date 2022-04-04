import styled from "styled-components";

export function ClickButton({
  addSeriesHandler,
  series,
  defaultName,
  isActive,
  removeSeriesHandler,
}) {
  return (
    <>
      <StyledButton
        onClick={
          isActive
            ? () => removeSeriesHandler(series)
            : () => addSeriesHandler(series)
        }
      >
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
