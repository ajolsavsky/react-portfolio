import React from "react";
import About from "../components/About";
import {
    Container,
    Box
} from '@mui/material';
import headshot from "../images/headshot.png"

function homePage() {
    return (
        <>
        <Box>
            <Container>
            <Box>
                <img
                src={headshot}
                alt="Alex Olsavsky Headshot"
                />
            </Box>
            </Container>
        </Box>
        <About />
        </>
    )
}

export default homePage;