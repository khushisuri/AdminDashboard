import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import ProfileForm from "./pages/ProfileForm/ProfileForm";
import { Calendar } from "@fullcalendar/core/index.js";
import CalendarPage from "./pages/Calendar/Calendar";
import FAQ from "./pages/FAQPage/FAQ";
import BarChart from "./components/BarChart";
import BarChartPage from "./pages/BarChartPage/BarChartPage";
import PieChart from "./components/PieChart";
import PieChartPage from "./pages/PieChartPage/PieChartPage";
import LineChartPage from "./pages/LineChartPage/LineChartPage";
import GeographyChart from "./components/GeographyChart";
import GeographyChartPage from "./pages/GeographyChartPage/GeographyChartPage";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/invoices" element={<Invoices />}></Route>
                <Route path="/profile" element={<ProfileForm />}></Route>
                {/* <Route path="/calendar" element={<CalendarPage/>}></Route> */}
                <Route path="/faq" element={<FAQ />}></Route>
                <Route path="/barchart" element={<BarChartPage />}></Route>
                <Route path="/piechart" element={<PieChartPage />}></Route>
                <Route path="/linechart" element={<LineChartPage />}></Route>
                <Route
                  path="/geographychart"
                  element={<GeographyChartPage/>}
                ></Route>
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
