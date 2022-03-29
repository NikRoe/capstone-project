import Link from "next/link";
import styled from "styled-components";

export function LinkButton({ href }) {
  return (
    <div>
      <Link href={href} passHref>
        <StyledAnchor>Read more</StyledAnchor>
      </Link>
    </div>
  );
}

const StyledAnchor = styled.a`
  background-color: #f2e3d5;
  border-radius: 14px;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
`;
