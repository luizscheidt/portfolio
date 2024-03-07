import { Grid, Button, Box, Fab } from "@mui/material"
import NavigationIcon from "@mui/icons-material/Navigation"
import { useRef } from "react"

import "./FirstSection.css"

import MainCard from "./MainCard"
import LogoLine from "./LogoLine"

export default function FirstSection({handleClick}){
    const div = useRef(null)
    return (
       <Box>
            <Grid container spacing={1} ref={div}>
                <Grid item md={4} xs={12} className="FirstThird">
                        <img src="../images/IMG_7303.jpg" alt="Profile Pic" className="Avatar" />
                </Grid>
                <Grid item lg={7} md={8}>
                        <MainCard />                        
                        <Grid className="VerticalLogos">
                            <LogoLine/>
                        </Grid>
                        <div className="JumpButton">
                        <Button size="large" variant="outlined" onClick={handleClick}>
                            See Projects    
                        </Button>    
                        </div> 
                </Grid>
                <Grid item lg={1} md={12} sx={{mt: 10}} className="HorizontalLogos">
                        <LogoLine />
                </Grid >
            </Grid>
       </Box>
    )
}