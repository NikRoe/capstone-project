import Link from "next/link";
import styled from "styled-components";
import { RightArrow } from "../../lib/RightArrow";

export function LinkButton({ href }) {
  return (
    <div>
      <Link href={href} passHref>
        <StyledAnchor>
          <RightArrow />
        </StyledAnchor>
      </Link>
    </div>
  );
}

const StyledAnchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
