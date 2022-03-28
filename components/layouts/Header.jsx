import Link from "next/link";
import React from "react";
import {
  AppBar,
  BrandText,
  ChangeThemeButton,
  HeaderContainer,
} from "../../styles/header_styles";

export default function Header({ theme, toggleTheme }) {
  return (
    <AppBar>
      <HeaderContainer>
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
      </HeaderContainer>
    </AppBar>
  );
}
