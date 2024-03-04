import {Avatar, Grid} from "@mui/material"
import "./FirstSection.css"

export default function FirstSection(){
    return (
        <Grid container spacing={2}>
           <Grid item xs={3} className="FirstSection">
            <Avatar
                    alt="Profile Pic"
                    src="./IMG_7303.jpg"
                    sx={{ width: 300, height: 300 }}
                    className="Avatar"
                />
           </Grid>
        </Grid>
    )
}