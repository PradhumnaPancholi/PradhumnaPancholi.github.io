import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import projects from '../data/projects.json';
import ProjectCard from './Layout/ProjectCard';

const ProjectList = () => {
    return(
        <div className='projects'>
            <Typography className='section-header'>Projects</Typography>
            <hr className='under-line' />
            <Grid container>
                {/* Render list of projects */}
                {projects.map((project) => {
                    return( 
                        <Grid item sm={12} md={4} >
                            <ProjectCard data={project}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ProjectList