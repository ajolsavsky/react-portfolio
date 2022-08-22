import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerComponent from './Drawer';

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <DrawerComponent />
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Alex Olsavsky
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default NavBar;