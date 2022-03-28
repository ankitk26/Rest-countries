import styled from "styled-components";

export const AppBar = styled.nav`
  background-color: ${(props) => props.theme.elements};
  box-shadow: 0 4px 6px -7px rgba(0, 0, 0, 0.5);
`;

export const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ToggleThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ThemeText = styled.h4`
  display: none;

  @media all and (min-width: 975px) {
    display: block;
  }
`;
