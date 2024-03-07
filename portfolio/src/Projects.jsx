import { Grid, Typography, Stack, Button } from "@mui/material"

import "./Projects.css"

import BeakemCard from "./BeakemCard";
import YelpCampCard from "./YelpCampCard";


 function Projects({handleClick}){
    return (

        <Grid container spacing={1} className="SecondSection" sx={{mt:0.01, height: "100vh"}}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6} className="ProjectSection">
                <Stack spacing={2} className="ProjectTitle">
                    <Typography variant="h2" component="h2">
                        Projects
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{pt: 5, pb:5}}>
                        <YelpCampCard />
                        <BeakemCard />
                    </Stack>
                    <Button size="large" variant="contained" sx={{color: "aqua", backgroundColor: "black"}} onClick={handleClick}>
                        About me    
                    </Button>
                </Stack>

            </Grid>
        </Grid>
     
    )
}

export default Projects;