import { Button, Card, CardContent, Link, Typography } from '@material-ui/core';
import React from 'react';

const ProjectCard = ({data}) => {
    const {name, link, description} = data
    return(   
        <div>
            <Card className='project-card'>
                <CardContent className='project-content'>
                    <Typography variant='h5'>{name}</Typography>
                    <Typography variant='body2' component='p'>{description}</Typography>
                    <Button>
                        <Link to={link}>Check it out</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard