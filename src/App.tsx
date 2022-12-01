import React from 'react';
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import TopBar from "./screens/global/Topbar";
import SideBar from "./screens/global/SideBar";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./screens/dashboard";
import Bar from "./screens/bar";
import Contacts from "./screens/contacts";
import FAQ from "./screens/faq";
import Form from "./screens/form";
import Geography from "./screens/geography";
import Invoices from "./screens/invoices";
import Line from "./screens/line";
import Pie from "./screens/pie";
import Team from "./screens/team";
import Calendar from "./screens/calendar";


function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App;
