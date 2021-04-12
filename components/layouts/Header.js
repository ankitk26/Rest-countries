import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../../src/useDarkMode";

const AppBar = styled.nav`
  background-color: ${(props) => props.theme.elements};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 4px 6px -7px rgba(0, 0, 0, 0.5);
`;

const BrandText = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ChangeThemeButton = styled.button`
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

export default function Header({ theme, toggleTheme }) {
  return (
    <AppBar>
      <Link href="/">
        <BrandText>
          <h2>Where in the world?</h2>
        </BrandText>
      </Link>
      <ChangeThemeButton onClick={toggleTheme}>
        <span className="material-icons">
          {theme === "light" ? "light_mode" : "dark_mode"}
        </span>
        <h4>{theme === "light" ? "Light" : "Dark"} mode</h4>
      </ChangeThemeButton>
    </AppBar>
  );
}
