import { Card, CardContent, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';

const ProjectCard = (data) => {
    const {name, link, description} = data
    console.log(data)
    return(   
        <div>
            <Grid item sm={12} md={4} >
                <Card>
                    <CardContent>
                        <Typography variant='h6'>{name}</Typography>
                        <Typography variant='body2' component='p'>{description}</Typography>
                        <Link to={link}>Source</Link>
                    </CardContent>
              </Card>
            </Grid>
        </div>
    )
}

export default ProjectCard