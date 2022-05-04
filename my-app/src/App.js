import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/styles";
import { MiddleTextStyled } from "./components/MiddleText";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: {
    size: "768px",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <MiddleTextStyled></MiddleTextStyled>
      </div>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default App;
