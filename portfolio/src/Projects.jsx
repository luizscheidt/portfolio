import { Grid, Typography } from "@mui/material"
import "./Projects.css"

export default function Projects(){
    return (
        
        <Grid container spacing={1} sx={{mt:0.01, height: "100vh", backgroundColor: "#219ebc", flexGrow: 1}}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} className="ProjectSession">
            <Typography variant="h2" component="h2">
                Projects
            </Typography>
            </Grid>

 
        </Grid>
       
    )
}
