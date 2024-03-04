import { Grid } from "@mui/material";
import "./LogoLine.css"

export default function LogoLine(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>               
                <img src="../logos/html.png" alt="html" />
                <img src="../logos/css.png" alt="css" />
                <img src="../logos/javascript.png" alt="javascript" />
                <img src="../logos/nodejs.png" alt="node" />
                <img src="../logos/react.png" alt="react" />
                <img src="../logos/python.png" alt="python" />
           </Grid>
        </Grid>
    )
}