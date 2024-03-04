import {Avatar, Grid} from "@mui/material"
import "./FirstSection.css"
import MainCard from "./MainCard"
import LogoLine from "./LogoLine"

export default function FirstSection(){
    return (
        <Grid container spacing={1}>
           <Grid item md={3} xs={12} className="FirstSection">
                <Avatar
                    alt="Profile Pic"
                    src="./IMG_7303.jpg"
                    sx={ { width: "100%", height: "55%", mt: 20 }}
                    className="Avatar"
                    
                />
           </Grid>
           <Grid item xs={8}>
                <MainCard/>
           </Grid>
           <Grid item xs={1} sx={{mt: 10}}>
                <LogoLine/>
           </Grid>
        </Grid>
    )
}