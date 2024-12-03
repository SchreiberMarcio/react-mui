import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyle } from "./config/global/GlobalStyles";
import {BasicTable} from "./components/Table";
import { BasicTooltip } from "./components/Toltip";
import { PrimarySearchAppBar } from "./components/NavBar";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <PrimarySearchAppBar/>
      <BasicTable />
      <BasicTooltip />
      <AppRoutes />
    </>
  );
}

export default App;
