import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return(
        <div>
            <AppBar className='nav-bar'  position='static'>
                <Toolbar className='nav-item'>
                    <Typography className='nav-brand' variant='h5'>Pradhumna Pancholi</Typography>
                    <div className='nav-link'>
                        <Button className='nav-option'>About</Button>
                        <Button className='nav-option'>Portfolio</Button>
                        <Button className='nav-option'>Contact</Button>
                    </div> 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar