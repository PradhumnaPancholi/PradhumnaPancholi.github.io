import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import Sidebar from './Sidebar';

const Navbar = () => {
    return(
        <div>
            <AppBar className='nav-bar'  position='static'>
                <Toolbar className='nav-items'>
                    <Typography className='nav-brand' variant='h5'>Pradhumna Pancholi</Typography>
                    {/* <div className='nav-links'>
                        <Button className='nav-option'>About</Button>
                        <Button className='nav-option'>Portfolio</Button>
                        <Button className='nav-option'>Contact</Button>
                    </div>  */}
                    <Sidebar />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar