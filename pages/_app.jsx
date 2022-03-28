import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import CountryProvider from "../context/CountryContext";
import { darkTheme, lightTheme } from "../src/themes";
import { useDarkMode } from "../src/useDarkMode";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:"Nunito Sans",serif;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }
`;

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <CountryProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {/* <Layout> */}
        <Header theme={theme} toggleTheme={themeToggler} />
        <Component {...pageProps} />
        {/* </Layout> */}
      </ThemeProvider>
    </CountryProvider>
  );
}

export default MyApp;
