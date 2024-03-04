import {Avatar, Grid} from "@mui/material"

import "./FirstSection.css"

import MainCard from "./MainCard"
import LogoLine from "./LogoLine"

export default function FirstSection(){
    return (
        <Grid container spacing={1}>
           <Grid item md={3} xs={12} className="FirstSection">
                <img src="./IMG_7303.jpg" alt="Profile Pic" className="Avatar" />
           </Grid>
           <Grid item lg={8} md={9}>
                <MainCard/>
           </Grid>
           <Grid item xl={1} md={12} sx={{mt: 10}}>
                <LogoLine/>
           </Grid>
        </Grid>
    )
}