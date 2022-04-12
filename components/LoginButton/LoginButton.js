import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <StyledDiv>
        <span>
          Signed in as <strong>{session.user.name}</strong>
        </span>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </StyledDiv>
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
  border-radius: 15px;
  border: none;
`;

const StyledInfoText = styled.p`
  font-size: small;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-between;
  align-items: center;
`;
