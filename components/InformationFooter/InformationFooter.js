import Image from "next/image";
import styled from "styled-components";

export function InformationFooter() {
  return (
    <>
      <Image
        alt="TMDB Logo"
        src="/TMDB-Icon.svg"
        height="40px"
        width="40px"
      ></Image>
      <StyledParagraph>
        The displayed data originates from TMDB API, this App however is not
        connected to that API
      </StyledParagraph>
    </>
  );
}

const StyledParagraph = styled.p`
  font-size: x-small;
  margin-bottom: 3rem;
`;
