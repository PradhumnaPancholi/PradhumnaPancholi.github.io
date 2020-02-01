import { Drawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState } from 'react';

const Sidebar = () => {
    const [state, setState] = useState({right: false})

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
    };

    const navOptions = ['About', 'Portfolio', 'Contact']

    const navLinks = side => (
        <div>
            <List>
                {navOptions.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
    
    return(
        <div>
            <Button onClick={toggleDrawer('right', true)}>
                <i class="fas fa-bars"></i>
            </Button>
            
            <Drawer anchor='right' open={state.right} onClose={toggleDrawer('right', false)}>
                {navLinks('right')}
            </Drawer>
        </div>
    )
}

export default Sidebar