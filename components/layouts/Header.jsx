import Link from "next/link";
import {
  AppBar,
  ToggleThemeButton,
  HeaderContainer,
  HeaderTitle,
  ThemeText,
} from "../../styles/header_styles";

export default function Header({ theme, toggleTheme }) {
  return (
    <AppBar>
      <HeaderContainer>
        <Link href="/" passHref>
          <HeaderTitle>
            <h2>Where in the world?</h2>
          </HeaderTitle>
        </Link>

        <ToggleThemeButton onClick={toggleTheme}>
          <span className="material-icons">
            {theme === "light" ? "light_mode" : "dark_mode"}
          </span>
          <ThemeText>{theme === "light" ? "Light" : "Dark"} mode</ThemeText>
        </ToggleThemeButton>
      </HeaderContainer>
    </AppBar>
  );
}
