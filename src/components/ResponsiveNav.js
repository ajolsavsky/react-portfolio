import * as React from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    Menu,
    MenuItem,
    ButtonGroup
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = ['home', 'work', 'resume', 'contact'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            A|O
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link style={{textDecoration: 'none'}} to={`/react-portfolio/${page}`}>
                        <Button key={page} sx={{ my: 2, color: 'primary.dark', textDecoration: 'none' }}>
                        {page}
                        </Button>
                        </Link>
                    </Typography>
                </MenuItem>
              ))}
              </ButtonGroup>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            A|O
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <ButtonGroup variant="text" aria-label="outlined primary button group">
            {pages.map((page) => (
                <Link style={{textDecoration: 'none'}} key={page} to={`/react-portfolio/${page}`}>
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                    >
                        {page}
                    </Button>
                </Link>
            ))}
            </ButtonGroup>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
                href="https://github.com/ajolsavsky"
                target="_blank"
            >
                <GitHubIcon />
            </IconButton>
            <IconButton
                href="https://linkedin.com/in/alexandraolsavsky"
                target="_blank"
            >
                <LinkedInIcon/>
            </IconButton>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;