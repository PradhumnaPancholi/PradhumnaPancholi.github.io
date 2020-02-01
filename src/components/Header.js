import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
    return(
        <div className='header' width={1}>
            <Card fluid className='card' width={1}>
                <CardContent className='card-content'>
                    <Typography>Pradhumna Pancholi</Typography>
                    <Typography>Software Developer & Blogger @ Geekstuffpro.tech</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Header