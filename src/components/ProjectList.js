import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const ProjectList = () => {
    return(
        <div className='projects'>
            <Typography className='section-header'>Projects</Typography>
            <hr className='under-line' />
            <Grid container>
                <Grid item sm={12} md={4} >
                    {/* Render list of projects */}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectList