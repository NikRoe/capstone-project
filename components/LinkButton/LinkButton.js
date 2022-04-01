import Link from "next/link";
import styled from "styled-components";

export function LinkButton({ href, buttonText }) {
  return (
    <div>
      <Link href={href} passHref>
        <StyledAnchor>{buttonText}</StyledAnchor>
      </Link>
    </div>
  );
}

const StyledAnchor = styled.a`
  background-color: #ca3e47;
  border-radius: 14px;
  padding: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
