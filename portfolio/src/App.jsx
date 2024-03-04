import FirstSection from "./FirstSection"
import Navbar from "./Navbar"
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 
      'Fjalla One',
      fontWeight: 700
  },});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <FirstSection/>
      </ThemeProvider>
    </>
  )
}

export default App
