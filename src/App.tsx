import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyle } from './config/global/GlobalStyles';
import BasicTooltip from "./components/Toltip";
import BasicTable from "./components/Table";


function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <BasicTable/>
      <BasicTooltip/>
      <AppRoutes />
    </>
  );
}

export default App;
