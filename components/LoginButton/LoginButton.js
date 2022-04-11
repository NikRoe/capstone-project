import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </div>
    );
  }
  return (
    <div>
      <StyledButton onClick={() => signIn()}>Sign in</StyledButton>
      <StyledInfoText>
        Log in to save your favourite series and track your progress
      </StyledInfoText>
    </div>
  );
}

const StyledButton = styled.button`
  background-color: var(--main-callToAction-background-color);
  padding: 1rem;
`;

const StyledInfoText = styled.p`
  font-size: small;
`;
