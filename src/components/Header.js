import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <Card fluid className='card'>
                <CardContent className='card-content'>
                    <Typography>Pradhumna Pancholi</Typography>
                    <Typography>Software Developer & Blogger @ Geekstuffpro.tech</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Header