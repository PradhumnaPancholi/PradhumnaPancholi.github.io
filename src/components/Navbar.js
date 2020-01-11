import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5'>Pradhumna Pancholi</Typography>
                    <Button>About</Button>
                    <Button>Portfolio</Button>
                    <Button>Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar