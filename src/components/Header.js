import { Button, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
    return(
        <div className='header'>
                <Typography>Pradhumna Pancholi</Typography>
                <Typography>Software Developer & UI/UX Developer</Typography>
                <Button className='waves-effect waves-light btn contact-btn'>Get In Touch</Button>
        </div>
    )
}

export default Header