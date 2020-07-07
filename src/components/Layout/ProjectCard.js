import { Button, Card, CardContent, Link, Typography } from '@material-ui/core';
import React from 'react';

const ProjectCard = (data) => {
    const {name, link, description} = data
    console.log(data)
    return(   
        <div>
            <Card className='project-card'>
                <CardContent className='project-content'>
                    <Typography variant='h5'>Project Name</Typography>
                    <Typography variant='body2' component='p'>1Esse sunt esse minim officia sunt sit Lorem eu sint aliqua labore in.In qui id occaecat sunt Lorem consequat consectetur reprehenderit duis.Excepteur ut sint laborum elit velit nisi labore officia.</Typography>
                    <Button>
                        <Link to={link}>Check it out</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard