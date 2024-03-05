import FirstSection from "./FirstSection"
import Navbar from "./Navbar"
import { createTheme, ThemeProvider } from '@mui/material';
import Projects from "./Projects";

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
      <Projects/>
      </ThemeProvider>
    </>
  )
}

export default App
