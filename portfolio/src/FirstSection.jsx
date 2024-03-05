import {Avatar, Grid} from "@mui/material"

import "./FirstSection.css"

import MainCard from "./MainCard"
import LogoLine from "./LogoLine"

export default function FirstSection(){
    return (
        <Grid container spacing={1}>
           <Grid item md={4} xs={12} className="FirstSection">
                <img src="./IMG_7303.jpg" alt="Profile Pic" className="Avatar" />
           </Grid>
           <Grid item lg={7} md={8}>
                <MainCard/>
           </Grid>
           <Grid item lg={1} md={12} sx={{mt: 10}}>
                <LogoLine/>
           </Grid>
        </Grid>
    )
}