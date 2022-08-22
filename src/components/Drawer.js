import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { 
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

function DrawerComponent() {
    //set the state of drawer component, default is 'false' or closed
    const [openDrawer, setOpenDrawer] = useState(false);
    
    return (
    //empty brackets allows returning one parent element as an alternate to an empty div
    <>
        <Drawer
            open={openDrawer}
            anchor="right"
            onClose={() => setOpenDrawer(false)}
        >
            <List>
                <ListItem>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText>
                        Portfolio
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText>
                        Resume
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText>
                        Contact
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </Drawer>
            
        <IconButton
        // on the click, set the state to the opposite of the current state
            onClick={() => setOpenDrawer(!openDrawer)}
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
        >
            <MenuIcon />
        </IconButton>
    </>
    )
}

export default DrawerComponent;