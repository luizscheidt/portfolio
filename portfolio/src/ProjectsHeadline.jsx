import { forwardRef } from "react"

import {Typography } from "@mui/material"


function ProjectsHeadline({ref}){
    return (
        <div ref={ref}>
            <Typography variant="h2" component="h2" >
                Projects
            </Typography>
        </div>
    )
}

export default forwardRef(ProjectsHeadline);