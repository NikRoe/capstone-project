import Link from "next/link";
import styled from "styled-components";

export function Navbar() {
  return (
    <StyledDiv>
      <Link href={"/"} passHref>
        <a>Home</a>
      </Link>
      <Link href={"/currentlyWatching"} passHref>
        <a>Watching</a>
      </Link>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 25%;
  background-color: #ca3e47;
  align-items: center;
  justify-content: center;

  > a {
    padding: 1rem;
    width: 25vw;
    color: black;
    text-decoration: none;
    border: 0.1rem solid black;
    overflow: hidden;
  }
`;
