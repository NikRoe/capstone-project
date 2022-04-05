import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import styled from "styled-components";

export function Navbar() {
  const router = useRouter();

  return (
    <>
      <NavbarWrapper>
        <NavbarItem isActive={router.pathname == "/"}>
          <Link href="/" passHref>
            <StyledAnchor>Home</StyledAnchor>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname == "/currentlyWatching"}>
          <Link href="/currentlyWatching" passHref>
            <StyledAnchor>Watching</StyledAnchor>
          </Link>
        </NavbarItem>
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 25%;
  align-items: center;
  justify-content: center;
`;

const StyledAnchor = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
`;
