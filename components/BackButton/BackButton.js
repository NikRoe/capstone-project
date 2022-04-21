import { useRouter } from "next/router";
import styled from "styled-components";
import { LeftArrow } from "../../lib/LeftArrow";

export function BackButton() {
  const router = useRouter();

  return (
    <div>
      <StyledButton onClick={() => router.back()}>
        <LeftArrow />
      </StyledButton>
    </div>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: black;
  background-color: var(--card-background-color);
  border: none;
`;
