import React from "react";
import About from "../components/About";
import {
    Container,
    Box,
    Grid,
    Item,
    Typography
} from '@mui/material';
import headshot from "../images/headshot.png"
import Image from 'react-bootstrap/Image'

function homePage() {
    return (
        <>
        <Box>
        <Grid container direction="row" justifyContent="center" alignItems="center">
  <Grid item xs>
    <Box sx={{m: 10}}>
        <Typography variant="h2" sx={{ color: "primary.dark" }}>Hi, I'm Alex Olsavsky!</Typography>
        <Typography variant="h5">I'm a software developer with roots as a nonprofit leader and professional singer.</Typography>
    </Box>
  </Grid>
  <Grid item xs>
  <Box sx={{mt: 10, mr: 5 }}>
  <Image roundedCircle fluid
                src={headshot}
                alt="Alex Olsavsky Headshot"
                />
                </Box>
  </Grid>
</Grid>
</Box>
        
        {/* <Box>
            <Container>
            <Box>
                <Image roundedCircle fluid
                src={headshot}
                alt="Alex Olsavsky Headshot"
                />
            </Box>
            </Container>
        </Box> */}
        <About />
        </>
    )
}

export default homePage;