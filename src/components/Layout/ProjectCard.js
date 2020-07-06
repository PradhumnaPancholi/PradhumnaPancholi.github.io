import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';

const ProjectCard = () => {
    return(
        <div>
            <Grid item sm={12} md={4} >
                <Card>
                    <CardMedia />
                    <CardContent>
                        <Typography variant='h6'>Sleek</Typography>
                        <Typography variant='body2' component='p'>lorem1bhjjbbjhbjhbjhbhjbhbh</Typography>
                        <Link>Source</Link>
                        <Link>Demo</Link>
                    </CardContent>
              </Card>
            </Grid>
        </div>
    )
}

export default ProjectCard