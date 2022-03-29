import Link from "next/link";
import styled from "styled-components";

export function Button({ series }) {
  const seriesID = series.id;
  return (
    <>
      <Link href={`/series/${seriesID}`} passHref>
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
  height: 3rem;
  &:hover {
    cursor: pointer;
  }
`;
