import Link from "next/link";
import styled from "styled-components";

export function Button() {
  return (
    <>
      <Link href={"/series/test"} passHref>
        <a>
          <StyledButton>Read more</StyledButton>
        </a>
      </Link>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #f2e3d5;
  border-radius: 14px;
  width: 10rem;
  height: 2rem;
`;
