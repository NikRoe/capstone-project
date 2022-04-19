import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function LoginButton({ buttonExtraText }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <StyledDiv>
        <p>
          Signed in as <strong>{session.user.name}</strong>
        </p>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </StyledDiv>
    );
  }
  return (
    <div>
      <StyledButton onClick={() => signIn()}>Sign in</StyledButton>
      {buttonExtraText ? (
        <StyledInfoText>{buttonExtraText}</StyledInfoText>
      ) : null}
    </div>
  );
}

const StyledButton = styled.button`
  background-color: var(--main-callToAction-background-color);
  padding: 1rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

const StyledInfoText = styled.p`
  font-size: small;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
