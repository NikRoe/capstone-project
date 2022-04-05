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
  background-color: #ca3e47;
  list-style-type: none;
`;

const ActiveListItem = styled(NormalListItem)`
  background-color: #ff4f5b;
`;
