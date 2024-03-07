import { useRef } from "react"

import "./App.css"

import FirstSection from "./FirstSection"
import Navbar from "./Navbar"
import Projects from "./Projects";
import About from "./About";


import { createTheme, ThemeProvider, Typography } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: 
      'Fjalla One',
      fontWeight: 700
  },});

function App() {
  const ref = useRef(null)
  const ref2 = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <FirstSection handleClick={handleClick}/>
      <div ref={ref}></div>
      <Projects handleClick={handleClick2}/>
      <div ref={ref2}></div>
      <About/>
      </ThemeProvider>
    </>
  )
}

export default App
