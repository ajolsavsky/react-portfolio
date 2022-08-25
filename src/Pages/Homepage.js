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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="center" alignItems="center">
  <Grid item xs={6} sm={4} md={4}>
  <Box sx={{ mt: 5, mr: 5, ml: 5 }}>
  <Image roundedCircle
                src={headshot}
                alt="Alex Olsavsky Headshot"
                width="100%"
                />
                </Box>
  </Grid>
  <Grid item xs={6} sm={4} md={8}>
    <Box sx={{mt: 5, mr: 5, ml: 5 }}>
        <Typography variant="h2" sx={{ color: "primary.dark" }}>Hi, I'm Alex Olsavsky!</Typography>
        <Typography variant="h5">I'm a Full Stack Software Developer with roots as a nonprofit leader and professional singer.</Typography>
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