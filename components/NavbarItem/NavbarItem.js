import styled from "styled-components";

export function NavbarItem({ children, isActive }) {
  return (
    <>
      {isActive ? (
        <ActiveListItem>{children}</ActiveListItem>
      ) : (
        <NormalListItem>{children}</NormalListItem>
      )}
    </>
  );
}

const NormalListItem = styled.div`
  padding: 0.8rem;
  width: 25vw;
  color: black;
  background-color: var(--main-callToAction-background-color);
  list-style-type: none;
`;

const ActiveListItem = styled(NormalListItem)`
  background-color: var(--highlighted-callToAction-background-color);
`;
