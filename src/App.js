import {ThemeProvider} from "@mui/material";
import {mainTheme} from "./theme/mainTheme";
import MainPage from "./page/MainPage";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
        <MainPage />
    </ThemeProvider>
  );
}

export default App;
