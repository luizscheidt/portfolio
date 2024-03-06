import { Grid, Typography } from "@mui/material"

import "./Projects.css"

import BeakemCard from "./BeakemCard";
import YelpCampCard from "./YelpCampCard";


 function Projects(){
    return (
        <Grid container spacing={1} className="SecondSection" sx={{mt:0.01, height: "100vh"}}>
            <Grid item xs={3}>
        
            </Grid>
            <Grid item xs={6} className="ProjectSection">
                <BeakemCard />
                <YelpCampCard />
            </Grid>

 
        </Grid>
     
    )
}

export default Projects;