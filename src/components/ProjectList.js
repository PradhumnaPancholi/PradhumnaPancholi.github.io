import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import projects from '../data/projects.json';
import ProjectCard from './Layout/ProjectCard';

const ProjectList = () => {
    return(
        <div className='projects'>
            <Typography className='section-header'>Portfolio</Typography>
            <hr className='under-line' />
            <Grid 
                container 
                direction='row'
                justify='center'
                alignItems='center'
                className='project-list'
                spacing={3}
            >
                {/* Render list of projects */}
                {projects.map((project) => {
                    return( 
                        <Grid key={project.name} item xs={12} md={4}>
                            <ProjectCard data={project}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ProjectList