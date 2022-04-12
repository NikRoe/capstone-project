import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Sign In 🚀</h1>
      <StyledDiv>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <StyledButton onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </StyledButton>
          </div>
        ))}
      </StyledDiv>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession();
  return {
    props: { providers },
  };
}

const StyledButton = styled.button`
  background-color: var(--main-callToAction-background-color);
  padding: 1rem;
  border: none;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;
