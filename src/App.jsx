import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ProSidebarProvider } from 'react-pro-sidebar';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
        <div className="app">
          <main className="content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
              </Routes>
            </BrowserRouter>
          </main>
        </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
