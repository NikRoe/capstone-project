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

const NormalListItem = styled.li`
  padding: 0.8rem;
  width: 25vw;
  color: black;
  background-color: #00adb5;
  list-style-type: none;
`;

const ActiveListItem = styled(NormalListItem)`
  background-color: #00d8e3;
`;
