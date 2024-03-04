import { Box, Typography, Fab } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./MainCard.css"

export default function MainCard(){
    return (
        <Box
        marginTop={20}
        marginLeft={5}
        >
            <Typography variant="h4" component="h1">
                My name is...
            </Typography>
            <Typography variant="h2" component="h2">
                Luiz Felipe Eberhardt Buss Scheidt
            </Typography>
            <Typography variant="h3" component="h3">
                Web Developer - Brasil
            </Typography>
            <Typography variant="h5" component="h4">
                Student at UFSC
            </Typography>
            <Fab color="dark" aria-label="add" sx={{m:1}}>
                <a href="https://github.com/luizscheidt">
                <GitHubIcon />
                </a>                
            </Fab>
            <Fab color="dark" aria-label="add">
            <a href="https://www.linkedin.com/in/luiz-felipe-scheidt-a1087624b/">
                <LinkedInIcon />
            </a>
            </Fab>
        </Box>
        )
}

// Javascript, Python, HTML, CSS
// React/Node/Express/MongoDB/REST/ejs 
// GIT
// Frameowrks como Bootstrap
// Banco de dados SQL  