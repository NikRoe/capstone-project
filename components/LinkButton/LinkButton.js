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
  background-color: #00adb5;
  border-radius: 14px;
  padding: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
  box-shadow: 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
`;
