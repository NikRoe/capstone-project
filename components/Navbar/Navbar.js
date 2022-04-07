import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import styled from "styled-components";
import { useEffect, useState } from "react";

export function Navbar() {
  const router = useRouter();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setShow(true);
      } else if (window.scrollY > lastScrollY + 4) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <>
      {show && (
        <NavbarWrapper>
          <NavbarItem isActive={router.pathname == "/search"}>
            <Link href="/search" passHref>
              <StyledAnchor>Search</StyledAnchor>
            </Link>
          </NavbarItem>

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
      )}
    </>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 12.5%;
  align-items: center;
  justify-content: center;
`;

const StyledAnchor = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  width: 100%;
`;
