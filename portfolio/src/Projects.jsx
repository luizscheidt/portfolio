import { Grid, Typography } from "@mui/material"

import "./Projects.css"

import BeakemCard from "./BeakemCard";
import YelpCampCard from "./YelpCampCard";


export default function Projects(){
    return (
        <Grid container spacing={1} sx={{mt:0.01, height: "100vh", backgroundColor: "#219ebc"}}>
            <Grid item xs={3}>
            <Typography variant="h2" component="h2" >
                    Projects
                </Typography>
            </Grid>
            <Grid item xs={6} className="ProjectSession">
                <BeakemCard />
                <YelpCampCard />
            </Grid>

 
        </Grid>
     
    )
}
