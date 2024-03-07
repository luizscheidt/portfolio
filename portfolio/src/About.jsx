import { Grid, Typography, Stack, Button } from "@mui/material"

import "./About.css"

export default function (){
    return (
        <Grid container spacing={1} className="ThirdSection" sx={{mt:0.01, height: "100vh"}}>
            <Grid item xs={4}>
            <Typography variant="h2" component="h2">
                Who am I?
            </Typography>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
            <Typography variant="h2" component="h2">
                Quem sou eu?
            </Typography>
            </Grid>
        </Grid>
    )
}