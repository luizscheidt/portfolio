import {Avatar, Grid} from "@mui/material"
import "./FirstSection.css"
import MainCard from "./MainCard"

export default function FirstSection(){
    return (
        <Grid container spacing={2}>
           <Grid item xs={3} className="FirstSection">
                <Avatar
                    alt="Profile Pic"
                    src="./IMG_7303.jpg"
                    sx={{ width: 350, height: 350, mt: 20 }}
                    className="Avatar"
                />
           </Grid>
           <Grid item xs={9}>
                <MainCard/>
           </Grid>
        </Grid>
    )
}