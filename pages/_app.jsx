import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/layouts/Header";
import CountryProvider from "../context/CountryContext";
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

const lightTheme = {
  background: "hsl(0, 0%, 98%)",
  elements: "hsl(0, 0%, 100%)",
  text: "hsl(200, 15%, 8%)",
  input: "hsl(0, 0%, 52%)",
};

const darkTheme = {
  background: "hsl(207, 26%, 17%)",
  elements: "hsl(209, 23%, 22%)",
  text: "hsl(0, 0%, 100%)",
  input: "hsl(209, 23%, 22%)",
};

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
