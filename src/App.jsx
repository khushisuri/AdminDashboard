import { useContext } from "react";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [theme, colorMode] = useMode();
  const ThemeContext = useContext(ColorModeContext);
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
