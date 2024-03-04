import { Box, Typography, Fab } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./MainCard.css"

export default function MainCard(){
    return (
        <Box
        marginTop={20}
        
        >
            <Typography variant="h4" component="h1">
                Meu nome é...
            </Typography>
            <Typography variant="h2" component="h2">
                Luiz Felipe Eberhardt Buss Scheidt
            </Typography>
            <Typography variant="h3" component="h3">
                Desenvolvedor Web
            </Typography>
            <Fab color="dark" aria-label="add" sx={{m:1}}>
                <GitHubIcon />
            </Fab>
            <Fab color="dark" aria-label="add">
                <LinkedInIcon />
            </Fab>
        </Box>
        )
}

// Javascript, Python, HTML, CSS
// React/Node/Express/MongoDB/REST/ejs 
// GIT
// Frameowrks como Bootstrap
// Banco de dados SQL  