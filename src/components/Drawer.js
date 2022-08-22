import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Drawer() {
    return (
        <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 0 }}
              >
                <MenuIcon />
              </IconButton>
    )
}

export default Drawer;